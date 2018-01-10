import React, { Component } from 'react'

import MenuItem from './MenuItem'

class MenuList extends Component {
    render() {
        const menuItems = this.props.pizza.map((pizza, index) => {
            return (
            <MenuItem
                key={index}
                name={pizza.name}
                price={pizza.price}
                description={pizza.description}
                image={pizza.image} />
            )
        })

        return (
            
            <div className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                {menuItems}
                </div>
            </div>
            
        )
    }
}

export default MenuList