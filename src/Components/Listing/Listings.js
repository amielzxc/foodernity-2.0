import React from 'react'
import { Helmet } from 'react-helmet'
import { FilterDrawer } from './FilterDrawer'
import StyledAppBar from '../Common/StyledAppBar'
import {
   useMediaQuery,
   makeStyles,
   useTheme,
   CssBaseline,
} from '@material-ui/core'
import ListingContainer from './ListingContainer'
import create from 'zustand'

export const useFilterStore = create((set) => ({
   filterButton: 'Suggested',
   setFilterButton: (filter) => {
      set((state) => ({ filterButton: (state.filterButton = filter) }))
   },
   userLocation: 'Metro Manila, Philippines',
   setUserLocation: (location) => {
      set((state) => ({ userLocation: (state.userLocation = location) }))
   },
   distance: 3,
   setDistance: (distance) => {
      set((state) => ({ distance: (state.distance = distance) }))
   },
   foodCategory: [true, true, true, true, true],
   setFoodCategory: (object) => {
      set((state) => ({ foodCategory: (state.foodCategory = object) }))
   },
   listingData: null,
   setListingData: (items) => {
      set((state) => ({ listingItem: (state.listingData = items) }))
   },
}))

const useStyles = makeStyles({
   root: {
      display: 'flex',
   },
})
// the container for the whole page
export default function Listings() {
   const classes = useStyles()
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Listings | Foodernity</title>
         </Helmet>
         <div className={classes.root}>
            <CssBaseline />
            <StyledAppBar />
            {/* displays whether the left drawer should be displayed or not depending on the variable */}
            {!responsiveLayout && <FilterDrawer />}
            {/* <FilterDrawer /> */}
            <ListingContainer />
         </div>
      </>
   )
}
