import Image from 'next/image'
import { Inter } from 'next/font/google'
import Roslindale from 'next/font/local'

const roslindale = Roslindale({ 
  src: '../../public/fonts/Roslindale-DisplayCondensedMedium-Testing.woff2',
  display: 'swap',
 })

const inter = Inter({ subsets: ['latin'] })


const Home = ({}) => {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-24">

      <div className="flex flex-col items-center justify-center">
        <h1 className={`text-8xl text-red ${roslindale.className} `}>Tausi Store</h1>
        <p className={ `text-2xl text-black  ${inter.className} `}>Glamour for the masses</p>
      </div>
    </main>
  )
}


export default Home