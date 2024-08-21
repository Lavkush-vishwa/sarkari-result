import { useState } from 'react'
import logo from '../logo-new.jpeg'
import Navbar from './Components/Navbar'
import Marque from './Components/Marque'
import Button from './Components/Button'
import Tables from './Components/Tables'

function App() {


  return (
    <>
      <header className='bg-red-900 w-full flex '>
        <div className=''>
          <img className=' ml-6 p-4 ' src=
            {logo} alt="image" />
        </div>
        <div className='text-white text-center mr-60 mt-14'><p className=' ml-80 text-5xl font-bold'>SARKARI RESULT</p>
          <br />
          <span className='ml-64 border-b-2 border-dotted'> <a href="https://www.sarkariresult.com"><i class="fa-solid fa-magnifying-glass"></i> WWW.SARKARIRESULT.COM</a></span></div>
      </header>
      <Navbar />
      <Marque />
      <Button />
      <Tables />



    </>
  )
}

export default App
