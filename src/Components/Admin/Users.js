import { Button, Grid, makeStyles, Paper } from '@material-ui/core'
import { users } from '../../Components/Common/MockData'
import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
   },
}))
function Users() {
   const classes = useStyles()
   return (
      <div className={classes.root}>
         <Grid container spacing={3}>
            <Grid container item xs={12} justify="flex-end">
               <Button variant="contained" color="primary" disableElevation>
                  Add Partner User
               </Button>
            </Grid>
            <Grid item xs={12}>
               <UsersTable />
            </Grid>
         </Grid>
      </div>
   )
}

function UsersTable() {
   const columns = [
      { field: 'id', headerName: 'ID', width: 100, type: 'number' },
      { field: 'firstname', headerName: 'First name', width: 150 },
      { field: 'surname', headerName: 'Last name', width: 150 },
      { field: 'userType', headerName: 'User Type', width: 150 },
      {
         field: 'emailAddress',
         headerName: 'Email Address',
         width: 200,
      },
      {
         field: 'dateOfReg',
         headerName: 'Registration Date',
         width: 190,
      },
      {
         field: 'userStatus',
         headerName: 'Status',
         width: 120,
      },
   ]

   const rows = [
      {
         id: 1,
         surname: 'Bagsic',
         firstname: 'Fhillip',
         userType: 'Individual',
         emailAddress: 'fhillipbagsic@gmail.com',
         dateOfReg: 'May 20, 2021',
         userStatus: 'Active',
      },
   ]
   return (
      <Paper elevation={0}>
         <div style={{ height: 600, width: '100%' }}>
            <DataGrid
               autoPageSize
               rows={users}
               columns={columns}
               pageSize={5}
               checkboxSelection
            />
         </div>
      </Paper>
   )
}
export default Users
