import React, {Component} from 'react'

class Location extends Component {
    render() {

        return (

            
                <div className="location">
                    <p>{this.props.name}</p>
                    <strong>Address: {this.props.address}</strong>
                    <p>{this.props.phone}</p>
                </div>
            
        )
    }
}

export default Location