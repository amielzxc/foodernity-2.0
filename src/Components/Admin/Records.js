import { useState } from 'react'
import {
   Box,
   Grid,
   Typography,
   makeStyles,
   AppBar,
   Tab,
   Tabs,
   Chip,
   withStyles,
   Paper,
} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'

export default function Records() {
   return (
      <Grid container spacing={1}>
         <Grid item xs={12}>
            <DonationTabs />
         </Grid>
      </Grid>
   )
}

function DonationTabs() {
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
                  Records
               </Typography>
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
                  <Tab label="Donated Items" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            <Paper elevation={0} style={{ marginTop: '1rem' }}>
               <div style={{ height: 620 }}>
                  <StyledDataGrid
                     // autoPageSize
                     rows={data}
                     columns={column}
                     pageSize={7}
                     checkboxSelection={false}
                  />
               </div>
            </Paper>
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

const column = [
   {
      field: 'id',
      headerName: 'ID',
      width: 100,
      type: 'number',
   },
   {
      field: 'imgLoc',
      headerName: 'Image',
      sortable: false,
      width: 100,
      // disableClickEventBubbling: true,

      renderCell: (params) => {
         return (
            <img
               src={params.row.imgLoc}
               alt="donation"
               style={{ width: '50px', height: '50px', margin: '10px' }}
            />
         )
      },
   },
   {
      field: 'donationName',
      headerName: 'Donation',
      width: 170,
   },
   {
      field: 'donorName',
      headerName: 'Donor',
      width: 170,
   },
   {
      field: 'recipient',
      headerName: 'Recipient',
      width: 160,
   },
   {
      field: 'category',
      headerName: 'Category',
      width: 170,
      renderCell: (params) => {
         return (
            // <Chip label={params.row.category} style={{ margin: '0 auto' }} />
            <Category label={params.row.category} />
         )
      },
   },
   {
      field: 'quantity',
      headerName: 'Qty.',
      width: 105,
      type: 'number',
   },

   {
      field: 'expiryDate',
      headerName: 'Expiry',
      width: 160,
   },
   {
      field: 'method',
      headerName: 'Method',
      width: 160,
   },
   {
      field: 'location',
      headerName: 'Pickup/deliver location',
      width: 160,
      sortable: false,
   },
   {
      field: 'pickupDate',
      headerName: 'Pickup Date',
      width: 160,
   },
   {
      field: 'dateClaimed',
      headerName: 'Claimed on',
      width: 160,
   },
   {
      field: 'dateDonated',
      headerName: 'Donated on',
      width: 160,
   },
]

function Category(props) {
   const colorArray = [
      {
         category: 'Canned Goods',
         color: '#EF5350',
      },
      {
         category: 'Instant Noodles',
         color: '#FBC02D',
      },
      {
         category: 'Vegetables',
         color: '#66BB6A',
      },
      {
         category: 'Eggs',
         color: '#E0E0E0',
      },
      {
         category: 'Uncooked Rice',
         color: '#F5F5F5',
      },
      {
         category: 'Bread & Pastry',
         color: '#8D6E63',
      },
      {
         category: 'Fruits',
         color: '#FFA726',
      },
      {
         category: 'Biscuits & Snacks',
         color: '#BA68C8',
      },
      {
         category: 'Beverages',
         color: '#42A5F5',
      },
      {
         category: 'Others',
         color: '#90A4AE',
      },
   ]

   const color = colorArray.filter((e) => e.category === props.label)

   return (
      <Chip
         label={props.label}
         style={{
            margin: '0',
            backgroundColor: color[0].color,
            color: props.label === 'Eggs' ? 'black' : 'white',
         }}
      />
   )
}

const StyledDataGrid = withStyles({
   root: {
      '& .MuiDataGrid-renderingZone': {
         maxHeight: 'none !important',
      },
      '& .MuiDataGrid-cell': {
         lineHeight: 'unset !important',
         maxHeight: 'none !important',
         whiteSpace: 'normal',
         justifyContent: 'flex-start',
         alignItems: 'center',
         display: 'flex',
      },
      '& .MuiDataGrid-row': {
         maxHeight: 'none !important',
      },
      // '& .MuiDataGrid-columnHeaderTitleContainer': {
      //    display: 'flex',
      //    justifyContent: 'center',
      // },
      '& .MuiDataGrid-columnHeaderTitle': {
         fontWeight: 'bold',
         textAlign: 'center',
      },
   },
})(DataGrid)

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
}))

const data = [
   {
      id: 1,
      imgLoc:
         'https://image.freepik.com/free-photo/tray-white-fresh-eggs-close-up-cardboard-form-agricultural-industry_180601-1170.jpg',
      donationName: ' 1 egg tray',
      donorName: 'Juan Dela Cruz',
      category: 'Eggs',
      quantity: 12,
      expiryDate: '07/20/2021',
      method: 'Pickup',
      location:
         'Eastern Shipping Lines Inc., Anda Cricle, Port Area, Manila, Metro Manila',
      pickupDate: '06/15/2021',
      dateClaimed: '06/15/2021',
      recipient: 'Bantay Bata',
      dateDonated: '06/17/2021',
   },
]
