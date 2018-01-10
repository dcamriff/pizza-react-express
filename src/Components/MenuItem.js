import React, { Component } from 'react'
import pizzaData from '../pizzaData'

class MenuItem extends Component {
    render() {

        return (
            
            <div id="menu" className="menu-item">
            <h2>{this.props.name}</h2>
            <h3>{this.props.price}</h3>
            <p>{this.props.description}</p>

            </div>
            
        )
    }
}

export default MenuItem