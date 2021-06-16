import React, { useState } from 'react'
import {
   Typography,
   makeStyles,
   Divider,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Avatar,
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LeftDrawer from '../shared/LeftDrawer'
import DialogDrawer from '../shared/DialogDrawer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ReportIcon from '@material-ui/icons/Report'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
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
   // {
   //    icon: <ReportIcon />,
   //    label: 'Reported Donations',
   //    link: '/reporteddonations',
   // },
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Users',
      link: '/users',
   },
]

export default function PanelDrawer() {
   const classes = useStyles()

   return (
      <>
         <LeftDrawer>
            <Title />
            <AdminAvatar />
            <Divider className={classes.divider_margin} />
            <Panels />
         </LeftDrawer>
         <DialogDrawer buttonName="Tabs">
            <Title />
         </DialogDrawer>
      </>
   )
}

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
            Admin Panel
         </Typography>
      </div>
   )
}

function AdminAvatar() {
   return (
      <div
         style={{
            padding: '1rem 0',

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
   )
}

function Panels() {
   let { url } = useRouteMatch()

   return (
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
   )
}
