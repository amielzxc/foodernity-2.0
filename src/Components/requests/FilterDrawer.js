import React, { useState } from 'react'
import {
   Typography,
   IconButton,
   Button,
   ButtonGroup,
   Divider,
   FormControlLabel,
   Checkbox,
   Slider,
   makeStyles,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EditIcon from '@material-ui/icons/Edit'
import { useRequestStore } from '../../store/RequestsStore'
import LeftDrawer from '../shared/LeftDrawer'
import DialogDrawer from '../shared/DialogDrawer'
import ChangeLocation from './ChangeLocation'
import Footer from '../shared/Footer'

const useStyles = makeStyles((theme) => ({
   drawer__container_responsive: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
   },
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      margin: theme.spacing(0.5, 0),
   },
   container__location: {
      display: 'flex',
      backgroundColor: 'white',
      alignItems: 'center',
      marginTop: theme.spacing(1),
   },
   icon__location: {
      marginRight: theme.spacing(1),
   },
   icon__editLocation: {
      marginLeft: theme.spacing(1),
   },
   container__buttonGroup: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
   },
   container__distanceFilter: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
   },
   container__titleButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   container__distanceSlider: {
      margin: '0 auto',
      width: '220px',
   },
   container__checkbox: {
      display: 'flex',
      flexDirection: 'column',
   },
}))

// returns a left drawer that is used to filter the listings
// this drawer uses the left drawer component in Common folder
export function FilterDrawer() {
   const classes = useStyles()

   const setFilterButton = useRequestStore((state) => state.setFilterButton)
   const setUserLocation = useRequestStore((state) => state.setUserLocation)
   const setDistance = useRequestStore((state) => state.setDistance)
   const setFoodCategory = useRequestStore((state) => state.setFoodCategory)

   const [filterButton, setTempFilterButton] = useState(
      useRequestStore((state) => state.filterButton)
   )

   const [userLocation, setTempUserLocation] = useState(
      useRequestStore((state) => state.userLocation)
   )

   const [distance, setTempDistance] = useState(
      useRequestStore((state) => state.distance)
   )

   const [foodCategory, setTempFoodCategory] = useState(
      useRequestStore((state) => state.foodCategory)
   )
   // const setListingData = useRequestStore((state) => state.setListingData)
   const handleUpdateChanges = () => {
      setFilterButton(filterButton)
      setUserLocation(userLocation)
      setDistance(distance)
      setFoodCategory(foodCategory)

      console.log('request')
      console.log(filterButton)
      console.log(userLocation)
      console.log(distance)
      console.log(foodCategory)
   }

   return (
      <>
         <LeftDrawer>
            <Title />
            <FilterButtons
               filterButton={filterButton}
               setTempFilterButton={setTempFilterButton}
            />
            <Divider className={classes.divider_margin} />
            <CurrentLocation
               userLocation={userLocation}
               setTempUserLocation={setTempUserLocation}
            />
            <Divider className={classes.divider_margin} />
            <DistanceFilter
               distance={distance}
               setTempDistance={setTempDistance}
            />
            <Divider className={classes.divider_margin} />
            <FoodCategory
               foodCategory={foodCategory}
               setTempFoodCategory={setTempFoodCategory}
            />
            <SaveChanges handleUpdateChanges={handleUpdateChanges} />
            <Footer />
         </LeftDrawer>
         <DialogDrawer buttonName="FILTER">
            <Title />
            <FilterButtons
               filterButton={filterButton}
               setTempFilterButton={setTempFilterButton}
            />
            <Divider className={classes.divider_margin} />
            <CurrentLocation
               userLocation={userLocation}
               setTempUserLocation={setTempUserLocation}
            />
            <Divider className={classes.divider_margin} />
            <DistanceFilter
               distance={distance}
               setTempDistance={setTempDistance}
            />
            <Divider className={classes.divider_margin} />
            <FoodCategory
               foodCategory={foodCategory}
               setTempFoodCategory={setTempFoodCategory}
            />
            <SaveChanges handleUpdateChanges={handleUpdateChanges} />
         </DialogDrawer>
      </>
   )
}
// returns a dialog drawer when the page reaches responsive layout
// this drawer uses dialog drawer component in Common folder
// export function FilterDrawerResponsive() {
//    const classes = useStyles()

