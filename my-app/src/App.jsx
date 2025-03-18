import React, { useState } from 'react'
import './App.css'

//components
import Welcome from './components/welcome.jsx';
import Counter from './components/counter.jsx';
import DataFetch from './components/dataFetch.jsx';


//props
function Greet(props) {
  return <h1>Helllo {props.name}</h1>
}

//props with default values
function Hello({name = 'Sir'}) {
  return <h1>hey {name}</h1>
}


function App() {

  const element = React.createElement("h", null, "Hello");

  return (
   <>
   <h1>
    <Welcome/>
   </h1>
   <div>
   <Greet name="SIR" />
   <Counter />
   <DataFetch />
   </div>
   
   </>
  )
}

export default App
