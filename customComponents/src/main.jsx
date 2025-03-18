import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//componets
import Header from './components/header.jsx';
import Main from './components/mainContent.jsx';
import Footer from './components/footer.jsx';


createRoot(document.getElementById('root')).render(
  <>
   <Header />
   <Main />
   <Footer />
  </>
)
