import { AppBar, makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   navbar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
   },
   drawer: {
      width: 30,
   },
}))
function Fallback() {
   const classes = useStyles()
   return (
      <div className={classes.root}>
         <AppBar elevation={1} position="fixed" className={classes.navbar}>
            <Toolbar />
         </AppBar>
      </div>
   )
}

export default Fallback
