import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey= 'AIzaSyCvaF5r9xYO2_keUyH23sR_xo6No8t-qgk'
        strokeWidth={3}
        strokeColor='#222'
    />
)

export default Directions