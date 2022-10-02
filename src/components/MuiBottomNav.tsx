import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeRounded } from "@mui/icons-material";
import { FavoriteRounded } from "@mui/icons-material";
import { Person2Rounded } from "@mui/icons-material";

export const MuiBottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeRounded />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteRounded />} />
      <BottomNavigationAction label="Profile" icon={<Person2Rounded />} />
    </BottomNavigation>
  );
};
