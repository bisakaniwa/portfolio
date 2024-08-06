import React from 'react';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

export const Header = ({ returnPagePath, screenName }) => {
   const navigate = useNavigate();

   const handleReturnPage = () => {
      if (returnPagePath) {
         navigate(returnPagePath);
      }
   };

   const handleEmail = () => {
      // TODO: verificar como abrir aplicação de email já com endereço de envio correto
   };

   return (
      <Grid container direction="row" justifyContent="space-between">
         <Grid item paddingTop="2%" paddingLeft="2%" paddingRight="3%" hidden={!returnPagePath}>
            <Tooltip title="Voltar">
               <IconButton disableRipple sx={{ padding: "3px" }} onClick={handleReturnPage}>
                  <ForwardIcon sx={{ fontSize: "55px", color: "black", transform: "rotate(180deg)" }} />
               </IconButton>
            </Tooltip>
         </Grid>
         <Grid item sx={{ minWidth: returnPagePath ? "30%" : "100%"}} paddingTop="2%" paddingLeft="2%">
            <Grid container direction="row" justifyContent="flex-start">
               <Grid item paddingRight="2%">
                  <Tooltip title="GitHub">
                     <a href="https://github.com/bisakaniwa/">
                        <GitHubIcon sx={{ fontSize: "55px", color: "black" }} />
                     </a>
                  </Tooltip>
               </Grid>
               <Grid item paddingRight="2%">
                  <Tooltip title="LinkedIn">
                     <a href="https://www.linkedin.com/in/bianca-sakaniwa/">
                        <LinkedInIcon sx={{ fontSize: "55px", color: "black" }} />
                     </a>
                  </Tooltip>
               </Grid>
               <Grid item>
                  <Tooltip title="E-mail">
                     <a>
                        <EmailIcon sx={{ fontSize: "53px", color: "black" }} />
                     </a>
                  </Tooltip>
               </Grid>
            </Grid>
         </Grid>
         <Grid item hidden={!screenName} paddingTop="2%" paddingRight="2%">
            <Typography fontFamily="Josefin Sans" fontSize="2.6em" fontWeight={800}>
               {screenName?.toUpperCase()}
            </Typography>
         </Grid>
      </Grid>
   )
}
