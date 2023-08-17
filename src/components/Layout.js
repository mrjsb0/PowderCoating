import React from 'react'
import Navbar from './Navbar'
import global from '../styles/global.css'

export default function Layout({ children}) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
          {children}
        </div>
        <footer>
            <p>JB Coatings LLC</p>
        </footer>
    </div>
  )
}
