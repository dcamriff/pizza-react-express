import React, { Component } from 'react'

import Navbar from './components/Navbar'
import SplashImage from './components/SplashImage'
import Description from './components/Description'
import MenuList from './components/MenuList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
      </div>
    )
  }
}

export default App;
