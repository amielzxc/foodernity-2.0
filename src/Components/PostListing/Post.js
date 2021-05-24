import React from 'react'
import { Helmet } from 'react-helmet'
import {
   makeStyles,
   useTheme,
   useMediaQuery,
   CssBaseline,
} from '@material-ui/core'
import { StepperDrawer } from './StepperDrawer'
import StyledAppBar from '../Common/StyledAppBar'
import create from 'zustand'
import PostContainer from './PostContainer'

export const usePostStore = create((set) => ({
   current: 0,
   setNext: () => {
      set((state) => ({ current: state.current + 1 }))
   },
   setBack: () => {
      set((state) => ({ current: state.current - 1 }))
   },
   checkedGuidelines: [false, false, false],
   setCheckedGuidelines: (object) => {
      set((state) => ({
         checkedGuidelines: (state.checkedGuidelines = object),
      }))
   },
   donationImage: null,
   setDonationImage: (image) => {
      set((state) => ({ donationImage: (state.donationImage = image) }))
   },
   donationName: '',
   setDonationName: (name) => {
      set((state) => ({ donationName: (state.donationName = name) }))
   },
   donationRecipient: '',
   setDonationRecipient: (recipient) => {
      set((state) => ({
         donationRecipient: (state.donationRecipient = recipient),
      }))
   },
   donationCategory: '',
   setDonationCategory: (category) => {
      set((state) => ({
         donationCategory: (state.donationCategory = category),
      }))
   },
   donationExpiry: new Date(new Date().setDate(new Date().getDate() + 7)),
   setDonationExpiry: (date) => {
      set((state) => ({
         donationExpiry: (state.donationExpiry = date),
      }))
   },
   donationNotes: '',
   setDonationNotes: (note) => {
      set((state) => ({ donationNotes: (state.donationNotes = note) }))
   },
   pickupLocation: null,
   setPickupLocation: (location) => {
      set((state) => ({
         pickupLocation: (state.pickupLocation = location),
      }))
   },
   pickupLocationCoordinate: {},
   setPickupLocationCoordinate: (coordinate) => {
      set((state) => ({
         pickupLocationCoordinate: (state.pickupLocationCoordinate =
            coordinate),
      }))
   },
   pickupDate: new Date(new Date().setDate(new Date().getDate())),
   setPickupDate: (date) => {
      set((state) => ({
         pickupDate: (state.pickupDate = date),
      }))
   },
   pickupTime: new Date(new Date().setDate(new Date().getDate())),
   setPickupTime: (time) => {
      set((state) => ({
         pickupTime: (state.pickupTime = time),
      }))
   },
}))

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))
// the container for the whole page
function Post() {
   const classes = useStyles()
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Post Donation | Foodernity</title>
         </Helmet>
         <div className={classes.root}>
            <CssBaseline />
            <StyledAppBar />
            {/* displays whether the left drawer should be displayed or not depending on the variable */}
            {responsiveLayout ? null : <StepperDrawer />}
            <PostContainer />
         </div>
      </>
   )
}

// this will be used to validate all the forms. will return false if one input has not been filled up else true
export function validateAll() {
   // const donationName = usePostStore((state) => state.donationName)
   // const donationRecipient = usePostStore((state) => state.donationRecipient)
   return <p>s</p>
}

export default Post
