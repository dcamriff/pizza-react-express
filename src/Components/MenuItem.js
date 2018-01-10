import React, {Component} from 'react'
// import pizzaData from '../pizzaData'

class MenuItem extends Component {
    render() {

        return (

            <div id="menu" className="menu-item">
                <img src={this.props.image} alt="image"/>

                <div className="menu-description">
                    <div className="menu-item-name">
                    {this.props.name}
                    </div>
                    <div>
                        <strong>
                        Price: {this.props.price}
                        </strong>
                    </div>

                    <div>{this.props.description}
                    </div>

                </div>
            </div>

        )
    }
}

export default MenuItem