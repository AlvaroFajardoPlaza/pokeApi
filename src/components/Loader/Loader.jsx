import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
      <>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            {/* <img className='runningPikachu' src='https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1' /> */}
            <CircularProgress color='secondary' />
        </Box>    
      </>
    )
  };

export default Loader ;
