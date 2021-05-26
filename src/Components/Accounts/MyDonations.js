import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
function MyDonations() {
   return (
      <Grid container>
         <Grid item sm={12} md={9}>
            <DonationTabs />
         </Grid>
      </Grid>
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

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
}

const useStyles = makeStyles((theme) => ({
   root: {
      width: 'auto',
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
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
      [theme.breakpoints.down('xs')]: {
         marginTop: '.5rem',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '25ch',
         '&:focus': {
            width: '30ch',
         },
      },
   },
}))

function DonationTabs() {
   const classes = useStyles()
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.root}>
         <Box boxShadow={1} borderRadius={5}>
            <div className={classes.container__search}>
               <Typography variant="h6" className={classes.text_bold}>
                  My Donations
               </Typography>
               <SearchField />
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
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
               >
                  <Tab label="All" />
                  <Tab label="Listed" />
                  <Tab label="To Approve" />
                  <Tab label="Active" />
                  <Tab label="Completed" />
                  <Tab label="Unlisted" />
               </Tabs>
            </AppBar>
         </Box>
         <TabPanel value={value} index={0} component="div">
            <DonationItem />
            <DonationItem />
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
         <TabPanel value={value} index={3}>
            Item Four
         </TabPanel>
         <TabPanel value={value} index={4}>
            Item Five
         </TabPanel>
         <TabPanel value={value} index={5}>
            Item Six
         </TabPanel>
      </div>
   )
}

function SearchField() {
   const classes = useStyles()
   return (
      <div className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder="Search your listings"
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
         />
      </div>
   )
}

function DonationItem() {
   const imgsrc =
      'https://primer.com.ph/tips-guide/wp-content/uploads/sites/5/2015/12/canned-goods.jpg'
   return (
      <Box boxShadow={1} borderRadius={5}>
         <div
            style={{
               width: '100%',
               backgroundColor: 'white',
               display: 'flex',
               margin: '10px  0',
               padding: '15px',
               borderRadius: '5px',
            }}
         >
            <img
               style={{
                  height: 'auto',
                  width: '100px',
                  borderRadius: '5px',
                  marginRight: '15px',
               }}
               src={imgsrc}
               alt="donation"
            />
            <div
               style={{
                  //backgroundColor: 'red',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
               }}
            ></div>
         </div>
      </Box>
   )
}
export default MyDonations
