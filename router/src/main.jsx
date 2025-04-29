import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contack from './components/Contact/Contack.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {path : '', element : <Home />},
//       {path : 'about' , element : <About />},
//       {path : 'contact', element : <Contack />},
//       {path : 'github' , element : <Github />}
//     ]
//   }
// ])

// another way 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contack />} />
      <Route path="user/:id" element={<User />} />
      <Route
       loader = {githubInfoLoader}
       path="github" 
       element={<Github />}

      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
