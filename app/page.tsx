import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contanct'
import Link from 'next/link'




export default function Home() {
  return (
    <div className='max-w-[30rem] mx-auto'>
      <title>b1lgee</title>
     <Header/>
     <About/>
     <Projects/>
     <Contact/>

     



    </div>
  )
}
