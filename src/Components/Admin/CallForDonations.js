import { useState, useEffect } from 'react'
import {
   Grid,
   Typography,
   Box,
   Tab,
   Tabs,
   AppBar,
   makeStyles,
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   TextField,
   Card,
   CardHeader,
   CardMedia,
   CardContent,
   CardActions,
   Avatar,
   IconButton,
   Tooltip,
   Chip,
   Collapse,
   Radio,
   RadioGroup,
   FormControl,
   FormLabel,
   FormControlLabel,
   Divider,
} from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors'
import DoneIcon from '@material-ui/icons/Done'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ChatIcon from '@material-ui/icons/Chat'

export default function CallForDonations() {
   return (
      <Grid container spacing={4} justify="center">
         <Grid item xs={12}>
            <DonationTabs />
         </Grid>
      </Grid>
   )
}

function DonationTabs() {
   const classes = useStyles()
   const [value, setValue] = useState(0)
   const [open, setOpen] = useState(false)
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   const handleClose = () => {
      setOpen(false)
   }
   return (
      <div className={classes.root}>
         <Box boxShadow={1} borderRadius={5}>
            <div className={classes.container__search}>
               <Typography variant="h5" className={classes.text_bold}>
                  Call for Donations
               </Typography>
               <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setOpen(true)}
               >
                  Make a request
               </Button>
            </div>

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
                  <Tab label="Requests" />
                  <Tab label="To be Claimed" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            <Grid container spacing={2} style={{ marginTop: '.5rem' }}>
               <Grid item xs={12}>
                  <Box
                     bgcolor="white"
                     boxShadow={1}
                     borderRadius={5}
                     pl={2}
                     pr={4}
                     pt={2}
                     pb={2}
                     display="flex"
                     justifyContent="space-between"
                  >
                     <Typography variant="h6" className={classes.text_bold}>
                        Active Requests
                     </Typography>
                     <Typography variant="h6" className={classes.text_bold}>
                        3
                     </Typography>
                  </Box>
               </Grid>
               {requestData
                  .filter((request) => request.status === 'Active')
                  .map((request) => (
                     <RequestItem
                        key={request.title}
                        title={request.title}
                        description={request.description}
                        pubmat={request.pubmat}
                        quantityReceived={request.quantityReceived}
                        date={request.date}
                        status={request.status}
                        categoryNeeded={request.categoryNeeded}
                     />
                  ))}
               <Grid item xs={12}>
                  <Box
                     bgcolor="white"
                     boxShadow={1}
                     borderRadius={5}
                     pl={2}
                     pr={4}
                     pt={2}
                     pb={2}
                  >
                     <Typography variant="h6" className={classes.text_bold}>
                        Fulfilled Requests
                     </Typography>
                  </Box>
               </Grid>
               {requestData
                  .filter((request) => request.status === 'Fulfilled')
                  .map((request) => (
                     <RequestItem
                        key={request.title}
                        title={request.title}
                        description={request.description}
                        pubmat={request.pubmat}
                        quantityReceived={request.quantityReceived}
                        date={request.date}
                        status={request.status}
                        categoryNeeded={request.categoryNeeded}
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
                        key={donation.donationID}
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
         <RequestForm open={open} handleClose={handleClose} />
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

function RequestForm(props) {
   const [value, setValue] = useState('Canned Goods')

   const handleChange = (event) => {
      setValue(event.target.value)
   }

   const { open, handleClose } = props
   return (
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
         <DialogTitle>Request for donations</DialogTitle>
         <DialogContent dividers>
            <TextField
               label="Title"
               fullWidth
               variant="outlined"
               // <Chgin="normal"
            />
            <TextField
               label="Description"
               margin="normal"
               fullWidth
               multiline
               rows={4}
               variant="outlined"
            />
            <Box width="100%">
               <FormControl component="fieldset">
                  <FormLabel component="legend">Food Category needed</FormLabel>
                  <RadioGroup
                     name="category"
                     value={value}
                     onChange={handleChange}
                  >
                     <FormControlLabel
                        value="Canned Goods"
                        control={<Radio />}
                        label="Canned Goods"
                     />
                     <FormControlLabel
                        value="Instant Noodles"
                        control={<Radio />}
                        label="Instant Noodles"
                     />
                     <FormControlLabel
                        value="Vegetables"
                        control={<Radio />}
                        label="Vegetables"
                     />
                     <FormControlLabel
                        value="Eggs"
                        control={<Radio />}
                        label="Eggs"
                     />
                     <FormControlLabel
                        value="Uncooked Rice"
                        control={<Radio />}
                        label="Uncooked Rice"
                     />
                     <FormControlLabel
                        value="Bread &amp; Pastry"
                        control={<Radio />}
                        label="Bread &amp; Pastry"
                     />
                     <FormControlLabel
                        value="Fruits"
                        control={<Radio />}
                        label="Fruits"
                     />
                     <FormControlLabel
                        value="Biscuits &amp; Snacks"
                        control={<Radio />}
                        label="Biscuits &amp; Snacks"
                     />
                     <FormControlLabel
                        value="Beverages"
                        control={<Radio />}
                        label="Beverages"
                     />
                     <FormControlLabel
                        value="Others"
                        control={<Radio />}
                        label="Others"
                     />
                  </RadioGroup>
               </FormControl>
            </Box>
            <Button variant="outlined" color="primary">
               Upload a pubmat
            </Button>
         </DialogContent>
         <DialogActions>
            <Button color="primary" onClick={handleClose}>
               Cancel
            </Button>
            <Button color="primary" variant="contained">
               Post
            </Button>
         </DialogActions>
      </Dialog>
   )
}

function RequestItem(props) {
   const {
      title,
      description,
      pubmat,
      quantityReceived,
      date,
      status,
      categoryNeeded,
   } = props
   const [expanded, setExpanded] = useState(false)

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }
   const classes = useStyles()
   return (
      <Grid item xs={12} md={4}>
         <Card>
            <CardHeader
               action={
                  status === 'Active' ? (
                     <Tooltip title="Mark as fulfilled">
                        <IconButton>
                           <DoneIcon />
                        </IconButton>
                     </Tooltip>
                  ) : null
               }
               titleTypographyProps={{ variant: 'body1' }}
               title={`Posted on ${date}`}
               subheaderTypographyProps={{ variant: 'body2' }}
               subheader={`${
                  status === 'Active' ? 'Current' : 'Total'
               } donation count: ${quantityReceived}`}
            />

            <CardMedia
               className={classes.media}
               image={pubmat}
               title="pubmat"
            />
            <CardContent>
               <Typography variant="body1" className={classes.text_bold} noWrap>
                  {title}
               </Typography>
               <Typography variant="body2">{description}</Typography>
               <Box my={1}>
                  {/* <Typography variant="body2">Category needed</Typography> */}
                  <Chip color="primary" label={categoryNeeded} size="small" />
               </Box>
            </CardContent>
            <CardActions>
               <Button
                  onClick={handleExpandClick}
                  // variant="contained"
                  size="small"
                  color="primary"
               >
                  {expanded ? 'Hide' : 'View'} donations from donors
               </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent>
                  <Box maxHeight="300px" overflow="auto">
                     {donorData.map((item) => (
                        <DonorItems
                           key={item.donorName}
                           avatar={item.avatar}
                           donorName={item.donorName}
                           description={item.description}
                        />
                     ))}
                  </Box>
               </CardContent>
            </Collapse>
         </Card>
      </Grid>
   )
}

function DonorItems(props) {
   const { avatar, donorName, description } = props
   const classes = useStyles()
   return (
      <Box display="flex" alignItems="center" mb={2}>
         <Avatar src={avatar} style={{ marginRight: '10px' }} />
         <Box>
            {' '}
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               {donorName}
            </Typography>
            <Typography variant="body2">{description}</Typography>
         </Box>
      </Box>
   )
}

function Item(props) {
   const classes = useStyles()
   const {
      donationID,
      donorName,
      imgLoc,
      donationName,
      method,
      date,
      location,
      quantity,
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
                  <>
                     <Box
                        display="flex"
                        alignItems="center"
                        style={{ marginLeft: '-5px' }}
                     >
                        <LocationOnIcon
                           style={{
                              color: 'red',
                              width: '1.1rem',
                              marginRight: '3px',
                           }}
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
                        <span style={{ fontWeight: '200' }}>Donor:</span>{' '}
                        {donorName}
                     </Typography>
                     <Typography variant="body2" style={{ fontWeight: '200' }}>
                        {method} on{' '}
                        <span style={{ fontWeight: '500' }}>{date}</span>
                     </Typography>

                     <Typography variant="body2" style={{ fontWeight: '200' }}>
                        Quantity:{' '}
                        <span style={{ fontWeight: '500' }}>
                           {quantity} piece/s
                        </span>
                     </Typography>
                  </>
               </Box>
               <Box display="flex" mt={1}>
                  <Button
                     variant="contained"
                     className={classes.button_lightblue}
                  >
                     <ChatIcon />
                  </Button>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_green}
                  >
                     Mark as claimed
                  </Button>
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

function DonationDetails(props) {
   const classes = useStyles()
   const { handleClose, open, donationID } = props
   const [donationDetails, setdonationDetails] = useState(null)

   useEffect(() => {
      setdonationDetails(
         data.filter((donation) => donation.donationID === donationID)
      )
   }, [donationID])

   if (donationDetails) {
      console.log(donationDetails)
   }

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
                     >
                        <div
                           style={{
                              backgroundImage: `url(${donationDetails[0].imgLoc})`,
                              backgroundSize: 'cover',
                              // borderRadius: '5px',
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
                                    Donor Name{' '}
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

   container__listingitem: {
      margin: '.5rem',
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      padding: '15px',
      borderRadius: '5px',
   },
   image__listingitem: {
      // width: '200px',
      height: '200px',
      borderRadius: '5px',
      marginRight: '15px',
   },
   container__listingdetail: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   container__button: {
      alignSelf: 'flex-end',
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
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
   media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
   },
   expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
      }),
   },
   expandOpen: {
      transform: 'rotate(180deg)',
   },
   avatar: {
      backgroundColor: red[500],
   },
}))

const data = [
   {
      donationID: '1',
      donorName: 'Johnny Geis',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235',
      donationName: 'Repolyo',
      quantity: 3,
      category: 'Vegetables',
      expiryDate: '10/05/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
      dateClaimed: 'July 01, 2021',
   },
   {
      donationID: '2',
      donorName: 'Lee Weber',
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      donationName: 'Argentina Corned Beef',
      quantity: 7,
      category: 'Canned Goods',
      expiryDate: '10/03/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
   },
   {
      donationID: '3',
      donorName: 'Sidney Carr',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368',
      donationName: 'Kamatis',
      quantity: 20,
      category: 'Vegetables',
      expiryDate: '09/10/2021',
      method: 'Deliver',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
   },
   {
      donationID: '4',
      donorName: 'Felicia Presley',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399',
      donationName: 'Sibuyas',
      quantity: 10,
      category: 'Vegetables',
      expiryDate: '09/15/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
   },
   {
      donationID: '5',
      donorName: 'Pat Lyons',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU',
      donationName: 'Ligo sardines',
      quantity: 8,
      category: 'Canned Goods',
      expiryDate: '09/15/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/02/2021',
      status: 'Accepted',
   },
   {
      donationID: '6',
      donorName: 'Elise Perry',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      donationName: '555 sardines',
      quantity: 13,
      category: 'Canned Goods',
      expiryDate: '09/15/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/02/2021',
      status: 'Accepted',
   },
   {
      donationID: '7',
      donorName: 'Harvey Moreno',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753',
      donationName: 'Eggplant',
      quantity: 5,
      category: 'Vegetables',
      expiryDate: '07/15/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/02/2021',
      status: 'Accepted',
   },
   {
      donationID: '8',
      donorName: 'Aiken Burgess',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/IMG_4293_480x.jpg?v=1575871682',
      donationName: 'Carrots',
      quantity: 15,
      category: 'Vegetables',
      expiryDate: '07/15/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/02/2021',
      status: 'Accepted',
   },
]

const requestData = [
   {
      title: 'Call for donations for the victims of Typhoon Rolly',
      description:
         'In support of the disaster relief efforts of the Ateneo Graduate School of Business',
      pubmat: 'http://gsb.ateneo.edu/wp-content/uploads/2020/11/Rolly-1.jpg',
      quantityReceived: 123,
      status: 'Fulfilled',
      date: 'June 22, 2021',
      categoryNeeded: 'Instant Noodles',
   },
   {
      title: 'Call for Donations for Mindanao Earthquake Survivors',
      description:
         ' The maryknoll//Miriam College Alumni Association appeals for in kind donations for victims of recent earthquakes in Mindanao.',
      pubmat:
         'https://www.mc.edu.ph/Portals/21/xBlog/uploads/2019/11/19/MMCAADonations1.jpg',
      quantityReceived: 89,
      status: 'Active',
      date: 'June 27, 2021',
      categoryNeeded: 'Canned Goods',
   },
   {
      title: 'Help us raise funds and relief goods for the victims of fire in Jolo, Sulu',
      description:
         'Help us raise funds and relief goods for the 3,500 families affected by the July 25, 2018 fire in Jolo, Sulu',
      pubmat:
         'https://iisupd.files.wordpress.com/2018/07/social-card-jolo-fire.jpg',
      quantityReceived: 81,
      status: 'Active',
      date: 'June 29, 2021',
      categoryNeeded: 'Vegetables',
   },
]
const donorData = [
   {
      avatar:
         'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      donorName: 'Johnny Geis',
      description: 'Will donate 10 pieces thru pickup',
   },
   {
      avatar: 'http://i.imgur.com/vqESNGp.jpg',
      donorName: 'Lee Weber',
      description: 'Will donate 20 pieces thru deliver',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU',
      donorName: 'Sidney Carr',
      description: 'Will donate 15 pieces thru pickup',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU',
      donorName: 'Felicia Presley',
      description: 'Will donate 25 pieces thru pickup',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1lcgfNqNDEWh8LDCKaXIraxgEE7XihuhH4IR2q0AE92JoF0_-z8qihjZ5Z5wFkX96zI&usqp=CAU',
      donorName: 'Pat Lyons',
      description: 'Will donate 18 pieces thru deliver',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs_iIewEiaZ3tXb6n6VgaUIONS0B0HjwsqcvA3-EnnaNm0BwX216u2dZl2QTHnP7VOIU&usqp=CAU',
      donorName: 'Elise Perry',
      description: 'Has donated 13 pieces',
   },
   {
      avatar: 'http://i.imgur.com/RP1Z4WT.jpg',
      donorName: 'Harvey Moreno',
      description: 'Has donated 28 pieces',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU',
      donorName: 'Aiken Burgess',
      description: 'Has donated 8 pieces',
   },
]
