import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const ConnectToDB = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {

        const conn = await mongoose.connect((process.env.MONGODB_URI as string), {
            dbName: 'share_promp',
            useUnifiedTopology: true,
            useNewUrlParser: true,
        } as ConnectOptions);

        isConnected = true;

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};