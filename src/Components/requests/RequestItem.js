import React, { useState } from 'react'
import {
   Box,
   Button,
   ButtonGroup,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Chip,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Grid,
   LinearProgress,
   makeStyles,
   TextField,
   Typography,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',

      justifyContent: 'space-between',
   },
   details: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
   },
   image: {
      width: 180,
      height: 'auto',
      objectFit: 'cover',
   },
   content: {
      flex: '1 0 auto',
   },
   icon__location: {
      color: '#E35141',
      marginLeft: '-6px',
      marginRight: '3px',
      width: '18px',
   },
   text_bold: {
      fontWeight: 'bold',
   },
   container__distanceAway: {
      display: 'flex',
      margin: '5px 0',
   },
}))

export default function RequestItem(props) {
   const { requestID, imgLoc, requestName, distance, postTime, max } = props

   const [openDialog, setOpenDialog] = useState(false)

   const handleOpen = () => {
      setOpenDialog(true)
   }

   const handleClose = () => {
      setOpenDialog(!openDialog)
   }

   const classes = useStyles()

   return (
      <Grid item xs={12} md={6} xl={4}>
         <Card className={classes.root}>
            <CardMedia
               className={classes.image}
               image={imgLoc}
               title={requestName}
            />

            <div className={classes.details}>
               <CardContent className={classes.content}>
                  <Typography variant="h6" component="h4" noWrap>
                     {requestName}
                  </Typography>
                  <Typography>In need of 8 pieces</Typography>
                  {/* <LinearProgressWithLabel value={5} /> */}
                  <Grid container alignItems="center">
                     <LocationOnIcon
                        fontSize="small"
                        className={classes.icon__location}
                     />
                     <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                        noWrap
                     >
                        {distance}
                     </Typography>
                  </Grid>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     Posted {postTime}
                  </Typography>
               </CardContent>
               <CardActions style={{ alignSelf: 'flex-end' }}>
                  <Button
                     size="small"
                     color="primary"
                     component={Link}
                     to={`/requests/item/${requestID}`}
                  >
                     Donate
                  </Button>
               </CardActions>
            </div>
         </Card>
         {/* <Donate
            max={max}
            open={openDialog}
            requestID={requestID}
            handleClose={handleClose}
         /> */}
      </Grid>
   )
}

function LinearProgressWithLabel(props) {
   return (
      <Box display="flex" alignItems="center">
         <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={50} />
         </Box>
         <Box width="50px">
            <Typography
               variant="body2"
               color="textSecondary"
            >{` ${props.value} / 10`}</Typography>
         </Box>
      </Box>
   )
}

// function Donate(props) {
//    const classes = useStyles()
//    const { open, handleClose, requestID, max } = props
//    const [quantity, setQuantity] = useState(0)
//    const handleAdd = () => {
//       if (quantity < max) {
//          setQuantity(quantity + 1)
//       }
//    }

//    const handleSubtract = () => {
//       if (quantity > 0) {
//          setQuantity(quantity - 1)
//       }
//    }

//    return (
//       <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
//          <DialogTitle>Request Details</DialogTitle>
//          <DialogContent dividers>
//             <Typography variant="h6" className={classes.text_bold}>
//                Pancit Canton Noodles
//             </Typography>
//             <Box display="flex" flexDirection="row">
//                <LocationOnIcon color="secondary" />
//                <Typography>3 kilometers away</Typography>
//             </Box>
//             <Box>
//                <Chip label="Instant Noodles" color="primary" />
//             </Box>
//          </DialogContent>
//          <DialogActions>
//             <QuantityInput
//                quantity={quantity}
//                handleAdd={handleAdd}
//                handleSubtract={handleSubtract}
//                max={max}
//             />
//             <Button
//                color="primary"
//                variant="contained"
//                disabled={quantity > 0 ? false : true}
//             >
//                Donate
//             </Button>
//          </DialogActions>
//       </Dialog>
//    )
// }

// function QuantityInput(props) {
//    const { quantity, handleAdd, handleSubtract, max } = props

//    return (
//       <ButtonGroup size="small">
//          {quantity > 0 && <Button onClick={handleSubtract}>-</Button>}
//          {quantity > 0 && <Button disabled>{quantity}</Button>}
//          {quantity < max && <Button onClick={handleAdd}>+</Button>}
//       </ButtonGroup>
//    )
// }
