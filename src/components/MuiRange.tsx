import React from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/lab";

export const MuiRange = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  console.log({ value });

  return (
    <div>
      <Box width="500px">
        <DateRangePicker
          startText="check-ins"
          endText="check-out"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>to</Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
    </div>
  );
};
