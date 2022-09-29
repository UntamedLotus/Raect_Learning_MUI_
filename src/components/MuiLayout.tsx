import React from "react";
import { Box } from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      <Box
        //   component="span"
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "secondary.light",
          },
        }}
      >
        Ruru
      </Box>

      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </>
  );
};
