import { Grid, Typography } from '@mui/material'
import React from 'react'

export const ProjectType = ({ onClick, icon, title }) => {
   return (
      <Grid item onClick={onClick} sx={{
         border: "1px solid black", borderRadius: "10px", padding: "2%", cursor: "pointer"
      }}>
         <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
               {icon}
            </Grid>
            <Grid item paddingTop="3%">
               <Typography sx={{ fontFamily: "Noto Sans", fontWeight: 500}}>
                  {title}
               </Typography>
            </Grid>
         </Grid>
      </Grid>
   )
}