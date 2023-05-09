import './globals.css'
import  Nav  from '../components/nav'
import  Footer from '../components/footer'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tausi Store',
  description: 'Glamour for the masses',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
        <body className={` ${inter.className}  bg-smoke `}>
          <Nav></Nav>
            {children}
          <Footer></Footer>
        </body>
    </html>
  )
}

