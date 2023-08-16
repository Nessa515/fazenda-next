import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'
import Banner from '@/components/Banner'
import ListCards from '@/components/ListCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Cabecalho />
      <Banner />
      <ListCards />
    </>
  )
}
