import React from 'react'
import { Helmet } from 'react-helmet'
import StyledAppBar from '../components/shared/StyledAppBar'
import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import PanelDrawer from '../components/admin/PanelDrawer'
import AdminContainer from '../components/admin/AdminContainer'

export default function Admin() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Admin | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <PanelDrawer />
            <AdminContainer />
         </div>
      </>
   )
}
