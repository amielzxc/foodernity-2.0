import { CssBaseline, Grid, Toolbar } from '@material-ui/core'
import { useState } from 'react'
import { NavBar, Menu } from './NavBar'

function AboutUs() {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <Grid container justify="center">
         <CssBaseline />
         <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Toolbar />
         {openMenu && <Menu />}
      </Grid>
   )
}

export default AboutUs
