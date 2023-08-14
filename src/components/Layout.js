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
            <p>Copyright 2023 Joseph Brooks</p>
        </footer>
    </div>
  )
}
