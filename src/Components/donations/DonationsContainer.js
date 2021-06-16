import React, { useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { FilterDrawerResponsive } from './FilterDrawer'
import DonationItem from './DonationItem'
import MainContainer from '../shared/MainContainer'
import Axios from 'axios'
import { useDonationStore } from '../../store/DonationStore'
import data from '../../__mock__/donationsData'
// import ScrollTop from '../components/shared/ScrollTop'
import ScrollTop from '../shared/ScrollTop'

// returns the container for individual listings that is displayed as a grid
export default function DonationsContainer() {
   const donationsData = useDonationStore((state) => state.donationsData)
   const setDonationsData = useDonationStore((state) => state.setDonationsData)

   useEffect(() => {
      const obj = { userID: localStorage.getItem('userID') }
      Axios.post('http://localhost:3001/listingItem/get', obj).then(
         (response, err) => {
            if (err) {
               console.log(err)
            }
            // console.log(response.data)
            setDonationsData(
               response.data.map((data) => (
                  <DonationItem
                     key={data.listingID}
                     listingID={data.listingID}
                     imgLoc={data.imgLoc}
                     donationName={data.donationName}
                     distance={data.pickupLoc}
                     // postTime={data.postTime}
                  />
               ))
            )
         }
      )
   }, [])
   if (donationsData) {
      console.log(donationsData)
   }

   // useEffect(() => {
   //    setDonationsData()
   // })

   return (
      <MainContainer>
         <Grid container spacing={1}>
            <Grid item xs={12}>
               <Typography variant="h6" component="h3">
                  Available donations near you
               </Typography>
            </Grid>
            {donationsData}
            {/* {data.map((item) => (
               <DonationItem
                  key={item.listingID}
                  listingID={item.listingID}
                  donationName={item.donationName}
                  imgLoc={item.imgLoc}
                  distance={item.distance}
                  postTime={item.postTime}
               />
            ))} */}
         </Grid>
         <ScrollTop />
      </MainContainer>
   )
}
