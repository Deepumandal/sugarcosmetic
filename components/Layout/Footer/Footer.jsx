import { Box } from '@mui/material'
import React from 'react'
import Bottomfooter from './Bottomfooter'
import Topfooter from './Topfooter'

const Footer = (props) => {

  return (
    <Box sx={{
      position : "relative",
      // backgroundColor : "black",
      bottom : 0,
      left :0,
      right : 0,
      zIndex : -1

    }}>
 <Topfooter />
<Bottomfooter />
    </Box>
  )
}



export default Footer