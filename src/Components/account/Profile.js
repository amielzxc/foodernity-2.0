import {
   makeStyles,
   Typography,
   Grid,
   Card,
   CardContent,
   Avatar,
   Divider,
} from '@material-ui/core'
import { Icon } from '@iconify/react'
import bxsDonateHeart from '@iconify-icons/bx/bxs-donate-heart'
import {
   myDonationsPerCategoryData,
   myMostClaimedCategoryData,
   myMostSpoiledCategoryData,
} from '../../__mock__/ProfileData'
import Piechart from '../shared/Piechart'

const largeCards = [
   {
      title: 'Donations Posted',
      count: '18',
      color: '#FF7043',
      icon: <Icon icon={bxsDonateHeart} />,
   },
   {
      title: 'Donations Received',
      count: '6',
      color: '#66BB6A',
      icon: <Icon icon={bxsDonateHeart} />,
   },
   {
      title: 'Donations Requested',
      count: '5',
      color: '#E35141',
      icon: <Icon icon={bxsDonateHeart} />,
   },
]

export default function Profile() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <div className={classes.background} />
         <UserInformation />
         <Grid container spacing={3}>
            {largeCards.map((card) => (
               <Grid item xs={12} sm={4} xl={3}>
                  <LargeCard
                     title={card.title}
                     count={card.count}
                     color={card.color}
                     icon={card.icon}
                  />
               </Grid>
            ))}
            <Grid item xs={12}>
               <Divider />
            </Grid>
            <Grid item xs={12} md={4}>
               <TotalDonationsPerCategory />
            </Grid>
            <Grid item xs={12} md={4}>
               <MostClaimedCategory />
            </Grid>
            <Grid item xs={12} md={4}>
               <MostSpoiledCategory />
            </Grid>
         </Grid>
      </div>
   )
}

function UserInformation() {
   const classes = useStyles()
   const dateOfReg = 'March 16, 2020'
   const email = 'fhillipbagsic@gmail.com'
   const profilePicture =
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg'

   return (
      <>
         <img
            src={profilePicture}
            alt="profile"
            className={classes.image__profile}
         />
         <div className={classes.text__profile_description}>
            <Typography variant="h5" className={classes.text_bold}>
               Fhillip Bagsic
            </Typography>
            <Typography variant="body1" className={classes.text_light}>
               Member since {dateOfReg}
            </Typography>
            <Typography variant="body1" className={classes.text_light}>
               {email}
            </Typography>
         </div>
      </>
   )
}

function LargeCard(props) {
   const { title, count, color, icon } = props
   const classes = useStyles()

   return (
      <Card>
         <CardContent>
            <Grid
               container
               spacing={3}
               component="div"
               display="flex"
               justify="space-between"
            >
               <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                     {title}
                  </Typography>
                  <Typography color="textPrimary" variant="h5">
                     {count}
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_large}
                     style={{
                        backgroundColor: color,
                     }}
                  >
                     {icon}
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function TotalDonationsPerCategory() {
   return (
      <Piechart
         data={myDonationsPerCategoryData}
         chartLabel="My donations per category"
      />
   )
}

function MostClaimedCategory() {
   return (
      <Piechart
         data={myMostClaimedCategoryData}
         chartLabel="Most claimed category"
      />
   )
}
function MostSpoiledCategory() {
   return (
      <Piechart
         data={myMostSpoiledCategoryData}
         chartLabel="Most spoiled category"
      />
   )
}

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
   },
   background: {
      width: '100%',
      height: '140px',
      backgroundImage: 'linear-gradient(to right, #2196F3 , #66BB6A)',
      borderRadius: '5px',
   },
   image__profile: {
      width: '150px',
      height: '150px',
      borderRadius: '75px',
      alignSelf: 'center',
      marginTop: '-5rem',
      marginBottom: '1rem',
      border: '2px solid white',
      //boxShadow: '0px 0px 5px 5px #ECECEC',
   },
   text__profile_description: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
   },
   container__statistics: {
      borderRadius: '5px',
      display: 'flex',
      padding: '15px 15px 0 15px',
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
   },
   container__statistics_item: {
      borderRadius: '5px',
      display: 'flex',
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      marginBottom: '15px',
      padding: '5px',
      width: '100%',
   },
   icon__rating: {
      color: '#F6BE4F',
      fontSize: '60px',
   },
   icon__donations_total: {
      fontSize: '45px',
      color: '#2196F3',

      margin: theme.spacing(1, 1),
   },
   icon__donations_received: {
      color: '#66BB6A',
      fontSize: '45px',
      margin: theme.spacing(1, 1),
   },
   text__grey: {
      color: '#5F5F5F',
   },
   text_bold: {
      fontWeight: 'bold',
      letterSpacing: '.5px',
   },
   text_light: {
      fontWeight: '300',
      letterSpacing: '.3px',
   },
}))
