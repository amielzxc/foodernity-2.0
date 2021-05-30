import React, { useState } from 'react'
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Avatar,
   IconButton,
   Menu,
   MenuItem,
   ListItemIcon,
   ListItemText,
   useTheme,
   useMediaQuery,
   makeStyles,
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

import MenuIcon from '@material-ui/icons/Menu'
import { Drafts } from '@material-ui/icons'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
   navbar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
   },
   heading: {
      fontFamily: 'Work Sans',
      color: '#A6CB3C',
   },
   heading__container: {
      flex: '1',
      color: 'black',
   },
   heading__container_wrap: {
      display: 'inline-block',
   },
   heading__link: {
      textDecoration: 'none',
   },
   navbar__actions: {
      width: '25rem',
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: theme.spacing(2),
   },

   avatar__color_orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
   },
}))
function StyledAppBar() {
   const classes = useStyles()
   const theme = useTheme()
   const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <AppBar elevation={1} position="fixed" className={classes.navbar}>
         <Toolbar>
            {/* This is the page title: 'Foodernity' */}
            <div className={classes.heading__container}>
               <div className={classes.heading__container_wrap}>
                  <Link to="/listings" className={classes.heading__link}>
                     <Typography
                        variant="h4"
                        component="h1"
                        className={classes.heading}
                     >
                        Foodernity
                     </Typography>
                  </Link>
               </div>
            </div>
            {/* Displays whether the menu button or the full page buttons depending on the page size */}
            {isMatch ? <MenuButton /> : <NavigationButtons />}

            <IconButton component={Link} to="/account">
               <Avatar className={classes.avatar__color_orange}>FB</Avatar>
            </IconButton>

            {/* Avatar Button */}
            {/* <AvatarButton className={classes.avatar__color_orange} /> */}
         </Toolbar>
      </AppBar>
   )
}
// returns the navigation buttons of the website
function NavigationButtons() {
   const classes = useStyles()
   return (
      <div className={classes.navbar__actions}>
         <Button component={Link} to="/listings">
            Listings
         </Button>
         <Button component={Link} to="messages">
            Messages
         </Button>
         <Button component={Link} to="faqs">
            FAQs &amp; Guidelines
         </Button>
      </div>
   )
}
// returns the avatar of the user
// function AvatarButton(props) {
//    const [anchorEl, setAnchorEl] = useState(null)
//    function handleClick(event) {
//       setAnchorEl(event.currentTarget)
//    }
//    function handleClose() {
//       setAnchorEl(null)
//    }

//    return (
//       <>
//          <IconButton onClick={handleClick}>
//             <Avatar className={props.className}>FB</Avatar>
//          </IconButton>
//          <Menu
//             id="avatarButton"
//             anchorEl={anchorEl}
//             keepMounted
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//          >
//             <MenuItem onClick={handleClose}>Transactions</MenuItem>
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>Settings</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//          </Menu>
//       </>
//    )
// }
// returns the menu button when the page reaches the responsive layout
function MenuButton() {
   const [anchorEl, setAnchorEl] = useState(null)

   function handleClick(event) {
      setAnchorEl(event.currentTarget)
   }
   function handleClose() {
      setAnchorEl(null)
   }
   return (
      <>
         <IconButton onClick={handleClick}>
            <MenuIcon />
         </IconButton>
         <Menu
            id="menuButton"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem onClick={handleClose}>
               <ListItemIcon>
                  <Drafts />
               </ListItemIcon>
               <ListItemText>Listings</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>Messages</MenuItem>
            <MenuItem onClick={handleClose}>FAQs</MenuItem>
         </Menu>
      </>
   )
}
export default StyledAppBar
