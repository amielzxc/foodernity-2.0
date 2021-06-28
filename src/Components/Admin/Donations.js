import { useEffect, useState } from 'react'
import {
   Typography,
   Tab,
   Grid,
   Box,
   AppBar,
   Tabs,
   makeStyles,
   Button,
   useTheme,
   useMediaQuery,
   FormControlLabel,
   Checkbox,
   IconButton,
   Slider,
   Dialog,
   DialogTitle,
   DialogContent,
   Chip,
   Avatar,
   ButtonGroup,
   Divider,
} from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList'
import { grey } from '@material-ui/core/colors'
import { useDonationStore } from '../../store/DonationStore'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ChatIcon from '@material-ui/icons/Chat'

export default function Donations() {
   return (
      <Grid container spacing={4} justify="center">
         <Grid item xs={12}>
            <DonationTabs />
         </Grid>
      </Grid>
   )
}

function DonationTabs() {
   const [foodCategory, setTempFoodCategory] = useState(
      useDonationStore((state) => state.foodCategory)
   )
   const [distance, setTempDistance] = useState(
      useDonationStore((state) => state.distance)
   )
   const [toggleFilter, setToggleFilter] = useState(false)
   const classes = useStyles()
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.root}>
         <Box boxShadow={1} borderRadius={5}>
            <div className={classes.container__search}>
               <Typography variant="h5" className={classes.text_bold}>
                  Donations
               </Typography>
               <IconButton
                  onClick={() => {
                     setToggleFilter(!toggleFilter)
                  }}
               >
                  <FilterListIcon />
               </IconButton>
            </div>
            <Box
               display={toggleFilter ? 'block' : 'none'}
               bgcolor="white"
               pl={4}
               pr={4}
            >
               <Grid container spacing={3}>
                  {/* <Grid item xs={12} md={2}>
                     <ButtonGroup orientation="vertical" fullWidth>
                        <Button color="primary" variant="contained">
                           By Expiry
                        </Button>
                        <Button color="primary" variant="outlined">
                           By quantity
                        </Button>
                     </ButtonGroup>
                  </Grid> */}
                  <Grid item xs={12} md={5}>
                     <DistanceFilter
                        distance={distance}
                        setTempDistance={setTempDistance}
                     />
                  </Grid>
                  <Grid item xs={12} md={5}>
                     <FoodCategory
                        foodCategory={foodCategory}
                        setTempFoodCategory={setTempFoodCategory}
                     />
                  </Grid>
                  <Grid item xs={12} md={2}>
                     <Typography variant="h6" className={classes.text_bold}>
                        Method
                     </Typography>
                     <ButtonGroup orientation="vertical" fullWidth>
                        <Button variant="contained" color="primary">
                           Pickup
                        </Button>
                        <Button variant="outlined" color="primary">
                           Deliver
                        </Button>
                     </ButtonGroup>
                  </Grid>
               </Grid>
            </Box>
            <AppBar
               position="static"
               color="default"
               elevation={0}
               className={classes.appbar}
            >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
               >
                  <Tab label="Available" />
                  <Tab label="To be Claimed" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            <Grid container spacing={2} style={{ marginTop: '.5rem' }}>
               {data
                  .filter((donation) => donation.status === 'Available')
                  .map((donation) => (
                     <Item
                        donationID={donation.donationID}
                        donorName={donation.donorName}
                        imgLoc={donation.imgLoc}
                        donationName={donation.donationName}
                        status={donation.status}
                        method={donation.method}
                        date={donation.date}
                        location={donation.pickupLocation}
                        quantity={donation.quantity}
                     />
                  ))}
            </Grid>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <Grid container spacing={2} style={{ marginTop: '.5rem' }}>
               {data
                  .filter((donation) => donation.status === 'Accepted')
                  .map((donation) => (
                     <Item
                        donationID={donation.donationID}
                        donorName={donation.donorName}
                        imgLoc={donation.imgLoc}
                        donationName={donation.donationName}
                        status={donation.status}
                        method={donation.method}
                        date={donation.date}
                        location={donation.pickupLocation}
                        quantity={donation.quantity}
                     />
                  ))}
            </Grid>
         </TabPanel>
      </div>
   )
}

function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`scrollable-auto-tabpanel-${index}`}
         aria-labelledby={`scrollable-auto-tab-${index}`}
         {...other}
      >
         {value === index && <Box>{children}</Box>}
      </div>
   )
}

