import { useState } from 'react'
import {
   Card,
   CardHeader,
   CardMedia,
   CardActionArea,
   CardActions,
   CardContent,
   Avatar,
   Typography,
   Grid,
   Box,
   Button,
   makeStyles,
   Modal,
   Backdrop,
   Fade,
} from '@material-ui/core'
import DonationForm from './RequestForm'

export default function RequestItem(props) {
   const [open, setOpen] = useState(false)
   const [openImage, setOpenImage] = useState(false)
   const { title, description, pubmat, date, categoryNeeded } = props
   const classes = useStyles()

   const handleClose = () => {
      setOpen(false)
   }

   const handleCloseImage = () => {
      setOpenImage(false)
   }

   return (
      <>
         <Grid item xs={12} md={4}>
            <Card>
               <CardHeader
                  avatar={<Avatar>CP</Avatar>}
                  title="Maginhawa Community Pantry"
                  subheader={`Posted ${date}`}
               />
               <CardActionArea
                  onClick={() => {
                     setOpenImage(true)
                  }}
               >
                  <div
                     style={{
                        backgroundImage: `url(${pubmat})`,
                     }}
                  >
                     <CardMedia
                        className={classes.media}
                        image={pubmat}
                        title="pubmat"
                     />
                  </div>
               </CardActionArea>
               <CardContent>
                  <Typography variant="h6" className={classes.text_bold}>
                     {title}
                  </Typography>
                  <Typography>{description}</Typography>
                  <Box my={1}>
                     <Typography
                        variant="body2"
                        style={{
                           display: 'inline',
                           marginRight: '10px',
                        }}
                     >
                        Food category needed:{' '}
                        <span style={{ fontWeight: 'bold' }}>
                           {categoryNeeded}
                        </span>
                     </Typography>
                     {/* <Chip color="primary" label={categoryNeeded} size="small" /> */}
                  </Box>
               </CardContent>
               <CardActions
                  component="div"
                  style={{
                     display: 'flex',
                     justifyContent: 'flex-end',
                     margin: '.5rem',
                  }}
               >
                  <Button
                     color="primary"
                     variant="contained"
                     onClick={() => setOpen(true)}
                  >
                     Donate now
                  </Button>
               </CardActions>
            </Card>
            <DonationForm open={open} handleClose={handleClose} />
         </Grid>
         <Modal
            open={openImage}
            onClose={handleCloseImage}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={openImage}>
               <img
                  src={pubmat}
                  alt="pubmat"
                  style={{ objectFit: 'contain', height: '90%' }}
               />
            </Fade>
         </Modal>
      </>
   )
}

const useStyles = makeStyles((theme) => ({
   media: {
      // backgroundColor: 'grey',
      zIndex: 1,
      backgroundSize: 'contain',
      height: 500,
      backdropFilter: 'blur(10px)',
      // paddingTop: '56.25%', // 16:9
   },
   text_bold: {
      fontWeight: 'bold',
   },
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
   },
}))
