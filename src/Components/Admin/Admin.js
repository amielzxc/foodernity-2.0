import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded'
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded'
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded'
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded'
import ReportRoundedIcon from '@material-ui/icons/ReportRounded'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import CustomerListResults from './Users'
import AddIcon from '@material-ui/icons/Add'
import { users } from '../Common/MockData'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
   container__addListing: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
   },
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerContainer: {
      overflow: 'auto',
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))

export default function Admin() {
   const classes = useStyles()

   const tabsList = [
      {
         icon: <DashboardRoundedIcon />,
         text: 'Dashboard',
      },
      {
         icon: <DesktopMacRoundedIcon />,
         text: 'Monitor Donations',
      },
      {
         icon: <SupervisedUserCircleRoundedIcon />,
         text: 'Registered Users',
      },
      {
         icon: <AnnouncementRoundedIcon />,
         text: 'Announcements',
      },
      {
         icon: <ReportRoundedIcon />,
         text: 'Reports',
      },
   ]

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
               <Typography variant="h6" noWrap>
                  Foodernity | Admin
               </Typography>
            </Toolbar>
         </AppBar>
         <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            <Toolbar />
            <div className={classes.drawerContainer}>
               <List>
                  {tabsList.map((tab) => (
                     <ListItem button key={tab.text}>
                        <ListItemIcon>{tab.icon}</ListItemIcon>
                        <ListItemText
                           disableTypography
                           primary={
                              <Typography variant="body2">
                                 {tab.text}
                              </Typography>
                           }
                        />
                     </ListItem>
                  ))}
                  <Divider />
                  <ListItem>
                     <ListItemIcon>
                        <ExitToAppIcon />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           <Typography variant="body2">Logout</Typography>
                        }
                     />
                  </ListItem>
               </List>
            </div>
         </Drawer>
         <main className={classes.content}>
            <Toolbar />
            <div className={classes.container__addListing}>
               <Typography variant="h6" component="h3">
                  Registered Users
               </Typography>
               <div
                  style={{
                     display: 'flex',
                     width: '30%',
                     //backgroundColor: "red",
                     justifyContent: 'space-between',
                  }}
               >
                  <Button color="primary">Update User</Button>
                  <Button
                     startIcon={<AddIcon />}
                     variant="contained"
                     color="primary"
                     disableElevation
                  >
                     Add Partner Users
                  </Button>
               </div>
            </div>
            <CustomerListResults customers={users} />
         </main>
      </div>
   )
}
