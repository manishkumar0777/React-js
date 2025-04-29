import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//componnets 
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-green-500'>
    </div>
  )
}

export default App
