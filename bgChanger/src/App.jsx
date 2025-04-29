import { useState } from 'react'
import Pallete from './components/Pallete'
import './App.css'

function App() {
  const [color , setColor] = useState('white');

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{backgroundColor : color}}
    >
      <div className='bg-white rounded-lg justify-center bottom-12 px-2'>
        <Pallete setColor={setColor} />
      </div>
      
    </div>
  )
}

export default App
