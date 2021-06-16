import { Grid, Typography, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import cannedfood from '../../assets/faqs/canned-food.png'
import snack from '../../assets/faqs/snack.png'
import noodles from '../../assets/faqs/instant-noodles.png'
import softdrinks from '../../assets/faqs/soft-drink.png'
import others from '../../assets/faqs/ellipsis.png'
import cookedfood from '../../assets/faqs/seasoning.png'
import expiredfood from '../../assets/faqs/expired.png'
import container from '../../assets/faqs/lunch-box.png'
import openedfood from '../../assets/faqs/can.png'
import raw from '../../assets/faqs/meat.png'

export default function Food() {
   const classes = useStyles()

   return (
      <Grid container spacing={5} justify="center">
         <Grid item xs={12}>
            <Typography variant="h4" className={classes.text_bold} gutterBottom>
               ✔️ The Accepted Foods
            </Typography>
            <Typography variant="h6">
               These guidelines are for food DONORS and REQUESTORS. By following
               these guidelines, food DONORS and REQUESTOR will be able to
               safely prepare, handle, and provide food that can be accepted by
               DONATED FOOD DISTRIBUTING ORGANIZATIONS.
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" gutterBottom className={classes.text_bold}>
               💯 Commercially Packaged Foods Not Needing Refrigeration
            </Typography>
            <Typography>
               The donation of commercially canned, boxed, and otherwise
               packaged foods is encouraged. So what are these commercial goods?
               Here are some, but not limited to:
            </Typography>
         </Grid>

         <Item
            img={cannedfood}
            label="Canned Goods"
            description="Canned fruits and vegetables, milks and sauces, meat and fish, soups, and the likes"
         />
         <Item
            img={noodles}
            label="Instant Noodles"
            description="Instant noodles such as soup noodles, friend noodles, non-fried noodles, and the likes"
         />
         <Item
            img={snack}
            label="Snacks &amp; Biscuits"
            description="Any kinds of snacks and biscuits"
         />
         <Item
            img={softdrinks}
            label="Beverages"
            description="Water, tea, coffee, soft drinks, juice drinks. (alcoholic are prohibited) "
         />
         <Item
            img={others}
            label="Others"
            description="Other non-perishable foods that don't require refrigeration (e.g., condiments)"
         />
         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h4" className={classes.text_bold} gutterBottom>
               ❌ Not Accepted Foods
            </Typography>
            <Typography variant="h6">
               😔 Certain foods are not suitable for donation because of safety
               concerns. These foods include:
            </Typography>
         </Grid>
         <Item
            img={cookedfood}
            label="Home-cooked foods"
            description="Foods prepared, cooked, cooled, or reheated at home"
         />
         <Item
            img={expiredfood}
            label="Expired foods"
            description="Foods that are past a “use by / consume by” date"
         />
         <Item
            img={container}
            label="Foods in containers"
            description="Foods taken out of their original packaging and placed into containers"
         />
         <Item
            img={openedfood}
            label="Opened foods"
            description="Foods in opened or torn containers exposing the food to potential contamination."
         />
         <Item
            img={raw}
            label="Raw foods"
            description="Meat, beef, pork, poultry, and the likes "
         />
         <Item
            img={others}
            label="Others"
            description="Other perishables such as fruits, vegetables, dairy products, eggs, meat, poultry, and seafood"
         />
      </Grid>
   )
}

function Item(props) {
   const classes = useStyles()
   const { img, label, description } = props

   return (
      <Grid item xs={12} sm={6} lg={3}>
         <Box
            boxShadow={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            borderRadius={5}
         >
            <img
               src={img}
               alt="canned food"
               style={{
                  width: '150px',
                  height: '150px',
                  margin: '1rem auto',
               }}
            />
            <Typography
               style={{ textAlign: 'center', marginBottom: '.5rem' }}
               className={classes.text_bold}
            >
               {label}
            </Typography>
            <Typography
               variant="body2"
               style={{
                  textAlign: 'center',
                  fontWeight: '300',
                  marginBottom: '1rem',
                  padding: '0 5px',
               }}
            >
               {description}
            </Typography>
         </Box>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
}))
