import React, { useState } from 'react'
import { Button, Drawer, Hidden, makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   drawer__container: {
      display: 'flex',
      flexDirection: 'column',
      width: '360px',
      padding: '20px 16px',

      height: '100%',
      '&::-webkit-scrollbar': {
         display: 'none',
      },
   },
}))

/*
returns a dialog that is used as a replacement for the left drawer (e.g., filter drawer, steps drawer)
when the website should use responsive layout
 */
function DialogDrawer(props) {
   const classes = useStyles()
   const [toggle, setToggle] = useState(false)

   const handleSetToggle = () => {
      setToggle(!toggle)
   }

   return (
      <Hidden mdUp>
         <div
            style={{
               alignSelf: 'flex-end',
               margin: '1rem 1rem 0 0',
            }}
         >
            <Toolbar />
            <Button variant="text" color="primary" onClick={handleSetToggle}>
               {props.buttonName}
            </Button>
            <Drawer
               anchor="left"
               open={toggle}
               onClose={handleSetToggle}
               style={{
                  zIndex: '1',
               }}
            >
               <Toolbar />
               <div className={classes.drawer__container}>{props.children}</div>
            </Drawer>
         </div>
      </Hidden>
   )
}

export default DialogDrawer
