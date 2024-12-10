import React from 'react'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

function Layout() {
  return (
    <>
        <Header />
        <main>
            < Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout