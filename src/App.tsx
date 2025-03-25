import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import FirstView from './components/FirstView/FirstView'
import AboutUs from './components/AboutUs/AboutUs'
import Achievements from './components/Achievements/Achievements'
import Activity from './components/Activity/Activity'

function App() {

  return (
    <>
      <Header />
      <FirstView />
      <div className="main">
        <AboutUs />
        <Achievements />
        <Activity />
      </div>
    </>
  )
}

export default App
