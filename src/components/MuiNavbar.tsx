import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMON_APP
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Log in</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
