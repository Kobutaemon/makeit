import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import FirstView from './components/FirstView/FirstView'
import AboutUs from './components/AboutUs/AboutUs'
import Activity from './components/Activity/Activity'
import Team from './components/Team/Team'

function App() {

  return (
    <>
      <Header />
      <FirstView />
      <div className="main">
        <AboutUs />
        {/* <Achievements /> */}
        <Activity />
        <Team />
      </div>
    </>
  )
}

export default App
