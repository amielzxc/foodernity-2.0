import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import Reports from './Reports'
import { Avatar } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Monitor from './Monitor'
import Users from './Users'
import ListAltIcon from '@material-ui/icons/ListAlt'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import ReportIcon from '@material-ui/icons/Report'
import ReportedDonations from './ReportedDonations'

const drawerWidth = 260

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      height: '100%',
   },
   drawer: {
      [theme.breakpoints.up('md')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   },

   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))

const NavItems = [
   {
      icon: <DashboardIcon />,
      label: 'Reports',
      link: '',
   },
   {
      icon: <DesktopMacIcon />,
      label: 'Monitor Donations',
      link: '/monitor',
   },
   {
      icon: <ReportIcon />,
      label: 'Reported Donations',
      link: '/reporteddonations',
   },
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Users',
      link: '/users',
   },
   {
      icon: <ExitToAppIcon />,
      label: 'Logout',
      link: '',
   },
]

const NavItemsTwo = [
   {
      icon: <ListAltIcon />,
      label: 'Listings',
   },
   {
      icon: <LiveHelpIcon />,
      label: 'FAQs',
   },
]

function Admin(props) {
   const { window } = props
   const classes = useStyles()
   const theme = useTheme()
   const [mobileOpen, setMobileOpen] = useState(false)
   let { url } = useRouteMatch()
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

   const drawer = (
      <div>
         <div className={classes.toolbar} />
         <div
            style={{
               padding: '1rem 0',
               //backgroundColor: 'red',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Avatar
               src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"
               style={{ width: '5rem', height: '5rem' }}
            />
            <Typography color="textPrimary" variant="h6">
               Fhillip Bagsic
            </Typography>
            <Typography color="textSecondary" variant="body2">
               Super Admin
            </Typography>
         </div>
         <Divider />
         <List>
            {NavItems.map((item) => (
               <ListItem
                  button
                  key={item.label}
                  component={Link}
                  to={`${url}${item.link}`}
               >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {NavItemsTwo.map((item) => (
               <ListItem button key={item.label}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
               </ListItem>
            ))}
         </List>
      </div>
   )

   const container =
      window !== undefined ? () => window().document.body : undefined
   let { path } = useRouteMatch()

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" noWrap>
                  Foodernity | Admin
               </Typography>
            </Toolbar>
         </AppBar>
         <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
               <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                     paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                     keepMounted: true,
                  }}
               >
                  {drawer}
               </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
               <Drawer
                  classes={{
                     paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
               >
                  {drawer}
               </Drawer>
            </Hidden>
         </nav>
         <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
               <Route path="/admin" exact>
                  <Reports />
               </Route>
               <Route path={`${path}/monitor`}>
                  <Monitor />
               </Route>
               <Route path={`${path}/reporteddonations`}>
                  <ReportedDonations />
               </Route>
               <Route path={`${path}/users`}>
                  <Users />
               </Route>
            </Switch>
         </main>
      </div>
   )
}

export default Admin
