import React from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
