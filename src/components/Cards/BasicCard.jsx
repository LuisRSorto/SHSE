import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent, Typography, ListItem} from '@mui/material';
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function BasicCard({arreglo}) {
  return (
    <>
    { arreglo.map((card) => (
        <Card sx={{ margin: 4, width: 310, minHeight: 400, marginBottom: 0, boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)'}}>
          <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{textAlign: 'center', marginTop: 5}} variant="h5" component="div">
              {card.titulo}
              <hr/>
            </Typography> 
            <Typography sx={{textAlign: 'center', marginTop: 4, marginBottom: 4}} variant="h5" color={'rgb(194, 0, 208)'}>
              {card.precio}
            </Typography>
            {card.oferta.map((x) => (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <BsFillCheckCircleFill color='rgb(30, 179, 0)'/> {x}    
            </Typography>
            ))}     
          </CardContent>
        </Card>
      )) 
    }
    </>
  );
}