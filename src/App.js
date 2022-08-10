import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Services from './components/Services'
import scrollreveal from 'scrollreveal'

export default function App() {
  useEffect(()=>{
    const sr = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    sr.reveal(
      `
      #navbar,
      #search,
      #services`, {
        opacity: 0,
        interval: 300
      }
    )
  }, [])
  return (
    <>
      <Navbar />
      <Search />
      <Services />
    </>
  )
}