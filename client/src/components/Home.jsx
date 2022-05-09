import React from 'react'
import Feeds from './Feeds'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import News from './News'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <News/>
    {/* <Feeds/>
    <Footer/> */}
    </>
  )
}
