import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'

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
                  Registered Users
               </Typography>
               <Typography>as of May 31, 2021</Typography>
            </Grid>
         </Grid>
      </div>
   )
}

export default Monitor