//    const setFilterButton = useRequestStore((state) => state.setFilterButton)
//    const setUserLocation = useRequestStore((state) => state.setUserLocation)
//    const setDistance = useRequestStore((state) => state.setDistance)
//    const setFoodCategory = useRequestStore((state) => state.setFoodCategory)

//    const [filterButton, setTempFilterButton] = useState(
//       useRequestStore((state) => state.filterButton)
//    )

//    const [userLocation, setTempUserLocation] = useState(
//       useRequestStore((state) => state.userLocation)
//    )

//    const [distance, setTempDistance] = useState(
//       useRequestStore((state) => state.distance)
//    )

//    const [foodCategory, setTempFoodCategory] = useState(
//       useRequestStore((state) => state.foodCategory)
//    )

//    const handleUpdateChanges = () => {
//       setFilterButton(filterButton)
//       setUserLocation(userLocation)
//       setDistance(distance)
//       setFoodCategory(foodCategory)
//    }
//    return (
//       <Hidden mdUp>
//          <div className={classes.drawer__container_responsive}>
//             <Title />
//             <DialogDrawer buttonName="FILTER" dialogTitle="Listings Filter">
//                <Title />
//                <FilterButtons
//                   filterButton={filterButton}
//                   setTempFilterButton={setTempFilterButton}
//                />
//                <Divider className={classes.divider_margin} />
//                <CurrentLocation
//                   userLocation={userLocation}
//                   setTempUserLocation={setTempUserLocation}
//                />
//                <Divider className={classes.divider_margin} />
//                <DistanceFilter
//                   distance={distance}
//                   setTempDistance={setTempDistance}
//                />
//                <Divider className={classes.divider_margin} />
//                <FoodCategory
//                   foodCategory={foodCategory}
//                   setTempFoodCategory={setTempFoodCategory}
//                />
//                <SaveChanges handleUpdateChanges={handleUpdateChanges} />
//             </DialogDrawer>
//          </div>
//       </Hidden>
//    )
// }
// returns the title of the left drawer
function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.title} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
         >
            Requested Donations
         </Typography>
      </div>
   )
}

