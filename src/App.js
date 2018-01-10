import React, { Component } from 'react'

import Navbar from './components/Navbar'
import SplashImage from './components/SplashImage'
import Description from './components/Description'
import MenuList from './components/MenuList'
import MenuItem from './components/MenuItem'

import  pizzaData from './pizzaData'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList pizza = {pizzaData} />
      </div>
    )
  }
}

export default App;
