import React from 'react'
import { makeStyles, Drawer, Toolbar } from '@material-ui/core'

const drawerWidth = 350

const useStyles = makeStyles((theme) => ({
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawer__paper: {
      width: drawerWidth,
      padding: theme.spacing(2.5, 2),
   },
   drawer__container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      //backgroundColor: 'red',
      height: '100%',
      '&::-webkit-scrollbar': {
         display: 'none',
      },
   },
}))
//returns a drawer that is placed on the left side of the website.
function LeftDrawer(props) {
   const classes = useStyles()

   return (
      <Drawer
         className={classes.drawer}
         variant="permanent"
         classes={{
            paper: classes.drawer__paper,
         }}
      >
         <Toolbar />
         <div className={classes.drawer__container}>{props.children}</div>
      </Drawer>
   )
}

export default LeftDrawer
