
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//creating your own element -
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
)
