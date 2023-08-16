import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Cabecalho />
    </>
  )
}
