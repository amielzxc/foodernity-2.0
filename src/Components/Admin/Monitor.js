import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { donations } from '../../__mock__/MonitorData'
const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
   },
}))

function Monitor() {
   const classes = useStyles()
   return (
      <div className={classes.root}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  Donations Monitoring
               </Typography>
               <Typography>as of May 31, 2021</Typography>
            </Grid>
            <Grid item xs={12}>
               <DonationsTable />
            </Grid>
         </Grid>
      </div>
   )
}

const donationColumns = [
   {
      field: 'id',
      headerName: 'ID',
      width: 100,
      type: 'number',
   },
   {
      field: 'donationName',
      headerName: 'Donation Name',
      width: 190,
   },
   {
      field: 'donationCategory',
      headerName: 'Category',
      width: 190,
   },
   {
      field: 'donationRecipient',
      headerName: 'Recipient',
      width: 190,
   },
   {
      field: 'pickupDate',
      headerName: 'Pickup Date',
      width: 190,
   },
   {
      field: 'pickupLoc',
      headerName: 'Pickup Location',
      width: 190,
   },
   {
      field: 'donationExpiry',
      headerName: 'Expiry',
      width: 190,
   },
   {
      field: 'status',
      headerName: 'Status',
      width: 190,
   },
   {
      field: 'postDate',
      headerName: 'Date Posted',
      width: 190,
   },
   {
      field: 'expand',
      headerName: 'View More',
      width: 150,
      sortable: false,
      disableClickEventBubbing: true,
      renderCell: (params) => {
         return (
            <Button variant="contained" color="primary" disableElevation>
               Preview
            </Button>
         )
      },
   },
]

function DonationsTable() {
   return (
      <Paper elevation={0}>
         <div style={{ height: '70vh', width: '100%' }}>
            <DataGrid
               autoPageSize
               rows={donations}
               columns={donationColumns}
               pageSize={10}
               checkboxSelection
            />
         </div>
      </Paper>
   )
}

export default Monitor
