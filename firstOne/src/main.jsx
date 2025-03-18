import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import './index.css'
import App from './App.jsx'
 

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <h2> Fun facts about React </h2>
        <ul> 
           <li>Was first released in 2013 </li>
           <li> was originally created by Jordan Walke </li>
           <li> Has well over 100k stars on github </li>
           <li> Is maintained by Meta</li>
           <li> Powers thousands of enterprise apps , including mobile apps</li>
        </ul>
    </div>
)

