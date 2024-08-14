import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@shared/model/user';
import { ConnectToDB } from '@shared/utils/databes';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '1094097429720-j7frs69joolms2fp8tgo1pk5iin57ke7.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async session({ session }: any) {

      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user!.email });

      session.user.id = sessionUser._id.toString();

      return session;

    },
    async signIn({ profile }: any) {
      try {

        await ConnectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;

      } catch (error: any) {

        console.log("Error checking if user exists: ", error.message);
        return false;

      }
    },
  }
})

export { handler as GET, handler as POST }