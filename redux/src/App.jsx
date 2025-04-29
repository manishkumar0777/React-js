import { useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className='w-full h-screen bg-gray-700 items-center 
                    flex flex-col'
    >
      <AddTodos />
      <Todos /> 
    </div>
  )
}

export default App
