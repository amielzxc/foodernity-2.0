import React from 'react'
import { Helmet } from 'react-helmet'
import StyledAppBar from '../Common/StyledAppBar'
import {
   useMediaQuery,
   makeStyles,
   useTheme,
   CssBaseline,
} from '@material-ui/core'
import { MessagesDrawer } from './MessagesDrawer'
import MessageContainer from './MessageContainer'
import { RequestDrawer } from './RequestDrawer'
import create from 'zustand'

export const useMessageStore = create((set) => ({
   filterButton: 'My Donations',
   setFilterButton: (filter) => {
      set((state) => ({ filterButton: (state.filterButton = filter) }))
   },
   donationID: null,
   setDonationID: (id) => {
      set((state) => ({ donationID: (state.donationID = id) }))
   },
}))

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
}))

// the container for the whole page
function Messages() {
   const classes = useStyles()
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))
   const responsiveLayout2 = useMediaQuery(theme.breakpoints.down('md'))

   return (
      <>
         <Helmet>
            <title>Messages | Foodernity</title>
         </Helmet>
         <div className={classes.root}>
            <CssBaseline />
            <StyledAppBar />
            {/* displays whether the left drawer should be displayed or not depending on the variable */}
            {responsiveLayout ? null : <MessagesDrawer />}
            <MessageContainer />
            {responsiveLayout2 ? null : <RequestDrawer />}
         </div>
      </>
   )
}

export default Messages
