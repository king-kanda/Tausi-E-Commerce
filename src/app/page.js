import Image from 'next/image'
import { Inter } from 'next/font/google'
import Roslindale from 'next/font/local'
import styles from '../styles/home.module.scss'

const roslindale = Roslindale({ 
  src: '../../public/fonts/Roslindale-DisplayCondensedLight-Testing.woff2',
  display: 'swap',
 })

const inter = Inter({ subsets: ['latin'] })


const Home = ({}) => {
  return (
    <main className="">
      <section className={` ${styles.hero}  z-10 `}>
        <div className="flex flex-col items-center justify-center">
          <h1 className={`text-9xl text-red ${roslindale.className} `}>Kristina Nor.</h1>
          <p className={ `text-sm text-red w-2/4 mt-6  ${inter.className} `}>
          The ultimate destination for beauty enthusiasts looking to indulge in luxurious and glamorous products that will make them feel like royalty.
          </p>
        </div>
      </section>
      {/* product examplesection */}
      <section className={`products`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          </div>
      </section>
    </main>
  )
}


export default Home