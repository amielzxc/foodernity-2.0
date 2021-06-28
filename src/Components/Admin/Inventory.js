import { useState } from 'react'
import {
   Grid,
   Typography,
   Paper,
   Button,
   GridCellValue,
   withStyles,
   Chip,
   Box,
   AppBar,
   Tab,
   makeStyles,
   Tabs,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
} from '@material-ui/core'
import {
   DataGrid,
   GridApi,
   GridColDef,
   GridToolbar,
} from '@material-ui/data-grid'

import rice from '../../assets/faqs/grain-sack.png'
import vegetable from '../../assets/faqs/harvest.png'
import cannedfood from '../../assets/faqs/canned-food.png'
import snack from '../../assets/faqs/snack.png'
import noodles from '../../assets/faqs/instant-noodles.png'
import softdrinks from '../../assets/faqs/soft-drink.png'
import fruits from '../../assets/faqs/fruits.png'
import egg from '../../assets/faqs/eggs.png'
import bread from '../../assets/faqs/bakery.png'
import others from '../../assets/faqs/ellipsis.png'
import { useAdminStore } from '../../store/AdminStore'
const categories = [
   {
      image: cannedfood,
      label: 'Canned Goods',
      count: 40,
      color: '#E2F2B5',
   },
   {
      image: noodles,
      label: 'Instant Noodles',
      count: 38,
      color: '#E2F2B5',
   },
   {
      image: vegetable,
      label: 'Vegetables',
      count: 31,
      color: '#E2F2B5',
   },
   {
      image: egg,
      label: 'Eggs',
      count: 51,
      color: '#E2F2B5',
   },
   {
      image: rice,
      label: 'Uncooked Rice',
      count: 20,
      color: '#E2F2B5',
   },
   {
      image: bread,
      label: 'Bread & Pastry',
      count: 21,
      color: '#E2F2B5',
   },
   {
      image: fruits,
      label: 'Fruits',
      count: 10,
      color: '#E2F2B5',
   },
   {
      image: snack,
      label: 'Biscuits & Snacks',
      count: 51,
      color: '#E2F2B5',
   },
   {
      image: softdrinks,
      label: 'Beverages',
      count: 20,
      color: '#E2F2B5',
   },
   {
      image: others,
      label: 'Others',
      count: 15,
      color: '#E2F2B5',
   },
]
export default function Inventory() {
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
                  Inventory
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
                  <Tab label="Items" />
                  <Tab label="Stocks per category" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            <Box my={2}>
               <Paper elevation={0}>
                  <div style={{ height: 650 }}>
                     <StyledDataGrid
                        // autoPageSize
                        rows={data}
                        columns={column}
                        pageSize={7}
                        checkboxSelection={false}
                        // components={{
                        //    Toolbar: GridToolbar,
                        // }}
                     />
                  </div>
               </Paper>
            </Box>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <Grid container spacing={2} style={{ marginTop: '.5rem' }}>
               {categories.map((category) => (
                  <Stocks
                     key={category.label}
                     image={category.image}
                     label={category.label}
                     count={category.count}
                     color={category.color}
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
      field: 'category',
      headerName: 'Category',
      width: 170,
      renderCell: (params) => {
         return (
            // <Chip label={params.row.category} style={{ margin: '0 auto' }} />
            <StyledChip label={params.row.category} />
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
      field: 'dateClaimed',
      headerName: 'Claimed on',
      width: 160,
      type: 'date',
   },
   {
      field: 'expiryDate',
      headerName: 'Expiry',
      width: 160,
      type: 'date',
   },
   {
      field: 'daysLeft',
      headerName: 'Before Expiry',
      width: 170,
      type: 'number',
      renderCell: (params) => {
         return (
            <StyledTypography daysLeft={params.row.daysLeft} />
            // <Typography style={{ color: 'red', textAlign: 'center' }}>
            //    {params.row.daysLeft} days left
            // </Typography>
         )
      },
   },
   {
      field: '',
      headerName: 'Action',
      width: 200,
      disableClickEventBubbling: true,
      sortable: false,
      renderCell: (params) => {
         const onClick = () => {
            console.log(params.row.donationID)
            return prompt(
               `Enter the recipient of the donation of the donor ${params.row.donorName}.`,
               ''
            )
         }
         return (
            <Button variant="contained" color="primary" onClick={onClick}>
               Mark as Donated
            </Button>
         )
      },
   },
]

const data = [
   {
      id: 1,
      donationID: 1,
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235',
      donationName: 'Repolyo',
      donorName: 'Johnny Geis',
      category: 'Vegetables',
      quantity: 8,
      dateClaimed: '06/25/2021',
      expiryDate: '07/02/2021',
      daysLeft: 7,
   },
   {
      id: 2,
      donationID: 2,
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      donationName: 'Argentina Corned Beef',
      donorName: 'Lee Weber',
      category: 'Canned Goods',
      quantity: 7,
      dateClaimed: '06/20/2021',
      expiryDate: '07/31/2021',
      daysLeft: 41,
   },
   {
      id: 3,
      donationID: 3,
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368',
      donationName: 'Kamatis',
      donorName: 'Sidney Carr',
      category: 'Vegetables',
      quantity: 20,
      dateClaimed: '06/29/2021',
      expiryDate: '07/09/2021',
      daysLeft: 10,
   },
   {
      id: 4,
      donationID: 4,
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399',
      donationName: 'Sibuyas',
      donorName: 'Felicia Presley',
      category: 'Vegetables',
      quantity: 10,
      dateClaimed: '07/01/2021',
      expiryDate: '07/15/2021',
      daysLeft: 14,
   },
   {
      id: 5,
      donationID: 5,
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU',
      donationName: 'Ligo sardines',
      donorName: 'Pat Lyons',
      category: 'Canned Goods',
      quantity: 8,
      dateClaimed: '06/25/2021',
      expiryDate: '09/15/2021',
      daysLeft: 82,
   },
   {
      id: 6,
      donationID: 6,
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      donationName: '555 sardines',
      donorName: 'Elise Perry',
      category: 'Canned Goods',
      quantity: 13,
      dateClaimed: '06/30/2021',
      expiryDate: '08/15/2021',
      daysLeft: 46,
   },
   {
      id: 7,
      donationID: 7,
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753',
      donationName: 'Eggplant',
      donorName: 'Harvey Moreno',
      category: 'Vegetables',
      quantity: 5,
      dateClaimed: '06/29/2021',
      expiryDate: '07/09/2021',
      daysLeft: 10,
   },
   {
      id: 8,
      donationID: 8,
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/IMG_4293_480x.jpg?v=1575871682',
      donationName: 'Carrots',
      donorName: 'Aiken Burgess',
      category: 'Vegetables',
      quantity: 15,
      dateClaimed: '06/28/2021',
      expiryDate: '07/15/2021',
      daysLeft: 17,
   },
   {
      id: 9,
      donationID: 9,
      imgLoc: 'https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg',
      donationName: 'Pancit Canton Noodles',
      donorName: 'Fhillip Bagsic',
      quantity: 7,
      category: 'Instant Noodles',
      dateClaimed: '06/21/2021',
      expiryDate: '10/05/2021',
      daysLeft: 97,
   },
   {
      id: 10,
      donationID: 10,
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      donationName: 'Argentina Corned Beef',
      donorName: 'Amiel Morilla',
      quantity: 7,
      category: 'Canned Goods',
      dateClaimed: '07/01/2021',
      expiryDate: '09/03/2021',
      daysLeft: 62,
   },
   {
      id: 11,
      donationID: 11,
      imgLoc: 'https://cf.shopee.com.my/file/71ee574d1013a3715f71a25244c8715c',
      donationName: 'Lucky Me Chicken',
      donorName: 'Kenneth Dela Cruz',
      quantity: 9,
      category: 'Instant Noodles',
      dateClaimed: '06/20/2021',
      expiryDate: '09/10/2021',
      daysLeft: 50,
   },
   {
      id: 12,
      donationID: 12,
      imgLoc: 'https://cf.shopee.ph/file/b6fe5dbf2a4ff8d77959296a3574d630_tn',
      donationName: 'Sky Flakes',
      donorName: 'Carl Patio',
      quantity: 15,
      category: 'Biscuits & Snacks',
      expiryDate: '09/15/2021',
      dateClaimed: '06/23/2021',
      daysLeft: 84,
   },
   // {
   //    id:10,
   //    donationID:,
   //    imgLoc:,
   //    donationName:,
   //    donorName:,
   //    quantity,
   //    category:,
   //    dateClaimed:,
   //    expiryDate:,
   //    daysLeft:,
   // }
]

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

function StyledChip(props) {
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
            color: 'white',
         }}
      />
   )
}

function StyledTypography(props) {
   const { daysLeft } = props
   let color

   if (daysLeft < 8) {
      color = 'red'
   } else if (daysLeft < 15) {
      color = 'orange'
   } else {
      color = 'green'
   }

   return <Typography style={{ color: color }}>{daysLeft} days left</Typography>
}

function Stocks(props) {
   const { image, label, count, color } = props
   return (
      <Grid item xs={6} sm={4} lg={4} xl={2}>
         <Box
            bgcolor="white"
            borderRadius={10}
            boxShadow={1}
            p={2}
            display="flex"
         >
            <img
               src={image}
               style={{
                  width: '100px',
                  height: '100%',
                  marginRight: '1rem',
                  // backgroundColor: color,
                  padding: '1rem',
                  borderRadius: '10px',
               }}
               alt="donation"
            />
            <Box display="flex" flexDirection="column" flex="1">
               <Typography variant="h6">{label}</Typography>
               <Typography
                  variant="h5"
                  style={{ fontWeight: 'bold', marginTop: '.5rem' }}
               >
                  {count}
               </Typography>
            </Box>
         </Box>
      </Grid>
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
}))
