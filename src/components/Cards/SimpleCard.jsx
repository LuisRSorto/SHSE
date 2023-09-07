import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent, Typography} from '@mui/material';
import { SiBlockchaindotcom } from "react-icons/si";
import { VscActivateBreakpoints } from "react-icons/vsc";

export default function SimpleCard({arreglo}) {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    { arreglo.map((card) => (
        <Card sx={{ margin: 4, width: 310, maxHeight: 100, marginBottom: 0, boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)'}}>
          <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{display: 'flex', justifyContent:'center', textAlign: 'center', alignItems: 'center'}} variant="h6" component="div">
            <SiBlockchaindotcom color='rgb(227, 235, 0)'/>&nbsp;&nbsp;{card.titulo}
            </Typography> 
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <VscActivateBreakpoints color='rgb(255, 0, 0)'/> {card.text}    
            </Typography>    
          </CardContent>
        </Card>
      )) 
    }
    </div>
  );
}