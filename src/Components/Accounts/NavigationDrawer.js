import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import DialogDrawer from '../Common/DialogDrawer'
import LeftDrawer from '../Common/LeftDrawer'
import ReceiptIcon from '@material-ui/icons/Receipt'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded'
import { Link, useRouteMatch } from 'react-router-dom'
import create from 'zustand'

const useCurrentStore = create((set) => ({
   current: 'My Donations',
   setCurrent: (clicked) => set((state) => (state.current = clicked)),
}))

const iconList1 = [
   {
      label: 'My Donations',
      icon: <ReceiptIcon />,
      color: '#66BB6A',
      link: '/mydonations',
   },
   {
      label: 'Requested Donations',
      icon: <ReceiptIcon />,
      color: '#66BB6A',
      link: '/requesteddonations',
   },
]
const iconList2 = [
   {
      label: 'My Profile',
      icon: <AccountBoxRoundedIcon />,
      color: '#2196F3',
      link: '/myprofile',
   },
   {
      label: 'Edit Profile',
      icon: <EditRoundedIcon />,
      color: '#2196F3',
      link: '/editprofile',
   },
]

const iconList3 = [
   {
      label: 'Data and Privacy',
      icon: <SecurityRoundedIcon />,
      color: '#78909C',
      link: '/dataprivacy',
   },
]

const useStyles = makeStyles((theme) => ({
   title: {
      margin: theme.spacing(0.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title__responsive: {
      margin: theme.spacing(0.5, 0),
   },
   subtitle: {
      margin: theme.spacing(1.5, 0),
   },
   container__drawer_responsive: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
   },
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   container__tab: {
      width: 'auto',
      cursor: 'pointer',
      padding: '7px 7px 7px 10px',
      textDecoration: 'none',
   },
   hover: {
      '&:hover': {
         backgroundColor: '#EDEDED',
         borderRadius: '5px',
      },
   },
}))

export function NavigationDrawer() {
   const classes = useStyles()
   return (
      <LeftDrawer>
         <Title />
         <Divider className={classes.divider_margin} />
         <Subtitle title="Transactions" color="#66BB6A" />
         {iconList1.map((icon) => (
            <Tab
               key={icon.label}
               label={icon.label}
               icon={icon.icon}
               color={icon.color}
               link={icon.link}
            />
         ))}

         <Subtitle title="Profile" color="#2196F3" />
         {iconList2.map((icon) => (
            <Tab
               key={icon.label}
               label={icon.label}
               icon={icon.icon}
               color={icon.color}
               link={icon.link}
            />
         ))}

         <Subtitle title="Settings" color="#78909C" />
         {iconList3.map((icon) => (
            <Tab
               key={icon.label}
               label={icon.label}
               icon={icon.icon}
               color={icon.color}
               link={icon.link}
            />
         ))}
      </LeftDrawer>
   )
}

export function NavigationDrawerResponsive() {
   const classes = useStyles()

   return (
      <div className={classes.container__drawer_responsive}>
         <TitleResponsive />
         <DialogDrawer buttonName="MENU" dialogTitle="My Account">
            <Subtitle title="Transactions" color="#66BB6A" />
            {iconList1.map((icon) => (
               <Tab
                  key={icon.label}
                  label={icon.label}
                  icon={icon.icon}
                  color={icon.color}
                  link={icon.link}
               />
            ))}

            <Subtitle title="Profile" color="#2196F3" />
            {iconList2.map((icon) => (
               <Tab
                  key={icon.label}
                  label={icon.label}
                  icon={icon.icon}
                  color={icon.color}
                  link={icon.link}
               />
            ))}

            <Subtitle title="Settings" color="#78909C" />
            {iconList3.map((icon) => (
               <Tab
                  key={icon.label}
                  label={icon.label}
                  icon={icon.icon}
                  color={icon.color}
                  link={icon.link}
               />
            ))}
         </DialogDrawer>
      </div>
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
            Your Account
         </Typography>
      </div>
   )
}

// returns the title of the left drawer
function TitleResponsive() {
   const title = 'Your Account'
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.title__responsive} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
         >
            {title}
         </Typography>
      </div>
   )
}
// returns the title of the left drawer
function Subtitle(props) {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.subtitle} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
            style={{ color: props.color }}
         >
            {props.title}
         </Typography>
      </div>
   )
}

function Tab(props) {
   let { url } = useRouteMatch()
   const classes = useStyles()
   const { label, icon, color, link } = props
   const current = useCurrentStore((state) => state.current)
   const setCurrent = useCurrentStore((state) => state.setCurrent)

   const active = label === current
   const handleSetCurrent = (clicked) => {
      setCurrent(clicked)
   }

   return (
      <Grid
         className={`${classes.container__tab} ${!active && classes.hover}`}
         container
         direction="row"
         component={Link}
         to={`${url}${link}`}
         onClick={() => handleSetCurrent(label)}
         alignItems="center"
      >
         {active && (
            <span style={{ color: color, marginRight: '5px' }}>{icon}</span>
         )}

         <Typography
            style={{
               color: active ? color : 'black',
               fontWeight: '600',
            }}
            variant={active ? 'h6' : 'body1'}
         >
            {label}
         </Typography>
      </Grid>
   )
}
