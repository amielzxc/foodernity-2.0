import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
   root: {
      marginTop: 'auto',
   },
   text_inline: {
      display: 'inline',
   },
})

function Footer() {
   const date = new Date()
   const year = date.getFullYear()

   const classes = useStyles()
   return (
      <div className={classes.root}>
         <footer>
            <Typography variant="body2" className={classes.text_inline}>
               Terms of service
            </Typography>
            {' • '}
            <Typography variant="body2" className={classes.text_inline}>
               Privacy &amp; Policy
            </Typography>
            {' • '}
            <Typography variant="body2" className={classes.text_inline}>
               Site Map
            </Typography>
            {' • '}
            <Typography variant="body2" className={classes.text_inline}>
               Foodernity © {year}
            </Typography>
         </footer>
      </div>
   )
}

export default Footer
