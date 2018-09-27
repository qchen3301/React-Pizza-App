import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Splashimage from './components/Splashimage'
import Description from './components/Description'
import Menu from './components/Menu'
import LocationList from './components/LocationList'
import Contact from './components/Contact'



class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Splashimage />
      <Description />
      <Menu />
      <LocationList />
      <Contact />
      </div>
    )
  }
}

export default App