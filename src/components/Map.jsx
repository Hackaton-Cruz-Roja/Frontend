import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Geolocalization from './Geolocalization';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 41.39,
  lng: 2.16
};

function MyComponent() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_MAPS_HACKATHON,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        marker={[
          {lat: 41.39, lng: 2.16 }
        ]}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)