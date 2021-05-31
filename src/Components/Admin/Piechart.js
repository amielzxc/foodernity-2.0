import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Divider,
} from '@material-ui/core'
import { Pie } from 'react-chartjs-2'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'
function Piechart(props) {
   const { data, chartLabel } = props

   return (
      <Card>
         <CardHeader
            title={chartLabel}
            titleTypographyProps={{ variant: 'h6' }}
         />
         <Divider />
         <CardContent>
            <Pie
               data={data}
               height={300}
               width={500}
               options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                     legend: {
                        position: 'bottom',
                     },
                  },
               }}
            />
         </CardContent>
         <Divider />
         <CardActions>
            <Button
               size="small"
               color="primary"
               startIcon={<GetAppRoundedIcon />}
            >
               Save as PDF
            </Button>
         </CardActions>
      </Card>
   )
}

export default Piechart
