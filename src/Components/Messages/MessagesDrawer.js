import LeftDrawer from '../Common/LeftDrawer'
import {
   Avatar,
   Divider,
   Typography,
   makeStyles,
   ButtonGroup,
   Button,
} from '@material-ui/core'
import DialogDrawer from '../Common/DialogDrawer'

const useStyles = makeStyles((theme) => ({
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      fontWeight: 'bold',
      marginTop: theme.spacing(0.6),
   },
   container__messageItem: {
      display: 'flex',
      margin: theme.spacing(1, 0),
      alignItems: 'center',
   },
   avatar__message: {
      width: '50px',
      height: '50px',
   },
   container__messageNameDesc: {
      display: 'flex',
      flexDirection: 'column',
   },
}))
export function MessagesDrawer() {
   const image = [
      'https://i.pinimg.com/originals/3a/01/1d/3a011d76e93823db300009c39a039af4.jpg',
      'https://cf.shopee.com.my/file/090a18a75c04ad1d4e0f63421a5c8651',
      'https://media.karousell.com/media/photos/products/2020/8/7/oishi_japanese_rice_1_sack_25k_1596774674_9992bf29_progressive.jpg',
      'https://pbs.twimg.com/media/EVjO5EMUYAAfKYM.jpg',
   ]
   const classes = useStyles()
   return (
      <LeftDrawer>
         <Title />
         <Divider className={classes.divider_margin} />
         <DonationButtons />
         <MessageItem image={image[0]} name="Pancit Canton Noodles" />
         <MessageItem image={image[1]} name="Argetina Canned Goods" />
         <MessageItem image={image[2]} name="1 sack rice" />
         <MessageItem image={image[3]} name="Pancit Canton" />
      </LeftDrawer>
   )
}
export function MessagesDrawerResponsive() {
   const image = [
      'https://i.pinimg.com/originals/3a/01/1d/3a011d76e93823db300009c39a039af4.jpg',
      'https://cf.shopee.com.my/file/090a18a75c04ad1d4e0f63421a5c8651',
      'https://media.karousell.com/media/photos/products/2020/8/7/oishi_japanese_rice_1_sack_25k_1596774674_9992bf29_progressive.jpg',
      'https://pbs.twimg.com/media/EVjO5EMUYAAfKYM.jpg',
   ]

   return (
      <DialogDrawer buttonName="MESSAGES" dialogTitle="Messages">
         <MessageItem image={image[0]} name="Pancit Canton Noodles" />
         <MessageItem image={image[1]} name="Argetina Canned Goods" />
         <MessageItem image={image[2]} name="1 sack rice" />
         <MessageItem image={image[3]} name="Pancit Canton" />
      </DialogDrawer>
   )
}
// returns the title of the left drawer
function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
         >
            Messages
         </Typography>
      </div>
   )
}

function DonationButtons() {
   return (
      <ButtonGroup>
         <Button variant="outlined" color="primary" disableElevation fullWidth>
            My Donations
         </Button>
         <Button variant="contained" color="primary" disableElevation fullWidth>
            My Requested
         </Button>
      </ButtonGroup>
   )
}
function MessageItem(props) {
   const { image, name } = props
   const classes = useStyles()
   return (
      <div className={classes.container__messageItem}>
         <Avatar className={classes.avatar__message} src={image} />
         <div style={{ width: '10px' }} />
         <div className={classes.container__messageNameDesc}>
            <Typography variant="body1" className={classes.text_bold}>
               {name}
            </Typography>
            <Typography variant="body2">New Message</Typography>
         </div>
      </div>
   )
}
