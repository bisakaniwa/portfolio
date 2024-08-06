import React from 'react'
import { Box, Grid } from '@mui/material'
import { ProjectCard } from '../../components/ProjectCard'
import { Header } from '../../components/Header'

export const LoginProjects = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 145, 136, 0.8)", paddingBottom: "2%" }}>
      <Header returnPagePath={"/"} screenName="Projetos com Login" />
      <Grid container direction="row" paddingLeft="3%" paddingTop="5%" justifyContent="space-evenly">
        <Grid item>
          <ProjectCard
            onClick={() => { }}
            title="Meu Jardim"
            maxWidth="330px"
            description={
              `Aplicação para registrar plantas domésticas e auxiliar com monitoramento de regas, 
            adubação, além de registro de notas de cuidados específicos.`}
            frontLanguage="React.js"
            backLanguage="Integrado ao Firestore"
            hosting="Firebase"
          />
        </Grid>
      </Grid>
    </Box>
  )
}
