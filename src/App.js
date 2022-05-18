
import React from 'react'
import Header from './Components/Head/Header'
import Home from './Components/Hero/Home'
import './App.css'
import  Features  from './Components/Features/Features'
import  Portfolio  from './Components/Portfolio/Portfolio'
import Resume from './Components/Resume/Resume'
import  Testimonial  from './Components/Testimonial/Testimonial'
import Blog from './Components/Blogs/Blog'
import  Contact  from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />

    </>
  )
}

export default App;

