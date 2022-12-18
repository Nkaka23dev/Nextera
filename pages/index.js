import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex'>
      <h1 className="text-3xl font-bold underline text-red-600 m-auto">
        Coming.. soon..
      </h1>
    </div>
  )
}