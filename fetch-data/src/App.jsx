
import './App.css'
import React from 'react'

function App() {

  const [starWarData, setStarWarData] = React.useState(null);
  const [count, setCount] = React.useState(1);
  const [memeUrl, setMemeUrl] = React.useState(['']);

  // fetch("https://swapi.dev/api/people/1")
  // .then(res => res.json())
  // .then(data => setStarWarData(data))


  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarData(data))
  }, [count])

  console.log(starWarData)

  return (
    <>
      <button onClick={() => {setCount(prev => prev + 1)}}>Get New Char {count}</button>
      <pre>{JSON.stringify(starWarData, null, 2)}</pre>
    </>
  )
}

export default App
