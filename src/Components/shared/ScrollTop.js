import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

export default function ScrollTop() {
   const [showScroll, setShowScroll] = useState(false)

   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 50) {
         setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 50) {
         setShowScroll(false)
      }
   }

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   window.addEventListener('scroll', checkScrollTop)

   return (
      <Fab
         size="small"
         color="primary"
         style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            display: showScroll ? 'flex' : 'none',
         }}
         onClick={scrollTop}
      >
         <ArrowUpwardIcon />
      </Fab>
   )
}
