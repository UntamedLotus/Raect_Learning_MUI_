import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";

export const MuiChip = () => {
  const [chips, setChips] = React.useState([
    "chip 1",
    "chip 2",
    "chip 3",
    "chip 4",
  ]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar></Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />

      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
