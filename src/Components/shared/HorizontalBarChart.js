import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Divider,
} from '@material-ui/core'
import { Bar } from 'react-chartjs-2'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'
function HorizontalBarChart(props) {
   const { data, chartLabel, index } = props

   return (
      <Card>
         <CardHeader
            title={chartLabel}
            titleTypographyProps={{ variant: 'h6' }}
         />
         <Divider />
         <CardContent>
            <Bar
               data={data}
               height={300}
               width={500}
               options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  indexAxis: index,
                  plugins: {
                     legend: {
                        position: 'bottom',
                     },
                  },
               }}
            />
         </CardContent>
         <Divider />
         {/* <CardActions>
            <Button
               size="small"
               color="primary"
               startIcon={<GetAppRoundedIcon />}
            >
               Save as PDF
            </Button>
         </CardActions> */}
      </Card>
   )
}
export default HorizontalBarChart
