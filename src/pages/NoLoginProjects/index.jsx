import React from 'react';
import { Box, Grid } from '@mui/material';
import { Header } from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';

export const NoLoginProjects = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 145, 136, 0.8)", paddingBottom: "2%" }}>
      <Header returnPagePath={"/"} screenName={"Projetos sem Login"} />
      <Grid container direction="row" paddingLeft="3%" paddingTop="5%" justifyContent="space-evenly">
        <Grid item>
          <ProjectCard
            onClick={() => { }}
            title="Weather App"
            maxWidth="330px"
            description={
              `Aplicação para registrar e monitorar previsões meteorológicas em diferentes cidades. Não há 
              integração com APIs de monitoramento real e todos os dados podem ser inseridos por qualquer pessoa.`}
            frontLanguage="React.js"
            backLanguage="Java + SpringBoot"
            hosting="Firebase"
          />
        </Grid>
      </Grid>
    </Box>
  )
}
