import React from 'react'

import './App.css'

import {  Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div> 
  )
}

export default App