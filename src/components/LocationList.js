import React, { Component } from 'react'

import Location from './Location'

class LocationList extends Component {
    render() {
        const allLocations = this.props.eachLocation.map((thisLocation, index) => {
            return (
            <Location
                key={index}
                name={thisLocation.name}
                address={thisLocation.address}
                phone={thisLocation.phone} />
            )
        })

        return (
            
            <div id="locations">
                <h1>Locations:</h1>
                <div className="locations">
                {allLocations}
                </div>
            </div>
            
        )
    }
}

export default LocationList