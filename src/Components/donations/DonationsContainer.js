import React, { useEffect } from 'react'
import {
   Typography,
   Grid,
   Box,
   Card,
   CardHeader,
   CardContent,
   Avatar,
   CardMedia,
   Divider,
   Button,
} from '@material-ui/core'
import DonationItem from './DonationItem'
import MainContainer from '../shared/MainContainer'
import Axios from 'axios'
import { useDonationStore } from '../../store/DonationStore'
// import ScrollTop from '../components/shared/ScrollTop'
import ScrollTop from '../shared/ScrollTop'
import AddIcon from '@material-ui/icons/Add'
import rice from '../../assets/faqs/grain-sack.png'
import vegetable from '../../assets/faqs/harvest.png'
import cannedfood from '../../assets/faqs/canned-food.png'
import snack from '../../assets/faqs/snack.png'
import noodles from '../../assets/faqs/instant-noodles.png'
import softdrinks from '../../assets/faqs/soft-drink.png'
import fruits from '../../assets/faqs/fruits.png'
import egg from '../../assets/faqs/eggs.png'
import bread from '../../assets/faqs/bakery.png'
import others from '../../assets/faqs/ellipsis.png'
import { Link } from 'react-router-dom'

const categories = [
   {
      image: cannedfood,
      label: 'Canned Goods',
      count: 40,
      color: '#E2F2B5',
   },
   {
      image: noodles,
      label: 'Instant Noodles',
      count: 38,
      color: '#E2F2B5',
   },
   {
      image: vegetable,
      label: 'Vegetables',
      count: 31,
      color: '#E2F2B5',
   },
   {
      image: egg,
      label: 'Eggs',
      count: 51,
      color: '#E2F2B5',
   },
   {
      image: rice,
      label: 'Uncooked Rice',
      count: 20,
      color: '#E2F2B5',
   },
   {
      image: bread,
      label: 'Bread & Pastry',
      count: 21,
      color: '#E2F2B5',
   },
   {
      image: fruits,
      label: 'Fruits',
      count: 10,
      color: '#E2F2B5',
   },
   {
      image: snack,
      label: 'Biscuits & Snacks',
      count: 51,
      color: '#E2F2B5',
   },
   {
      image: softdrinks,
      label: 'Beverages',
      count: 20,
      color: '#E2F2B5',
   },
   {
      image: others,
      label: 'Others',
      count: 15,
      color: '#E2F2B5',
   },
]
// returns the container for individual listings that is displayed as a grid
export default function DonationsContainer() {
   const donationsData = useDonationStore((state) => state.donationsData)
   const setDonationsData = useDonationStore((state) => state.setDonationsData)

   // useEffect(() => {
   //    const obj = { userID: localStorage.getItem('token') }
   //    Axios.post('http://localhost:3001/listingItem/get', obj).then(
   //       (response, err) => {
   //          if (err) {
   //             console.log(err)
   //          }
   //          // console.log(response.data)
   //          // console.log(response.distance)
   //          setDonationsData(
   //             response.data.map((data) => (
   //                <DonationItem
   //                   key={data.listingID}
   //                   listingID={data.listingID}
   //                   imgLoc={data.imgLoc}
   //                   donationName={data.donationName}
   //                   distance={data.pickupLoc}
   //                   postTime={data.postTime}
   //                />
   //             ))
   //          )
   //       }
   //    )
   // }, [])

   return (
      <MainContainer>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Box display="flex" justifyContent="space-between">
                  <Box>
                     <Typography variant="h5" style={{ fontWeight: '600' }}>
                        Maginhawa Community Pantry Current Inventory Count
                     </Typography>
                  </Box>
                  <Button
                     color="primary"
                     variant="contained"
                     startIcon={<AddIcon />}
                     component={Link}
                     to="/postdonation"
                  >
                     Post a donation
                  </Button>
               </Box>
               <Typography variant="body2">
                  * The stocks are counted as per pieces except for rice which
                  is counted as per serving of 90g
               </Typography>
            </Grid>

            {categories.map((category) => (
               <Stocks
                  key={category.label}
                  image={category.image}
                  label={category.label}
                  count={category.count}
                  color={category.color}
               />
            ))}
            <Grid item xs={12}>
               <Box my={2}>
                  <Divider />
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  Recent Donations from Donors
               </Typography>
            </Grid>
            {donorData.map((donor) => (
               <RecentDonor
                  key={donor.donorName}
                  donorName={donor.donorName}
                  avatar={donor.avatar}
                  imgLoc={donor.imgLoc}
                  quantity={donor.quantity}
                  recipient={donor.recipient}
               />
            ))}
         </Grid>
         <ScrollTop />
      </MainContainer>
   )
}

