import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>

          <Typography variant="body2" color="text.secondary">
            React is javascript library for building user interface. React can
            be used as a base in the developement of single-page or mobile
            applications.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">SHARE</Button>

          <Button size="small">LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
