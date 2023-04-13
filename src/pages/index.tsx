import Image from 'next/image'
import { Inter } from 'next/font/google'
import IndexStyles from '../styles/index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

const element = <FontAwesomeIcon icon={faArrowDown} />

export default function Home() {
  return (
    <main className={IndexStyles.main}>
      <div className={IndexStyles.container}>
        <div className={IndexStyles.containerLeft}>
          <div className={IndexStyles.navbar}>
            <div><p className={IndexStyles.nav}>Work</p></div>
            <div><p className={IndexStyles.nav}>Contact</p></div>
          </div>
          <div></div>
          <div>
            <p>Sahil<br/>Trivedi</p>
          </div>
        </div>
      </div>
    </main>
  )
}
