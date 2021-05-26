import React, { useState } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { usePostStore } from './Post'

import { LocationInput } from './LocationInput'

const style = {
   height: '250px',
   width: '100%',
}

const containerStyle = {
   position: 'relative',
   height: '250px',
   width: '100%',
}
function isEmpty(obj) {
   for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
         return false
      }
   }

   return JSON.stringify(obj) === JSON.stringify({})
}

export function MapContainer(props) {
   const pickupLocationCoordinate = usePostStore(
      (state) => state.pickupLocationCoordinate
   )
   const setPickupLocation = usePostStore((state) => state.setPickupLocation)
   const setPickupLocationCoordinate = usePostStore(
      (state) => state.setPickupLocationCoordinate
   )
   //const [address, setAddress] = useState('')
   const [mapCenter, setMapCenter] = useState(pickupLocationCoordinate)

   const handleSelect = (location) => {
      if (location !== '') {
         setPickupLocation(location)
         geocodeByAddress(location)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
               console.log('Success', latLng)
               // update center state
               setMapCenter(latLng)
               setPickupLocationCoordinate(latLng)
            })
            .catch((error) => console.error('Error', error))
      } else {
         setMapCenter({})
      }
   }
   return (
      <>
         {!isEmpty(mapCenter) && (
            <>
               <div id="googleMaps" style={style}>
                  <Map
                     zoom={18}
                     style={style}
                     containerStyle={containerStyle}
                     google={props.google}
                     initialCenter={mapCenter}
                     center={mapCenter}
                  >
                     <Marker position={mapCenter} />
                  </Map>
               </div>
            </>
         )}
         <LocationInput select={handleSelect} />
      </>
   )
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyDyn1Cs8FHCOEedwL6jWkq1EtWhulBUc70',
})(MapContainer)
