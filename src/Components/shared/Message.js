import { useState } from 'react'
import {
   Typography,
   Box,
   Avatar,
   makeStyles,
   IconButton,
   TextField,
   Grid,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import { useMessageStore } from '../../store/MessageStore'
import RemoveIcon from '@material-ui/icons/Remove'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export default function Message() {
   const [minimize, setMinimize] = useState(false)
   const openMessage = useMessageStore((state) => state.openMessage)
   const setOpenMessage = useMessageStore((state) => state.setOpenMessage)

   const handleClose = () => {
      setOpenMessage(false)
   }
   const classes = useStyles()

   const receivermessage1 =
      'Good day Mr. Fhillip Bagsic! We would first like to thank you for donating goods. Regarding the pick up time po, what time would you prefer for your donation to be picked up po?'
   // const receivermessage2 = 'Ano oras pwede makuha yung pagkain?'
   const sendermessage1 = 'Hello! Around 12:30PM po pwede ipick up '

   const receivermessage3 =
      'Thank you Sir! Our rider will get your donations po on July 1 at around 12:30PM.'
   const sendermessage3 = 'No worries po.'

   return (
      <div
         style={{
            width: '320px',
            backgroundColor: 'white',
            position: 'fixed',
            right: '90px',
            bottom: '0px',
            display: openMessage ? 'flex' : 'none',
            flexDirection: 'column',
         }}
      >
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            boxShadow={2}
         >
            <Box display="flex" alignItems="center" m={1}>
               <Avatar
                  style={{ marginRight: '1rem' }}
                  alt="user"
                  src="https://assets2.rappler.com/2021/04/community-pantry-April-17-2021-1618630874667.jpg"
               />
               <Box>
                  <Typography className={classes.text_bold}>
                     Maginhawa Community Pantry
                  </Typography>
               </Box>
            </Box>
            <Box display="flex">
               <IconButton
                  size="small"
                  disableRipple
                  onClick={() => {
                     setMinimize(!minimize)
                  }}
               >
                  {minimize ? <ExpandLessIcon /> : <RemoveIcon />}
               </IconButton>
               <IconButton
                  size="small"
                  onClick={handleClose}
                  style={{ marginRight: '.5rem' }}
               >
                  <CloseIcon />
               </IconButton>
            </Box>
         </Box>
         <Box
            style={{
               flex: '1',
               overflowY: 'scroll',
               display: minimize ? 'none' : 'flex',
               flexDirection: 'column-reverse',
               padding: '10px',
               minHeight: '320px',
               maxHeight: '320px',
            }}
            boxShadow={2}
         >
            <SenderMessage message={sendermessage3} />
            <ReceiverMessage message={receivermessage3} />
            <SenderMessage message={sendermessage1} />
            <ReceiverMessage message={receivermessage1} />
         </Box>
         <Box
            m={2}
            display={minimize ? 'none' : 'flex'}
            alignItems="center"
            justifyContent="space-between"
         >
            <TextField
               placeholder="Send a message"
               variant="outlined"
               fullWidth
               size="small"
            />
            <IconButton
               disableRipple
               style={{ marginRight: '-10px', marginLeft: '5px' }}
            >
               <SendIcon style={{ color: '#42A5F5' }} />
            </IconButton>
         </Box>
      </div>
   )
}

function ReceiverMessage(props) {
   const classes = useStyles()
   return (
      <Grid container justify="flex-start">
         <div className={classes.container__receiver}>
            <p className={classes.text__receiver}>{props.message}</p>
         </div>
      </Grid>
   )
}
function SenderMessage(props) {
   const classes = useStyles()
   return (
      <Grid container justify="flex-end">
         <div className={classes.container__sender}>
            <p className={classes.text__sender}>{props.message}</p>
         </div>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
   container__receiver: {
      maxWidth: '150px',
      backgroundColor: '#e4e5e5',
      padding: '10px',
      margin: '1px',
      borderRadius: '20px',
   },
   text__receiver: {
      margin: '0',
      color: 'black',
   },
   container__sender: {
      maxWidth: '150px',
      backgroundColor: '#42A5F5',
      padding: '10px',
      margin: '1px',
      borderRadius: '20px',
   },
   text__sender: {
      margin: '0',
      color: 'white',
   },
}))
