import React from 'react'
import { Header } from './Header'
import './App.css'
import { Homepage } from './Homepage'
import { Skills } from './Skills'
import { Project } from './Project'
import { Education } from './Education'

export const App = () => {
  return (
    <>
    <Header/>
    <Homepage/>
    <Skills/>
    <Project/>
    <Education/>
    </>
  )
}

export default App
