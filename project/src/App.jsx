import React from 'react'
import { useState } from 'react'
 import Navbar from './Components/navbar';
 import ImageCard from './Components/ImageCard';
 import Footer from './Components/Footer';
 import Biography from './Components/Biography';
 
import './App.css'
import MoveTop from './Components/MoveTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
 <ImageCard/>
 <Biography/>
 <Footer/>
 <MoveTop/>

    </>
  )
}

export default App
