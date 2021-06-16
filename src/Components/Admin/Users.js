import React, { useState } from 'react'
import {
   Button,
   Dialog,
   DialogContent,
   DialogTitle,
   Grid,
   makeStyles,
   Paper,
   TextField,
   Typography,
} from '@material-ui/core'
import { users } from '../../__mock__/UsersData'
import { DataGrid } from '@material-ui/data-grid'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
   },
}))
function Users() {
   const [open, setOpen] = useState(false)
   const [open2, setOpen2] = useState(false)
   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   const handleOpen2 = () => {
      setOpen2(true)
   }

   const handleClose2 = () => {
      setOpen2(false)
   }

   const classes = useStyles()
   return (
      <div className={classes.root}>
         <Grid container spacing={3}>
            <Grid
               container
               item
               xs={12}
               justify="space-between"
               alignItems="center"
            >
               <Grid item>
                  <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                     Registered Users
                  </Typography>
                  <Typography>as of May 31, 2021</Typography>
               </Grid>
               <Grid item>
                  <Button
                     variant="outlined"
                     color="primary"
                     style={{ marginRight: '1rem' }}
                     disableElevation
                     onClick={handleOpen}
                  >
                     Register an Admin
                  </Button>
                  <Button
                     variant="contained"
                     color="primary"
                     disableElevation
                     startIcon={<AddIcon />}
                     onClick={handleOpen2}
                  >
                     Add Partner User
                  </Button>
               </Grid>
            </Grid>
            <Grid item xs={12}>
               <UsersTable />
            </Grid>
         </Grid>
         <CreateAdmin open={open} handleClose={handleClose} />
         <AddPartnerUser open={open2} handleClose={handleClose2} />
      </div>
   )
}

function UsersTable() {
   const columns = [
      {
         field: 'id',
         headerName: 'ID',
         width: 100,
         type: 'number',
      },
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

   return (
      <Paper elevation={0}>
         <div style={{ height: '70vh', width: '100%' }}>
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

function CreateAdmin(props) {
   const { open, handleClose } = props
   return (
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xs">
         <DialogTitle>Create an Admin</DialogTitle>
         <DialogContent dividers>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <TextField variant="outlined" label="First Name" fullWidth />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField variant="outlined" label="Last Name" fullWidth />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Email Address"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Password"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Confirm Password"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
                     Register Admin
                  </Button>
               </Grid>
            </Grid>
         </DialogContent>
      </Dialog>
   )
}

function AddPartnerUser(props) {
   const { open, handleClose } = props
   return (
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xs">
         <DialogTitle>Add Partner User</DialogTitle>
         <DialogContent dividers>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <TextField
                     variant="outlined"
                     label="Partner Name"
                     fullWidth
                  />
               </Grid>

               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Email Address"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Password"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     variant="outlined"
                     label="Confirm Password"
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
                     Register Admin
                  </Button>
               </Grid>
            </Grid>
         </DialogContent>
      </Dialog>
   )
}
export default Users
