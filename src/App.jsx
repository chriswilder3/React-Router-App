import { useState } from 'react'

import './App.css'

import Home from './components/home/Home'
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Contact from './components/contact/Contact';
import About from './components/about/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
