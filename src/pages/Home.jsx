import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import FAQs from '../components/FAQs'
import Blogs from '../components/blogs'
import QrAction from '../components/QrAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <FAQs/>
        <Blogs/>
        <QrAction/>
    </div>
  )
}
