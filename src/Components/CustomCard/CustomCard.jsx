import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CustomCard.css";

export default function CustomCard({ user }) {
  return (
    <Card id="cardEffect" sx={{ width: 300 }}>
      <img id="imageCard" src={user.image} alt="" />
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image= "https://64.media.tumblr.com/d39042b83d10d69b01aceeb854e3cdcb/tumblr_p5k4cx8DQR1t0btdio5_1280.jpg"
          alt="character"
          sx={{
            objectFit: "cover",
            backgroundColor: "#f5f5f5", // opcional, para que se vea bien el fondo si la imagen no llena todo
          }}
        />
        <CardContent id="contentCard">
          <Typography class="textCardGeneral" id = "styleTitle"  component="div">
            {user.name}
          </Typography>
          <Typography class="textCardGeneral" id ="textCard" variant="body2" sx={{ color: 'text.secondary' }}>
            {user.race}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
