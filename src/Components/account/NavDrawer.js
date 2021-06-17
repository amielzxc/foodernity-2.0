import {
   Divider,
   makeStyles,
   Typography,
   ListItem,
   ListItemText,
   List,
} from '@material-ui/core'
import DialogDrawer from '../shared/DialogDrawer'
import LeftDrawer from '../shared/LeftDrawer'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded'
import { Link, useRouteMatch } from 'react-router-dom'

const DonationItems = [
   {
      label: 'Posted Donations',
      link: '',
   },
   {
      label: 'Received Donations',
      link: '/receiveddonations',
   },
   {
      label: 'Requested Donations',
      link: '/requesteddonations',
   },
]
const ProfileItems = [
   {
      label: 'My Profile',
      link: '/myprofile',
   },
   {
      label: 'Edit Profile',
      link: '/editprofile',
   },
]

export default function NavDrawer() {
   const classes = useStyles()

   return (
      <>
         <LeftDrawer>
            <Title />
            <Divider className={classes.divider_margin} />
            <Subtitle
               title="Donations"
               icon={<AccountBoxRoundedIcon style={{ color: '#66BB6A' }} />}
               color="#66BB6A"
            />
            <DonationTabs />
            <Subtitle
               title="Profile"
               icon={<AccountBoxRoundedIcon style={{ color: '#2196F3' }} />}
               color="#2196F3"
            />
            <ProfileTabs />
         </LeftDrawer>
         <DialogDrawer buttonName="Account">
            <Title />
            <Divider className={classes.divider_margin} />
            <Subtitle
               title="Donations"
               icon={<AccountBoxRoundedIcon style={{ color: '#66BB6A' }} />}
               color="#66BB6A"
            />
            <DonationTabs />
            <Subtitle
               title="Profile"
               icon={<AccountBoxRoundedIcon style={{ color: '#2196F3' }} />}
               color="#2196F3"
            />
            <ProfileTabs />
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
            My Account
         </Typography>
      </div>
   )
}
function Subtitle(props) {
   const { title, icon, color } = props
   const classes = useStyles()
   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: 'yellow',
         }}
      >
         {icon}
         <Typography
            className={`${classes.subtitle} ${classes.text_bold}`}
            gutterBottom
            variant="h6"
            // component="h2"
            style={{
               color: color,
               // backgroundColor: 'red',
               marginTop: '7px',
               marginLeft: '.5rem',
            }}
         >
            {title}
         </Typography>
      </div>
   )
}

function DonationTabs(props) {
   let { url } = useRouteMatch()

   return (
      <List>
         {DonationItems.map((item) => (
            <ListItem
               button
               key={item.label}
               component={Link}
               to={`${url}${item.link}`}
            >
               <ListItemText primary={item.label} />
            </ListItem>
         ))}
      </List>
   )
}

function ProfileTabs(props) {
   let { url } = useRouteMatch()

   return (
      <List>
         {ProfileItems.map((item) => (
            <ListItem
               button
               key={item.label}
               component={Link}
               to={`${url}${item.link}`}
            >
               <ListItemText primary={item.label} />
            </ListItem>
         ))}
      </List>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      margin: theme.spacing(0.5, 0),
   },
   divider_margin: {
      margin: theme.spacing(1.5, 0),
   },
   container__tab: {
      width: 'auto',
      cursor: 'pointer',
      padding: '10px 10px 10px 10px',
      textDecoration: 'none',
   },
   hover: {
      '&:hover': {
         backgroundColor: '#F5F5F5',
         borderRadius: '5px',
      },
   },
}))
