import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import { Input } from '@/components/ui/input'

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
            <Input placeholder='E-mail' type='text' />
            <Input placeholder='Senha' type='password' />
          </form>
        </div>


      </div>
    </ >
  )
}
