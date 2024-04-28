import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import logoImg from '../../public/logo.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>OrderFlowApp - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo Order flow app' color='#FFF' />
        <div className={styles.login}>
          <form>
            <input type='text' />
          </form>
        </div>


      </div>
    </ >
  )
}
