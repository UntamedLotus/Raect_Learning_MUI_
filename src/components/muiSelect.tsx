import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [countries, setCountries] = React.useState<string[]>([]);

  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="primary"
        helperText="Please select the countries"
      >
        <MenuItem value="IN">Republic of India</MenuItem>
        <MenuItem value="KR">Republic of south Korea</MenuItem>
        <MenuItem value="JPN">Japan</MenuItem>
      </TextField>
    </Box>
  );
};
