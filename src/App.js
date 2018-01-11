import React, { Component } from 'react'

import Navbar from './components/Navbar'
import SplashImage from './components/SplashImage'
import Description from './components/Description'
import MenuList from './components/MenuList'
import MenuItem from './components/MenuItem'
import Location from './components/Location'
import LocationList from './components/LocationList'
import Contact from './components/Contact'

import  pizzaData from './pizzaData'
import locationData from './locationData'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList pizza = {pizzaData} />
        <LocationList eachLocation = {locationData} />
        <Contact />
      </div>
    )
  }
}

export default App;
