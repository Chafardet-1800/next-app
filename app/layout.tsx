import Nav from '@shared/components/Nav'
import '@public/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and Share AI prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='main'>
          <div className='gradient'/>
        </div>
        
        <main className='app'>
        
          <Nav />

          {children}
        
        </main>
        
      </body>
    </html>
  )
}
