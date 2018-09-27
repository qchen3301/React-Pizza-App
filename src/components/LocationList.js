import React, { Component } from 'react'
import locationData from '../locationData.js'
import Location from './Location.js'

class LocationList extends Component {
    render() {
        const locations = locationData.map( (location) => {
            return (
                <Location
                    name = {location.name}
                    address = {location.address}
                    phone = {location.phone} />
            )
        })
        return (
            <h1>Locations: </h1>
        )
    }
}

export default Location