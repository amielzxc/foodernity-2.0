import { Grid } from '@material-ui/core'
import MainContainer from '../shared/MainContainer'
import RequestItem from './RequestItem'

export default function RequestContainer() {
   return (
      <MainContainer>
         <Grid container spacing={2}>
            {requestData.map((data) => (
               <RequestItem
                  title={data.title}
                  description={data.description}
                  pubmat={data.pubmat}
                  date={data.date}
                  categoryNeeded={data.categoryNeeded}
               />
            ))}
         </Grid>
      </MainContainer>
   )
}

const requestData = [
   {
      title: 'Call for donations for the victims of Typhoon Rolly',
      description:
         'In support of the disaster relief efforts of the Ateneo Graduate School of Business',
      pubmat: 'http://gsb.ateneo.edu/wp-content/uploads/2020/11/Rolly-1.jpg',
      quantityReceived: 123,
      status: 'Fulfilled',
      date: 'June 22, 2021',
      categoryNeeded: 'Instant Noodles',
   },
   {
      title: 'Call for Donations for Mindanao Earthquake Survivors',
      description:
         ' The maryknoll//Miriam College Alumni Association appeals for in kind donations for victims of recent earthquakes in Mindanao.',
      pubmat:
         'https://www.mc.edu.ph/Portals/21/xBlog/uploads/2019/11/19/MMCAADonations1.jpg',
      quantityReceived: 89,
      status: 'Active',
      date: 'June 27, 2021',
      categoryNeeded: 'Canned Goods',
   },
]
