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
import RefreshIcon from '@material-ui/icons/Refresh'
import { useFilterStore } from './Listings'
import LeftDrawer from '../Common/LeftDrawer'
import DialogDrawer from '../Common/DialogDrawer'
import 'date-fns'
import ChangeLocation from './ChangeLocation'

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
   return (
      <LeftDrawer>
         <Title />
         <FilterButtons />
         <Divider className={classes.divider_margin} />
         <CurrentLocation />
         <Divider className={classes.divider_margin} />
         <DistanceFilter />
         <Divider className={classes.divider_margin} />
         <FoodCategory />
      </LeftDrawer>
   )
}
// returns a dialog drawer when the page reaches responsive layout
// this drawer uses dialog drawer component in Common folder
export function FilterDrawerResponsive() {
   const classes = useStyles()
   return (
      <div className={classes.drawer__container_responsive}>
         <Title />
         <DialogDrawer buttonName="FILTER" dialogTitle="Listings Filter">
            <FilterButtons />
            <Divider className={classes.divider_margin} />
            <CurrentLocation />
            <Divider className={classes.divider_margin} />
            <DistanceFilter />
            <Divider className={classes.divider_margin} />
            <FoodCategory />
         </DialogDrawer>
      </div>
   )
}
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
            Donation Listings
         </Typography>
      </div>
   )
}
// returns the current location selected by the user
function CurrentLocation() {
   const userLocation = useFilterStore((state) => state.userLocation)
   const [toggle, setToggle] = useState(false)

   const handleSetToggle = () => {
      setToggle(!toggle)
   }
   const classes = useStyles()
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
         {toggle && <ChangeLocation toggle={handleSetToggle} />}
      </div>
   )
}
// returns button group which filters the current listings according to the user's preference
function FilterButtons() {
   const classes = useStyles()
   const filter = useFilterStore((state) => state.filterButton)
   const changeFilter = useFilterStore((state) => state.setFilterButton)

   return (
      <div className={classes.container__buttonGroup}>
         <ButtonGroup
            color="primary"
            variant="outlined"
            aria-label="outlined primary button group"
         >
            <Button
               variant={filter === 'Suggested' ? 'contained' : 'outlined'}
               disableElevation={filter === 'Suggested' ? true : false}
               size="small"
               onClick={
                  filter !== 'Suggested'
                     ? () => {
                          changeFilter('Suggested')
                       }
                     : null
               }
            >
               Suggested
            </Button>
            <Button
               variant={filter === 'Available Now' ? 'contained' : 'outlined'}
               disableElevation={filter === 'Available Now' ? true : false}
               size="small"
               onClick={
                  filter !== 'Available Now'
                     ? () => {
                          changeFilter('Available Now')
                       }
                     : null
               }
            >
               Available Now
            </Button>
            <Button
               variant={filter === 'Nearest' ? 'contained' : 'outlined'}
               disableElevation={filter === 'Nearest' ? true : false}
               size="small"
               onClick={
                  filter !== 'Nearest'
                     ? () => {
                          changeFilter('Nearest')
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
// returns a slider that lets user adjust the visible listings according to the distance set.
function DistanceFilter() {
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
   const distance = useFilterStore((state) => state.distance)
   const setDistance = useFilterStore((state) => state.setDistance)
   const [value, setvalue] = useState(distance)
   const handleChange = (event, value) => {
      setvalue(value)
   }
   const handleSetDistance = () => {
      setDistance(value)
   }

   return (
      <div className={classes.container__distanceFilter}>
         <div className={classes.container__titleButton}>
            <Typography variant="h6" className={classes.text_bold}>
               Distance
            </Typography>
            <IconButton onClick={handleSetDistance}>
               <RefreshIcon color="primary" />
            </IconButton>
         </div>
         <div>
            <div className={classes.container__distanceSlider}>
               <Slider
                  step={1}
                  marks={marks}
                  min={1}
                  max={5}
                  value={value}
                  onChange={handleChange}
               />
            </div>
         </div>
      </div>
   )
}
// returns multiple checkbox that is used to filter the categories of individual listings
function FoodCategory() {
   const foodCategory = useFilterStore((state) => state.foodCategory)
   const setFoodCategory = useFilterStore((state) => state.setFoodCategory)
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
      setFoodCategory(Object.values(isChecked))
   }

   const classes = useStyles()

   console.log(foodCategory)
   return (
      <div>
         <div className={classes.container__titleButton}>
            <Typography variant="h6" className={classes.text_bold}>
               Food Category
            </Typography>
            <IconButton onClick={handleUpdateAllCheck}>
               <RefreshIcon color="primary" />
            </IconButton>
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
               label="Beverages"
               name="test3"
               checked={isChecked.test3}
               handleChange={handleSingleCheck}
            />
            <CategoryCheckBox
               label="Categ 4"
               name="test4"
               checked={isChecked.test4}
               handleChange={handleSingleCheck}
            />
            <CategoryCheckBox
               label="Categ 5"
               name="test5"
               checked={isChecked.test5}
               handleChange={handleSingleCheck}
            />
         </div>
      </div>
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
