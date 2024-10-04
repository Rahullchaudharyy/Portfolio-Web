import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='h-full selection:not-sr-only w-auto overflow-x-hidden font-mono' style={{backgroundImage:`url('/Images/pexels-photo-7130555.webp')`}}>

<Navbar/> 
<Home/>
<Skills/>


    </div>
  )
}

export default App