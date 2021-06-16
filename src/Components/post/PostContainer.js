import React from 'react'
import { useTheme, useMediaQuery, Grid } from '@material-ui/core'
import { StepperDrawerResponsive } from './StepperDrawer'
import { usePostStore } from '../../store/PostStore'
import Guidelines from './Guidelines'
import MainContainer from '../shared/MainContainer'
import ItemDetails from './ItemDetails'
import PickupDetails from './PickupDetails'
import DonationPreview from './DonationPreview'
// returns the container for all the steps of the donating process
function PostContainer() {
   // this state is currently stored in the Post.js for the mean time
   const current = usePostStore((state) => state.current)

   return (
      <MainContainer>
         {/* displays whether the filter drawer dialog should be displayed or not depending on the variable */}
         {/* {responsiveLayout ? <StepperDrawerResponsive /> : null} */}
         {/* 
         If 0, return the guidelines components,
         If 1, return the itemdetails and pickupdetails components which are used to be filled up by the user
         If 2, return the donationpreview component 
         */}
         {current === 0 && <Guidelines />}
         {current === 1 && (
            <Grid container justify="center">
               <ItemDetails />
               <PickupDetails />
            </Grid>
         )}
         {current === 2 && <DonationPreview />}
      </MainContainer>
   )
}

export default PostContainer
