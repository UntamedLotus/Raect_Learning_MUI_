import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuRounded />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
