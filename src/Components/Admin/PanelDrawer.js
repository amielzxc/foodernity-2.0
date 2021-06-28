import React from 'react'
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
import { Link, useRouteMatch } from 'react-router-dom'

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
   heading: {
      textAlign: 'center',
      fontFamily: 'Work Sans',
      color: '#A6CB3C',
   },
}))

const NavItems = [
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Donations',
      link: '/donations',
   },
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Call for Donations',
      link: '/callfordonations',
   },
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Inventory',
      link: '/inventory',
   },
   {
      icon: <SupervisedUserCircleIcon />,
      label: 'Records',
      link: '/records',
   },
   // {
   //    icon: <DashboardIcon />,
   //    label: 'Reports',
   //    link: '',
   // },
   // {
   //    icon: <DesktopMacIcon />,
   //    label: 'Monitor Donations',
   //    link: '/monitor',
   // },

   // {
   //    icon: <SupervisedUserCircleIcon />,
   //    label: 'Users',
   //    link: '/users',
   // },
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
         <Typography variant="h4" component="h1" className={classes.heading}>
            Foodernity
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
            John Doe
         </Typography>
         <Typography color="textSecondary" variant="body2">
            Staff
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
