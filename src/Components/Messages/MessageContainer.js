import {
   IconButton,
   TextField,
   useMediaQuery,
   useTheme,
   makeStyles,
   Grid,
} from '@material-ui/core'

import MainContainer from '../Common/MainContainer'
import { MessagesDrawerResponsive } from './MessagesDrawer'
import { RequestDrawerResponsive } from './RequestDrawer'
import MessageConversation from './MessageConversation'

const useStyles = makeStyles((theme) => ({
   container__responsive: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '100%',
   },
   container__sender: {
      maxWidth: '400px',
      backgroundColor: '#42A5F5',
      padding: '10px',
      margin: '1px',
      borderRadius: '2px 10px 10px 10px',
   },
   text__sender: {
      margin: '0',
      color: 'white',
   },
   container__receiver: {
      maxWidth: '400px',
      backgroundColor: 'white',
      padding: '10px',
      margin: '1px',
      borderRadius: '10px 2px 10px 10px',
   },
   text__receiver: {
      margin: '0',
      color: 'black',
   },
}))

function MessageContainer() {
   const classes = useStyles()
   const theme = useTheme()
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))
   const responsiveLayout2 = useMediaQuery(theme.breakpoints.down('md'))
   return (
      <MainContainer>
         <div className={classes.container__responsive}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               {responsiveLayout ? <MessagesDrawerResponsive /> : null}
               {responsiveLayout2 ? <RequestDrawerResponsive /> : null}
            </div>
            <MessageConversation />
         </div>
      </MainContainer>
   )
}

export default MessageContainer
