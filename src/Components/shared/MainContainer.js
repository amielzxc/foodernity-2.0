import React from 'react'
import { Hidden, makeStyles, Toolbar } from '@material-ui/core'
import { useAdminStore } from '../../store/AdminStore'

const useStyles = makeStyles((theme) => ({
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))
// returns a container used to display main contents of the page
function MainContainer(props) {
   const isAdmin = useAdminStore((state) => state.isAdmin)
   const classes = useStyles()

   return (
      <main className={classes.content}>
         {!isAdmin && (
            <Hidden smDown>
               <Toolbar />
            </Hidden>
         )}
         {props.children}
      </main>
   )
}

export default MainContainer
