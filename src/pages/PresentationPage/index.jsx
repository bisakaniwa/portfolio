import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import myPic from '../../assets/minha foto.jpeg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../components/ProjectType';
import { Header } from '../../components/Header';

export const PresentationPage = () => {
   const navigate = useNavigate();

   const handleWithLogin = () => {
      navigate('/withLogin');
   };

   const handleNoLogin = () => {
      navigate('/noLogin');
   };

   return (
      <Box sx={{
         backgroundColor: "#0c1a1d",
         paddingTop: "1%",
         paddingLeft: "3%",
         paddingRight: "4%",
         paddingBottom: "2%",
      }}>
         <Grid container direction="column">
            <Grid item>
               <Header />
            </Grid>
            <Grid item>
               <Grid container direction="row" justifyContent="space-between">
                  <Grid item paddingTop="6%">
                     <Typography sx={{
                        fontFamily: "Noto Sans",
                        fontWeight: 500,
                        fontSize: "36px",
                        color: "white"
                     }}>
                        Olá! Eu sou Bianca Sakaniwa,
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Avatar src={myPic} variant="circular" sx={{ width: 150, height: 150 }} />
                  </Grid>
               </Grid>
            </Grid>
            <Grid item paddingTop="3%">
               <Typography sx={{
                  fontFamily: "Noto Sans",
                  fontWeight: 800,
                  fontSize: "62px",
                  textAlign: "end",
                  color: ""
               }}>
                  Desenvolvedora de Software Fullstack
               </Typography>
            </Grid>
            <Grid item>
               <Typography sx={{
                  fontFamily: "Noto Sans",
                  fontWeight: 700,
                  fontSize: "38px",
                  textAlign: "end",
               }}>
                  Com ênfase em front-end
               </Typography>
            </Grid>
            <Grid item sx={{ width: "400px", paddingTop: "2%" }}>
               <Typography sx={{
                  fontFamily: "Noto Sans",
                  fontWeight: 500,
                  fontSize: "32px"
               }}>
                  Conheça um pouco do meu trabalho!
               </Typography>
            </Grid>
            <Grid item display="flex" justifyContent="center" paddingTop="5%">
               <ArrowDownwardIcon sx={{ fontSize: "55px", color: "black" }} />
            </Grid>
            <Grid item paddingTop="7%">
               <Grid container direction='row' justifyContent="space-evenly">
                  <ProjectType onClick={handleWithLogin}
                     icon={<WhatshotIcon sx={{ fontSize: "55px", color: "black", textAlign: "center" }} />}
                     title="Projetos com Login"
                  />
                  <ProjectType onClick={handleNoLogin}
                     icon={<LaptopWindowsIcon sx={{ fontSize: "55px", color: "black", textAlign: "center" }} />}
                     title="Projetos sem Login"
                  />
               </Grid>
            </Grid>
         </Grid>
      </Box>
   )
}
