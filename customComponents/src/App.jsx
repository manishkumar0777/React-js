import React, { useState } from 'react'

import './App.css'
import WindowLength from './components/widowLenght'



function App() {

  const [show, setShow] = useState(true);

  function toggleShow () {
    setShow(prev => !prev)
  }

  console.log(show);
  return (
    <>
    <button onClick={toggleShow}>toggleShow</button>
    {show && <WindowLength />}
    </>
  )
}

export default App