function Item(props) {
   const classes = useStyles()
   const {
      donationID,
      donorName,
      imgLoc,
      donationName,
      status,
      method,
      date,
      location,
      quantity,
      dateClaimed,
   } = props

   const [open, setOpen] = useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   return (
      <Grid item xs={6}>
         <Box
            onClick={handleClickOpen}
            display="flex"
            borderRadius={5}
            boxShadow={1}
            bgcolor="white"
            p={1.5}
            style={{ cursor: 'pointer' }}
            alignItems="center"
         >
            <img
               src={imgLoc}
               alt="donation"
               style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '5px',
               }}
            />
            <Box
               width="65%"
               marginLeft={2}
               display="flex"
               flexDirection="column"
               justifyContent="space-between"
               alignItems="flex-end"
               flex="1"
            >
               <Box width="100%">
                  <Typography className={classes.text_bold}>
                     {donationName}
                  </Typography>

                  <Label
                     status={status}
                     date={date}
                     method={method}
                     location={location}
                     quantity={quantity}
                     dateClaimed={dateClaimed}
                     donorName={donorName}
                  />
               </Box>
               <Box mt={1}>
                  <ActionButtons status={status} />
               </Box>
            </Box>
         </Box>
         <DonationDetails
            donationID={donationID}
            open={open}
            handleClose={handleClose}
         />
      </Grid>
   )
}

function ActionButtons(props) {
   const classes = useStyles()
   const { status } = props
   // const setOpenMessage = useMessageStore((state) => state.setOpenMessage)
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('xs'))

   if (status === 'Available') {
      return (
         <Box display="flex">
            {/* <Button variant="primary" className={classes.button_grey}>
               Decline
            </Button> */}
            <Button variant="contained" color="primary" disableElevation>
               Accept Donation
            </Button>
         </Box>
      )
   } else if (status === 'Accepted') {
      return (
         <>
            <Button variant="contained" className={classes.button_lightblue}>
               <ChatIcon />
            </Button>
            <Button
               disableElevation
               variant="contained"
               className={classes.button_green}
            >
               Mark as claimed
            </Button>
         </>
      )
   } else if (status === 'Claimed') {
      return (
         <Button variant="contained" color="primary">
            Add recipient
         </Button>
      )
   }
}

