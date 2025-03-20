import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Person from './assets/person.webp'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/contacts'
import Joke from './components/jokes.jsx'

import JokesData from './data/jokes.data.js'
import jokesData from './data/jokes.data.js'


function App() {

  console.log(JokesData);

  const hours = new Date().getHours()
  let timeWish;

  if(hours < 12) {
    timeWish ="Morning";
  } 

  if(hours >= 12 && hours < 17) {
    timeWish = "AfterNoon";
  }

  if( hours >= 17 && hours < 20) {
    timeWish = "Evening";
  }

  if( hours >= 20) {
    timeWish = "Night"
  }

  const jokeElement = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })


  return (
    <>
      <h1> Hello ! Good {timeWish}</h1>
      <Contacts 
        img={Person}
        name="Mr. Manish"
        phoneNo="(212) 222-333-22"
        email="manishkr@gmail.com"
      />
      <Contacts 
        img={Person}
        name="Mr. Raunak"
        phoneNo="(212) 222-223-22"
        email="raunak@gmail.com"
      />
      <Contacts 
        img={Person}
        name="Mr. Praveen"
        phoneNo="(212) 23455-333-22"
        email="praveenkr@gmail.com"
      />

        <main>
           {jokeElement}
        </main>
    </>
     
  )
}

export default App
