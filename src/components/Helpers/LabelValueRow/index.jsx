import { Grid, Typography } from '@mui/material'
import React from 'react'

export const LabelValueRow = ({ label, value, lastItem }) => {
   return (
      <Grid container direction="row" paddingBottom={lastItem ? 0 : "10px"}>
         <Grid item paddingRight="5px">
            <Typography fontFamily="Noto Sans" fontWeight={600}>{label}</Typography>
         </Grid>
         <Grid item sx={{ inlineSize: "110px" }}>
            <Typography fontFamily="Noto Sans">
               {value}
            </Typography>
         </Grid>
      </Grid>
   )
}
