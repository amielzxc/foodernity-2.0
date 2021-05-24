import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { usePostStore } from './Post'

const containerStyle = {
   width: '100%',
   height: '250px',
   display: 'flex',
   justifyContent: 'center',
}

const imageStyle = {
   border: '1px solid red',
   width: 'auto',
   height: '100%',
   objectFit: 'contain',
}

const buttonStyle = {
   display: 'flex',
   justifyContent: 'center',
}

function UploadImage() {
   const donationImage = usePostStore((state) => state.donationImage)
   const setDonationImage = usePostStore((state) => state.setDonationImage)
   const [image, setImage] = useState(donationImage)
   const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0]
         setImage(URL.createObjectURL(img))
         setDonationImage(URL.createObjectURL(img))
      }
   }
   return (
      <>
         {image !== null ? (
            <div style={containerStyle}>
               <img style={imageStyle} src={image} alt="donation" />
            </div>
         ) : null}
         <Button type="file"></Button>

         <div style={buttonStyle}>
            <Button color="primary" variant="contained" component="label">
               Upload Image
               <input type="file" onChange={onImageChange} hidden />
            </Button>
         </div>
      </>
   )
}

export default UploadImage
