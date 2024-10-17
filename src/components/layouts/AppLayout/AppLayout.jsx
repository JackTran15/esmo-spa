import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer/Footer'

export const AppLayout = ({ children }) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
