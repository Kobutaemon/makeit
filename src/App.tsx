import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import FirstView from './components/FirstView/FirstView'
import AboutUs from './components/AboutUs/AboutUs'
import Activity from './components/Activity/Activity'
import Team from './components/Team/Team'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <FirstView />
      <div className="main">
        <AboutUs />
        <Activity />
        <Team />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
