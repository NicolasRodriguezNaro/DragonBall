import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CustomCard({user}) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={user.image}
          alt="character"
          sx={{
            objectFit: "contain",
            backgroundColor: "#f5f5f5", // opcional, para que se vea bien el fondo si la imagen no llena todo
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {user.race}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
