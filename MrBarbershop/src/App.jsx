import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about' element ={<Home/>}/>
        <Route path='/contact' element ={<Home/>}/>
        


      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App