function Label(props) {
   const {
      donorName,
      status,
      method,
      date,
      expiry,
      quantity,
      category,
      location,
      dateClaimed,
   } = props

   if (status === 'Available') {
      return (
         <>
            <Box
               display="flex"
               alignItems="center"
               style={{ marginLeft: '-5px' }}
            >
               <LocationOnIcon
                  style={{ color: 'red', width: '1.1rem', marginRight: '3px' }}
               />
               <Typography
                  variant="body2"
                  style={{ fontWeight: '500', color: '#2196F3' }}
                  noWrap
               >
                  {location}
               </Typography>
            </Box>
            <Typography variant="body2">
               {' '}
               <span style={{ fontWeight: '200' }}>Donor:</span> {donorName}
            </Typography>
            <Typography variant="body2" style={{ fontWeight: '200' }}>
               {method} on <span style={{ fontWeight: '500' }}>{date}</span>
            </Typography>

            <Typography variant="body2" style={{ fontWeight: '200' }}>
               Quantity:{' '}
               <span style={{ fontWeight: '500' }}>{quantity} piece/s</span>
            </Typography>
         </>
      )
   } else if (status === 'Accepted') {
      return (
         <>
            <Box
               display="flex"
               alignItems="center"
               style={{ marginLeft: '-5px' }}
            >
               <LocationOnIcon
                  style={{ color: 'red', width: '1.1rem', marginRight: '3px' }}
               />
               <Typography
                  variant="body2"
                  style={{ fontWeight: '500', color: '#2196F3' }}
                  noWrap
               >
                  {location}
               </Typography>
            </Box>
            <Typography variant="body2">
               {' '}
               <span style={{ fontWeight: '200' }}>Donor:</span> {donorName}
            </Typography>
            <Typography variant="body2" style={{ fontWeight: '200' }}>
               {method} on <span style={{ fontWeight: '500' }}>{date}</span>
            </Typography>

            <Typography variant="body2" style={{ fontWeight: '200' }}>
               Quantity:{' '}
               <span style={{ fontWeight: '500' }}>{quantity} piece/s</span>
            </Typography>
         </>
      )
   } else if (status === 'Claimed') {
      return (
         <Typography variant="body2" style={{ fontWeight: '200' }}>
            Donation claimed on {dateClaimed}
         </Typography>
      )
   }
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
      cannedgoods: foodCategory[0],
      instantnoodles: foodCategory[1],
      vegetables: foodCategory[2],
      eggs: foodCategory[3],
      uncookedrice: foodCategory[4],
      breadandpastry: foodCategory[5],
      fruits: foodCategory[6],
      biscuitsandsnacks: foodCategory[7],
      beverages: foodCategory[8],
      others: foodCategory[9],
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
                  name="cannedgoods"
                  checked={isChecked.cannedgoods}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Instant Noodles"
                  name="instantnoodles"
                  checked={isChecked.instantnoodles}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Vegetables"
                  name="vegetables"
                  checked={isChecked.vegetables}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Eggs"
                  name="eggs"
                  checked={isChecked.eggs}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Uncooked Rice"
                  name="uncookedrice"
                  checked={isChecked.uncookedrice}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Bread &amp; Pastry"
                  name="breadandpastry"
                  checked={isChecked.breadandpastry}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Fruits"
                  name="fruits"
                  checked={isChecked.fruits}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Biscuits &amp; Snacks"
                  name="biscuitsandsnacks"
                  checked={isChecked.biscuitsandsnacks}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Beverages"
                  name="beverages"
                  checked={isChecked.beverages}
                  handleChange={handleSingleCheck}
               />
               <CategoryCheckBox
                  label="Others"
                  name="others"
                  checked={isChecked.others}
                  handleChange={handleSingleCheck}
               />
            </div>
         </div>
      </form>
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

function DonationDetails(props) {
   const classes = useStyles()
   const { handleClose, open, donationID } = props
   const [donationDetails, setdonationDetails] = useState(null)

   useEffect(() => {
      setdonationDetails(
         data.filter((donation) => donation.donationID === donationID)
      )
   }, [donationID])

   return (
      <>
         {donationDetails !== null && (
            <Dialog
               open={open}
               onClose={handleClose}
               fullWidth={true}
               maxWidth="md"
            >
               <DialogTitle>Donation Details {donationID}</DialogTitle>
               <DialogContent dividers>
                  <Grid container spacing={1} justify="center">
                     <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justify="center"
                        alignItems="center"
                        // style={{ padding: '1rem' }}
                     >
                        <div
                           style={{
                              backgroundImage: `url(${donationDetails[0].imgLoc})`,
                              backgroundSize: 'cover',
                              // borderRadius: '10px',
                              width: '80%',
                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                           }}
                        >
                           <img
                              src={donationDetails[0].imgLoc}
                              alt="donation"
                              style={{
                                 backdropFilter: 'blur(10px)',
                                 maxWidth: '490px',
                                 width: '100%',
                                 height: '100%',
                                 maxHeight: '600px',
                                 objectFit: 'contain',
                              }}
                           />
                        </div>
                     </Grid>
                     <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12}>
                           <Box display="flex" alignItems="center">
                              <Avatar style={{ marginRight: '10px' }}>
                                 FB
                              </Avatar>
                              <div>
                                 <Typography
                                    variant="body1"
                                    component="p"
                                    className={classes.text_bold}
                                 >
                                    {donationDetails[0].donorName}
                                 </Typography>
                                 <Typography variant="body2">
                                    Donor Name • {donationDetails[0].method}
                                    {/* <span
                                       style={{
                                          fontWeight: '300',
                                          fontSize: '13px',
                                       }}
                                    >
                                       {' '}
                                       Posted 3h ago
                                    </span> */}
                                 </Typography>
                              </div>
                           </Box>
                        </Grid>
                        <Grid item xs={12}>
                           <Divider />
                        </Grid>
                        <Grid item xs={12}>
                           <Typography
                              variant="h6"
                              className={classes.text_bold}
                           >
                              {donationDetails[0].donationName}
                           </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <Chip
                              label={donationDetails[0].category}
                              color="primary"
                           />
                        </Grid>

                        <Grid item xs={6}>
                           <Typography
                              className={classes.text_bold}
                              style={{ textAlign: 'center' }}
                           >
                              Total quantity
                           </Typography>
                           <Typography>
                              <Typography
                                 variant="body2"
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].quantity} pieces
                              </Typography>
                           </Typography>
                        </Grid>
                        <Grid item xs={6}>
                           <Typography
                              className={classes.text_bold}
                              style={{ textAlign: 'center' }}
                           >
                              Expiry Date
                           </Typography>
                           <Typography
                              variant="body2"
                              style={{ textAlign: 'center' }}
                           >
                              {donationDetails[0].expiryDate}
                           </Typography>
                        </Grid>

                        <Grid item xs={12}>
                           <Typography className={classes.text_bold}>
                              Donation Notes
                           </Typography>
                           <Typography variant="body2">
                              {donationDetails[0].donationNotes
                                 ? donationDetails[0].donationNotes
                                 : 'none'}
                           </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <Divider className={classes.divider_margin} />
                        </Grid>
                        <Grid container item xs={12}>
                           <Grid item xs={6}>
                              <Typography
                                 className={classes.text_bold}
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].method === 'Deliver'
                                    ? 'Deliver location'
                                    : 'Pickup location'}
                              </Typography>
                              <Typography
                                 variant="body2"
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].pickupLocation}
                              </Typography>
                           </Grid>
                           <Grid item xs={6}>
                              <Typography
                                 className={classes.text_bold}
                                 style={{ textAlign: 'center' }}
                              >
                                 Pickup date
                              </Typography>
                              <Typography
                                 variant="body2"
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].date}
                              </Typography>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </DialogContent>
            </Dialog>
         )}
      </>
   )
}

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      borderRadius: '5px',
   },
   appbar: {
      backgroundColor: 'white',
      borderRadius: '5px',
   },
   container__search: {
      borderRadius: '5px',
      width: 'auto',
      backgroundColor: 'white',
      padding: '15px 15px 10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
         flexDirection: 'column',
      },
   },
   text_bold: {
      fontWeight: 'bold',
   },
   divider_margin: {
      margin: theme.spacing(1.5, 0),
   },
   container__checkbox: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
   },
   button_lightblue: {
      marginRight: theme.spacing(1),
      color: '#2196F3',
      backgroundColor: '#E3F2FD',
      '&:hover': {
         backgroundColor: '#BEE4FF',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#2196F3',
         },
      },
   },
   button_green: {
      color: 'white',
      backgroundColor: '#66BB6A',
      '&:hover': {
         backgroundColor: '#57A05A',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#66BB6A',
         },
      },
   },
   button_grey: {
      marginRight: '.5rem',
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
   container__distanceFilter: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
   },
   container__distanceSlider: {
      margin: '0 auto',
      width: '400px',
   },
}))