function Stocks(props) {
   const { image, label, count, color } = props
   return (
      <Grid item xs={6} sm={4} lg={3} xl={2}>
         <Box
            bgcolor="white"
            borderRadius={10}
            boxShadow={1}
            p={2}
            display="flex"
         >
            <img
               src={image}
               style={{
                  width: '100px',
                  height: '100%',
                  marginRight: '1rem',
                  // backgroundColor: color,
                  padding: '1rem',
                  borderRadius: '10px',
               }}
               alt="donation"
            />
            <Box display="flex" flexDirection="column" flex="1">
               <Typography variant="h6">{label}</Typography>
               <Typography
                  variant="h4"
                  style={{ fontWeight: 'bold', marginTop: '.5rem' }}
               >
                  {count}
               </Typography>
            </Box>
         </Box>
      </Grid>
   )
}

function RecentDonor(props) {
   const { donorName, avatar, imgLoc, quantity, recipient } = props
   return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
         <Card>
            <CardHeader
               avatar={<Avatar src={avatar} />}
               title={donorName}
               titleTypographyProps={{ variant: 'body2' }}
               subheaderTypographyProps={{ variant: 'caption' }}
               subheader={`donated ${quantity} pieces to ${recipient}`}
            />

            <CardMedia
               style={{
                  backgroundSize: 'cover',
                  objectFit: 'contain',
                  height: '150px',
                  // paddingTop: '56.25%', // 16:9
               }}
               image={imgLoc}
               title="donation"
            />
         </Card>
      </Grid>
   )
}

const donorData = [
   {
      avatar:
         'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      donorName: 'Johnny G.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235',
      quantity: 15,
      recipient: 'Bantay Bata',
   },
   {
      avatar: 'http://i.imgur.com/vqESNGp.jpg',
      donorName: 'Lee W.',
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      quantity: 20,
      recipient: 'Barangay 143',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU',
      donorName: 'Sidney C.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368',
      quantity: 20,
      recipient: 'Balic-Balic Residents',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU',
      donorName: 'Felicia P.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399',
      quantity: 10,
      recipient: 'Binondo Residents',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1lcgfNqNDEWh8LDCKaXIraxgEE7XihuhH4IR2q0AE92JoF0_-z8qihjZ5Z5wFkX96zI&usqp=CAU',
      donorName: 'Pat L.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU',
      quantity: 8,
      recipient: 'Barangay 287',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs_iIewEiaZ3tXb6n6VgaUIONS0B0HjwsqcvA3-EnnaNm0BwX216u2dZl2QTHnP7VOIU&usqp=CAU',
      donorName: 'Elise P.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      quantity: 13,
   },
   {
      avatar: 'http://i.imgur.com/RP1Z4WT.jpg',
      donorName: 'Harvey M.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      quantity: 13,
      recipient: 'Barangay 659-A',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU',
      donorName: 'Aiken B.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753',
      quantity: 5,
      recipient: 'Barangay 707',
   },
   {
      avatar:
         'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      donorName: 'Johnny G.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235',
      quantity: 15,
   },
   {
      avatar: 'http://i.imgur.com/vqESNGp.jpg',
      donorName: 'Lee W.',
      imgLoc: 'https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47',
      quantity: 20,
      recipient: 'Barangay 664-A',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU',
      donorName: 'Sidney C.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368',
      quantity: 20,
      recipient: ' Barangay 451',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU',
      donorName: 'Felicia P.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399',
      quantity: 10,
      recipient: 'Barangay 161',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1lcgfNqNDEWh8LDCKaXIraxgEE7XihuhH4IR2q0AE92JoF0_-z8qihjZ5Z5wFkX96zI&usqp=CAU',
      donorName: 'Pat L.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU',
      quantity: 8,
      recipient: 'Bantay Bata',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs_iIewEiaZ3tXb6n6VgaUIONS0B0HjwsqcvA3-EnnaNm0BwX216u2dZl2QTHnP7VOIU&usqp=CAU',
      donorName: 'Elise P.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      quantity: 13,
      recipient: 'Holy Trinity Parish',
   },
   {
      avatar: 'http://i.imgur.com/RP1Z4WT.jpg',
      donorName: 'Harvey M.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      quantity: 13,
      recipient: 'Barangay 713',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU',
      donorName: 'Aiken B.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753',
      quantity: 5,
      recipient: 'Barangay 216-A',
   },
   {
      avatar: 'http://i.imgur.com/RP1Z4WT.jpg',
      donorName: 'Harvey M.',
      imgLoc:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU',
      quantity: 13,
      recipient: 'Barangay 416',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU',
      donorName: 'Aiken B.',
      imgLoc:
         'https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753',
      quantity: 5,
      recipient: 'Bantay Bata',
   },
]
