import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TRAVEL_DATA from './data/travel.data.js'

//components
import Header from './components/header'
import Entry from './components/entry'

function App() {

  const travelElement = TRAVEL_DATA.map((item) => {
    return (
      <Entry
        key={item.id}
        entry ={item} //another way of passing props
        // -- {...item} //is the another way
        // img={{
        //   src: item.img.src,
        //   alt: item.img.alt
        // }}
        // title={item.title}
        // country={item.country}
        // googleMapsLink={item.googleMapsLink}
        // dates={item.dates}
        // text={item.text}
      />
  )
  })
  return (
    <>
      <Header />
      {travelElement}
    </>
  )
}

export default App
