import React, { Component } from 'react'

import Navbar from './components/Navbar'
import SplashImage from './components/SplashImage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
      </div>
    )
  }
}

export default App;
