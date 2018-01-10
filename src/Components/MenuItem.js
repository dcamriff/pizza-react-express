import React, { Component } from 'react'
// import pizzaData from '../pizzaData'

class MenuItem extends Component {
    render() {

        return (
            
            <div id="menu" className="menu-item">
            <div>
            <img src={this.props.image} alt="image"/>
            </div>
            <h2>{this.props.name}</h2>
            <h3>price: {this.props.price}</h3>
            <p>{this.props.description}</p>

            </div>
            
        )
    }
}

export default MenuItem