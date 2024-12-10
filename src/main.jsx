import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Home from './components/home/Home'
import { RouterProvider } from 'react-router'


// Note that createBrowserRouter takes in an array of path JS objects
// Each object defines a number of endpoints underthat main endpoint.

// Ex : Below one defines a root endpoint and all other endpts under it 
// Each JS path object contains several items. 
// mainly : path(url endpt), element(component/template to load),
//          children ( array of other path object under same urlroot)
const router = createBrowserRouter( [
    {
      path : '/',
      element : < Layout />, // In our case, layout acts as root
      children : [
                  {
                    index : true, // We can also write it as path : ""
                    element : < Home />
                  },
                  {
                    path : 'about',
                    element : < About />
                  },
                  {
                    path : 'contact',
                    element : < Contact />
                  }
              ]
    }
],
)

// Using Creat

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
