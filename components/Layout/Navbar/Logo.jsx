import React from 'react'
import { Box } from "@mui/system";
import Image from "next/image";
import Link from 'next/link';

const Logo = ({logo}) => {
  return (
    <Link href={'/'}>
    <Box
        width={{
          xs : "120px", 
          sm : "150px"
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          letterSpacing: "3px",
          fontSize: "22px",
          lineHeight: "24px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
        }}
      >
        <Image          
          width={"50%"}
          height={"50%"}
          src={logo}
        />
        SUGAR
      </Box>
      </Link>
  )
}

export default Logo