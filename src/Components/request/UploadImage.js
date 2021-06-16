import { Button, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useRequestStore } from '../../store/RequestStore'
import MuiAlert from '@material-ui/lab/Alert'
const containerStyle = {
   width: '100%',
   height: '250px',
   display: 'flex',
   justifyContent: 'center',
}

const imageStyle = {
   maxWidth: '100%',
   height: '100%',
   objectFit: 'contain',
}

const buttonStyle = {
   display: 'flex',
   justifyContent: 'center',
}

function UploadImage() {
   const requestImage = useRequestStore((state) => state.requestImage)
   const convertedImage =
      requestImage === null ? requestImage : URL.createObjectURL(requestImage)
   const setRequestImage = useRequestStore((state) => state.setRequestImage)
   var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i
   const [image, setImage] = useState(convertedImage)
   const [displayAlert, setDisplayAlert] = useState(false)

   const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
         let file = event.target.files[0]

         if (!allowedExtensions.exec(file.name)) {
            setDisplayAlert(true)
         } else {
            setImage(URL.createObjectURL(file))
            setRequestImage(file)
         }
      }
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }
      setDisplayAlert(false)
   }
   return (
      <>
         {image !== null && (
            <div style={containerStyle}>
               <img style={imageStyle} src={image} alt="donation" />
            </div>
         )}
         <Button type="file"></Button>

         <div style={buttonStyle}>
            <Button color="primary" variant="contained" component="label">
               Upload Image
               <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={onImageChange}
                  hidden
               />
            </Button>
         </div>
         <ImageAlert open={displayAlert} close={handleClose} />
      </>
   )
}

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />
}

function ImageAlert(props) {
   const { close, open } = props
   const message = 'Only upload images.'

   return (
      <>
         <Snackbar open={open} autoHideDuration={2000} onClose={close}>
            <Alert onClose={close} severity="warning">
               {message}
            </Alert>
         </Snackbar>
      </>
   )
}

export default UploadImage