// returns button group which filters the current listings according to the user's preference
function FilterButtons(props) {
   const classes = useStyles()
   const { filterButton, setTempFilterButton } = props

   return (
      <div className={classes.container__buttonGroup}>
         <ButtonGroup
            color="primary"
            variant="outlined"
            aria-label="outlined primary button group"
         >
            <Button
               variant={filterButton === 'Suggested' ? 'contained' : 'outlined'}
               disableElevation={filterButton === 'Suggested' ? true : false}
               size="small"
               onClick={
                  filterButton !== 'Suggested'
                     ? () => {
                          setTempFilterButton('Suggested')
                       }
                     : null
               }
            >
               Suggested
            </Button>
            <Button
               variant={
                  filterButton === 'Available Now' ? 'contained' : 'outlined'
               }
               disableElevation={
                  filterButton === 'Available Now' ? true : false
               }
               size="small"
               onClick={
                  filterButton !== 'Available Now'
                     ? () => {
                          setTempFilterButton('Available Now')
                       }
                     : null
               }
            >
               Available Now
            </Button>
            <Button
               variant={filterButton === 'Nearest' ? 'contained' : 'outlined'}
               disableElevation={filterButton === 'Nearest' ? true : false}
               size="small"
               onClick={
                  filterButton !== 'Nearest'
                     ? () => {
                          setTempFilterButton('Nearest')
                       }
                     : null
               }
            >
               Nearest
            </Button>
         </ButtonGroup>
      </div>
   )
}
// returns the current location selected by the user
function CurrentLocation(props) {
   const classes = useStyles()

   const { userLocation, setTempUserLocation } = props
   const [toggle, setToggle] = useState(false)

   const handleSetToggle = () => {
      setToggle(!toggle)
   }

   return (
      <div>
         <Typography variant="h6" className={classes.text_bold}>
            My Location
         </Typography>
         <div className={classes.container__location}>
            <LocationOnIcon
               className={classes.icon__location}
               color="primary"
            />
            <Typography variant="body1">{userLocation}</Typography>
            <IconButton size="small" onClick={handleSetToggle}>
               <EditIcon
                  className={classes.icon__editLocation}
                  color="primary"
                  fontSize="small"
               />
            </IconButton>
         </div>
         {toggle && (
            <ChangeLocation
               toggle={handleSetToggle}
               setUserLocation={setTempUserLocation}
            />
         )}
      </div>
   )
}
// returns a slider that lets user adjust the visible listings according to the distance set.
function DistanceFilter(props) {
   const classes = useStyles()
   const marks = [
      {
         value: 1,
         label: '1km',
      },
      {
         value: 2,
         label: '',
      },
      {
         value: 3,
         label: '3km',
      },
      {
         value: 4,
         label: '',
      },
      {
         value: 5,
         label: '5km',
      },
   ]

   const { distance, setTempDistance } = props

   const [value, setvalue] = useState(distance)
   const handleChange = (event, value) => {
      setvalue(value)
      handleSetDistance()
   }
   const handleSetDistance = () => {
      setTempDistance(value)
   }

   return (
      <div className={classes.container__distanceFilter}>
         <Typography variant="h6" className={classes.text_bold}>
            Distance
         </Typography>

         <div>
            <div className={classes.container__distanceSlider}>
               <Slider
                  step={1}
                  marks={marks}
                  min={1}
                  max={5}
                  value={value}
                  onChangeCommitted={handleChange}
                  onChange={handleChange}
               />
            </div>
         </div>
      </div>
   )
}
// returns multiple checkbox that is used to filter the categories of individual listings
function FoodCategory(props) {
   const { foodCategory, setTempFoodCategory } = props

   const [isChecked, setIsChecked] = useState({
      test1: foodCategory[0],
      test2: foodCategory[1],
      test3: foodCategory[2],
      test4: foodCategory[3],
      test5: foodCategory[4],
   })

   const handleSingleCheck = (e) => {
      setIsChecked({ ...isChecked, [e.target.name]: e.target.checked })
   }

   const handleUpdateAllCheck = () => {
      setTempFoodCategory(Object.values(isChecked))
   }

   const classes = useStyles()

   return (
      <form onBlur={handleUpdateAllCheck}>
         <div style={{ marginBottom: '1rem' }}>
            <div className={classes.container__titleButton}>
               <Typography variant="h6" className={classes.text_bold}>
                  Food Category
               </Typography>
            </div>
            <div className={classes.container__checkbox}>
               <CategoryCheckBox
                  label="Canned Goods"
                  name="test1"
                  checked={isChecked.test1}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Instant Noodles"
                  name="test2"
                  checked={isChecked.test2}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Biscuits"
                  name="test3"
                  checked={isChecked.test3}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Beverages"
                  name="test4"
                  checked={isChecked.test4}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Others"
                  name="test5"
                  checked={isChecked.test5}
                  handleChange={handleSingleCheck}
               />
            </div>
         </div>
      </form>
   )
}

function SaveChanges(props) {
   const { handleUpdateChanges } = props
   return (
      <Button
         variant="contained"
         color="primary"
         fullWidth
         onClick={handleUpdateChanges}
      >
         Save Changes
      </Button>
   )
}
// returns a single checkbox
function CategoryCheckBox(props) {
   const { handleChange, name, checked, label } = props

   return (
      <FormControlLabel
         control={
            <Checkbox
               onChange={handleChange}
               name={name}
               color="primary"
               checked={checked}
            />
         }
         label={<Typography variant="body2">{label}</Typography>}
      />
   )
}
