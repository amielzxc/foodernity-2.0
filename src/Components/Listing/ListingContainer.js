import React from 'react'
import {
   Typography,
   Grid,
   Button,
   useTheme,
   useMediaQuery,
   makeStyles,
} from '@material-ui/core'
import { FilterDrawerResponsive } from './FilterDrawer'
import ListingItem from './ListingItem'
import AddIcon from '@material-ui/icons/Add'
import { ListingData } from '../Common/MockData'
import { Link } from 'react-router-dom'
import MainContainer from '../Common/MainContainer'

const useStyles = makeStyles((theme) => ({
   container__addListing: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
   },
   link_undecorated: {
      textDecoration: 'none',
   },
}))
// returns the container for individual listings that is displayed as a grid
function ListingContainer() {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))
   //  maps the mock listing data for the mean time to display available listings
   const listingItems = ListingData.map((item) => (
      <ListingItem
         key={item.listingId}
         listingImage={item.listingImage}
         listingName={item.listingName}
         distance={item.distance}
         postTime={item.postTime}
      />
   ))

   return (
      <MainContainer>
         {/* displays whether the filter drawer dialog should be displayed or not depending on the variable */}
         {responsiveLayout && <FilterDrawerResponsive />}
         <AddListing />
         <Grid container spacing={1}>
            {listingItems}
         </Grid>
      </MainContainer>
   )
}
// returns the number of listings available for the user and a button which allows user to add a donation
function AddListing() {
   const classes = useStyles()
   return (
      <div className={classes.container__addListing}>
         <Typography variant="h6" component="h3">
            Listings near you
         </Typography>
         <Link to="/post" className={classes.link_undecorated}>
            <Button startIcon={<AddIcon />} variant="contained" color="primary">
               Post a Donation
            </Button>
         </Link>
      </div>
   )
}
export default ListingContainer
