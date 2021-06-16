import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const style = {
   height: '250px',
   width: '100%',
}

const containerStyle = {
   position: 'relative',
   height: '250px',
   width: '100%',
}

function MapContainer(props) {
   const pickupLocationCoordinate = {
      lat: 14.6043164,
      lng: 120.9946287,
   }

   return (
      <div id="googleMaps" style={style}>
         <Map
            zoom={18}
            style={style}
            containerStyle={containerStyle}
            google={props.google}
            initialCenter={pickupLocationCoordinate}
         >
            <Marker position={pickupLocationCoordinate} />
         </Map>
      </div>
   )
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyDyn1Cs8FHCOEedwL6jWkq1EtWhulBUc70',
})(MapContainer)
