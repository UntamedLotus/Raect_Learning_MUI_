import React from "react";
import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";

export const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100, //When viewport width is above 0px
          sm: 200, //When viewport width is above 600px
          md: 300, //When viewport width is above 900px
          lg: 400, //When viewport width is above 1200px
          xl: 500, //When viewport width is above 1536px
        },
        bgcolor: "primary.main",
      }}
    ></Box>
  );
};
