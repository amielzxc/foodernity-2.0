import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
   },
}))

function ReportedDonations() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  Reported Donations
               </Typography>
               <Typography>as of May 31, 2021</Typography>
            </Grid>
            <Grid item xs={12}>
               <ReportsTable />
            </Grid>
         </Grid>
      </div>
   )
}

const reportColumns = [
   {
      field: 'id',
      headerName: 'ID',
      width: 150,
      type: 'number',
   },
   {
      field: 'donorEmail',
      headerName: 'Donor Email',
      width: 190,
   },
   {
      field: 'reporterEmail',
      headerName: 'Reporter Email',
      width: 190,
   },
   {
      field: 'dateReported',
      headerName: 'Date Reported',
      width: 190,
   },
   {
      field: 'reportMessage',
      headerName: 'Report Message',
      width: 190,
   },
   {
      field: 'removeListing',
      headerName: 'Remove Listing',
      width: 190,
      sortable: false,
      disableClickEventBubbing: true,
      renderCell: (params) => {
         return (
            <Button variant="contained" color="primary" disableElevation>
               Remove Listing
            </Button>
         )
      },
   },
   {
      field: 'suspendDonor',
      headerName: 'Suspend Donor',
      width: 190,
      sortable: false,
      disableClickEventBubbing: true,
      renderCell: (params) => {
         return (
            <Button variant="contained" color="primary" disableElevation>
               Suspend Donor
            </Button>
         )
      },
   },
   {
      field: 'view',
      headerName: 'View Listing',
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

const data = [
   {
      id: 1,
      donorEmail: 'fhillip@gmail.com',
      reporterEmail: 'bagsic@gmail.com',
      dateReported: '10/20/2020',
      reportMessage: 'Contains vulgar messages on donation notes',
   },
]

function ReportsTable() {
   return (
      <Paper elevation={0}>
         <div style={{ height: 600, width: '100%' }}>
            <DataGrid
               autoPageSize
               rows={data}
               columns={reportColumns}
               pageSize={10}
               checkboxSelection
            />
         </div>
      </Paper>
   )
}
export default ReportedDonations
