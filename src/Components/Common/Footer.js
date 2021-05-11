import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
   root: {
      display: "flex",
      color: "white",
   },
})

function Footer() {
   const date = new Date()
   const year = date.getFullYear()

   const classes = useStyles()
   return (
      <footer>
         <div className={classes.root}>
            <Typography variant="body2" component="p">
               Terms of service
            </Typography>
            <Typography variant="body2" component="p">
               Privacy &amp; Policy
            </Typography>
            <Typography variant="body2" component="p">
               More
            </Typography>
            <Typography variant="body2" component="p">
               Foodernity © {year}
            </Typography>
         </div>
      </footer>
   )
}

export default Footer