const data = [
   {
      donationID: '1',
      donorName: 'Fhillip Bagsic',
      imgLoc: 'https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg',
      donationName: 'Pancit Canton Noodles',
      quantity: 7,
      category: 'Instant Noodles',
      expiryDate: '10/05/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
      dateClaimed: 'July 01, 2021',
      recipient: '',
   },
   {
      donationID: '2',
      donorName: 'Amiel Morilla',
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      donationName: 'Argentina Corned Beef',
      quantity: 7,
      category: 'Canned Goods',
      expiryDate: '10/03/2021',
      method: 'Pickup',
      pickupLocation:
         'Far Eastern University, Nicanor Reyes Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Available',
      dateClaimed: '',
      recipient: '',
   },
   {
      donationID: '3',
      donorName: 'Kenneth Dela Cruz',
      imgLoc: 'https://cf.shopee.com.my/file/71ee574d1013a3715f71a25244c8715c',
      donationName: 'Lucky Me Chicken',
      quantity: 9,
      category: 'Instant Noodles',
      expiryDate: '09/10/2021',
      method: 'Deliver',
      pickupLocation: 'UE, Recto Avenue, Sampaloc, Manila, Metro Manila',
      date: '07/02/2021',
      status: 'Available',
      dateClaimed: '',
      recipient: '',
   },
   {
      donationID: '4',
      donorName: 'Carl Patio',
      imgLoc: 'https://cf.shopee.ph/file/b6fe5dbf2a4ff8d77959296a3574d630_tn',
      donationName: 'Sky Flakes',
      quantity: 15,
      category: 'Biscuits',
      expiryDate: '09/15/2021',
      method: 'Pickup',
      pickupLocation:
         'San Beda University, Mendiola Street, San Miguel, Manila, Metro Manila',
      date: '07/03/2021',
      status: 'Available',
      dateClaimed: '',
      recipient: '',
   },
]
