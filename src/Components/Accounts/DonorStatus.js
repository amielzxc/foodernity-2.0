import React, { useState } from 'react'
import { Avatar, Button, makeStyles, Typography, fade } from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { grey, red } from '@material-ui/core/colors'
export function AvailableStatus() {
   return (
      <Typography color="primary">
         This listing is available for request
      </Typography>
   )
}

export function ToApproveStatus() {
   const classes = useStyles()

   const doneeImage =
      'https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   const doneeFirstName = 'Julia'
   const timeRequested = '3h'

   return (
      <>
         <div className={classes.container__avatar}>
            <Avatar src={doneeImage} className={classes.avatar__color} />
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               Julia Philips
            </Typography>
         </div>
         <div>
            <div className={classes.container__status}>
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     {doneeFirstName} requested this{' '}
                     <span style={{ fontWeight: 'bold' }}>{timeRequested}</span>{' '}
                     ago
                  </Typography>
               </div>
               <div className={classes.line_grey} />
               <div className={classes.container__status_item}>
                  <div className={classes.circle_green} />
                  <Typography variant="body2">
                     Waiting for your approval
                  </Typography>
               </div>
            </div>
         </div>
         <Button
            variant="contained"
            className={classes.button_green}
            disableElevation
         >
            Approve Request
         </Button>
         <Button
            variant="outlined"
            color="primary"
            startIcon={<ChatBubbleIcon />}
         >
            View Message
         </Button>
         <Button
            variant="outlined"
            className={`${classes.button_red} ${classes.button__text_red}`}
         >
            Decline Request
         </Button>
      </>
   )
}

export function OngoingStatus() {
   const classes = useStyles()

   const doneeImage =
      'https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   const doneeFirstName = 'Julia'
   const timeRequested = '3h'
   const timeApproved = '2h'
   return (
      <>
         <div className={classes.container__avatar}>
            <Avatar src={doneeImage} className={classes.avatar__color} />
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               Julia Philips
            </Typography>
         </div>
         <div>
            <div className={classes.container__status}>
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     {doneeFirstName} requested this{' '}
                     <span className={classes.text_bold}>{timeRequested}</span>{' '}
                     ago
                  </Typography>
               </div>
               <div className={classes.line_grey} />
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     You approved{' '}
                     <span className={classes.text_bold}>{timeApproved}</span>{' '}
                     ago
                  </Typography>
               </div>
               <div className={classes.line_grey} />
               <div className={classes.container__status_item}>
                  <div className={classes.circle_green} />
                  <Typography variant="body2">Ongoing transaction</Typography>
               </div>
            </div>
         </div>

         <Button
            variant="outlined"
            color="primary"
            startIcon={<ChatBubbleIcon />}
         >
            Send a Message
         </Button>
      </>
   )
}

export function CompletedStatus() {
   const classes = useStyles()
   const [rating, setRating] = useState(2)
   const doneeImage =
      'https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   const doneeFirstName = 'Julia'
   const timeRequested = '3h'
   const timeApproved = '2h'
   const timeClaimed = '1h'
   return (
      <>
         <div className={classes.container__avatar}>
            <Avatar src={doneeImage} className={classes.avatar__color} />
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               Julia Philips
            </Typography>
         </div>
         <div>
            <div className={classes.container__status}>
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     {doneeFirstName} requested this{' '}
                     <span className={classes.text_bold}>{timeRequested}</span>{' '}
                     ago
                  </Typography>
               </div>
               <div className={classes.line_grey} />
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     You approved{' '}
                     <span className={classes.text_bold}>{timeApproved}</span>{' '}
                     ago
                  </Typography>
               </div>
               <div className={classes.line_grey} />
               <div className={classes.container__status_item}>
                  <div className={classes.circle_blue} />
                  <Typography variant="body2">
                     Claimed{' '}
                     <span className={classes.text_bold}>{timeClaimed}</span>{' '}
                     ago
                  </Typography>
               </div>
            </div>
         </div>
      </>
   )
}

const useStyles = makeStyles((theme) => ({
   container__avatar: {
      display: 'flex',
      alignItems: 'center',
   },
   avatar__color: {
      marginRight: '10px',
   },
   text_bold: {
      fontWeight: 'bold',
   },
   container__status: {
      paddingLeft: '.5rem',
      marginTop: '1rem',
      marginBottom: '1.5rem',
   },
   container__status_item: {
      display: 'flex',
      alignItems: 'center',
   },
   circle_blue: {
      width: '24px',
      height: '24px',
      backgroundColor: '#2196F3',
      borderRadius: '24px',
      marginRight: '8px',
   },
   circle_green: {
      width: '24px',
      height: '24px',
      backgroundColor: '#66BB6A',
      borderRadius: '24px',
      marginRight: '8px',
   },
   line_grey: {
      width: '1px',
      height: '.8rem',
      backgroundColor: '#C4C4C4',
      margin: '.5rem 0 .5rem .7rem',
   },
   button_grey: {
      marginTop: '1rem',
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[300],
      '&:hover': {
         backgroundColor: grey[400],
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: grey[300],
         },
      },
   },
   button_green: {
      marginBottom: '.5rem',
      color: 'white',
      backgroundColor: '#66BB6A',
      '&:hover': {
         backgroundColor: '#5BA85F',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#66BB6A',
         },
      },
   },
   button__text_red: {
      color: red[500],
      '&:hover': {
         backgroundColor: fade(red[500], theme.palette.action.hoverOpacity),
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: 'transparent',
         },
      },
   },
   button_red: {
      marginTop: '.5rem',
      border: `1px solid ${fade(red[500], 0.5)}`,
      '&:hover': {
         border: `1px solid ${red[500]}`,
      },
   },
}))
