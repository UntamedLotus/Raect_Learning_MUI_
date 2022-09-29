import React from "react";
import { Stack, Rating } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

export const MuiRating = () => {
  const [value, setValue] = React.useState<number | null>(3);

  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};
