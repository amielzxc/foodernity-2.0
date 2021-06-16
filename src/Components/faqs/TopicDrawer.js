import DialogDrawer from '../shared/DialogDrawer'
import LeftDrawer from '../shared/LeftDrawer'
import {
   Typography,
   IconButton,
   Button,
   ButtonGroup,
   Divider,
   FormControlLabel,
   Checkbox,
   Slider,
   makeStyles,
   ListItem,
   ListItemText,
   ListItemIcon,
   List,
} from '@material-ui/core'

import { Link, useRouteMatch } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      margin: theme.spacing(0.5, 0),
   },
}))

const FAQTopics = [
   {
      label: 'How to post a donation?',
      link: '',
   },
   {
      label: 'How to receive a donation?',
      link: '/receiving-a-donation',
   },
   {
      label: 'How to request a donation?',
      link: '/requesting-a-donation',
   },
   {
      label: 'What foods can I donate?',
      link: '/food-donation',
   },
]

const GuidelinesTopics = [
   {
      label: 'Guidelines for Posting a Donation',
      link: '/posting-guidelines',
   },
   {
      label: 'Guidelines for Receiving a Donation',
      link: '/receiving-guidelines',
   },
   {
      label: 'Guidelines for Requesting a Donation',
      link: '/requesting-guidelines',
   },
]

export default function TopicDrawer() {
   const classes = useStyles()
   return (
      <>
         <LeftDrawer>
            <Title title="Frequently Asked Questions" />
            <FAQTopic />
            <Divider className={classes.divider_margin} />
            <Title title="Guidelines" />
            <GuidelinesTopic />
         </LeftDrawer>
         <DialogDrawer buttonName="TOPICS">
            <Title />
         </DialogDrawer>
      </>
   )
}

function Title(props) {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.title} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
         >
            {props.title}
         </Typography>
      </div>
   )
}

function FAQTopic() {
   let { url } = useRouteMatch()

   return (
      <List>
         {FAQTopics.map((item) => (
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

function GuidelinesTopic() {
   let { url } = useRouteMatch()

   return (
      <List>
         {GuidelinesTopics.map((item) => (
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
