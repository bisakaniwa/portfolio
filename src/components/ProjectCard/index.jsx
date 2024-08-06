import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Collapse, Grid, Typography } from '@mui/material';
import { LabelValueRow } from '../Helpers/LabelValueRow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ProjectCard = ({
   onClick, title, description, maxWidth, frontLanguage, backLanguage, hosting, otherTags, otherCardInfos
}) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <Card sx={{ maxWidth: maxWidth, cursor: "pointer" }} onClick={onClick}>
         <CardContent sx={{ padding: "10%", paddingBottom: "2%" }}>
            <Grid container direction="column">
               <Grid item paddingBottom="10%">
                  <Typography variant="h4" fontFamily="Noto Sans" fontWeight={600}>
                     {title}
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography fontFamily="Noto Sans">
                     {description}
                  </Typography>
               </Grid>
            </Grid>
         </CardContent>
         <CardActions sx={{
            display: "flex", justifyContent: "flex-end",
            paddingBottom: isExpanded ? "2%" : "10%"
         }}>
            <Button size="small" onClick={() => setIsExpanded(!isExpanded)}
               endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
               Informações técnicas
            </Button>
         </CardActions>
         <Collapse in={isExpanded} unmountOnExit>
            <CardContent sx={{ padding: "2% 5% 2% 8%" }}>
               <Grid container direction="column">
                  <Grid item>
                     <LabelValueRow label="Linguagem do front:" value={frontLanguage} />
                  </Grid>
                  <Grid item>
                     <LabelValueRow label="Linguagem do back:" value={backLanguage} />
                  </Grid>
                  <Grid item>
                     <LabelValueRow label="Hospedagem:" value={hosting} lastItem />
                  </Grid>
                  {otherTags}
               </Grid>
               {otherCardInfos}
            </CardContent>
         </Collapse>
      </Card>
   )
}
