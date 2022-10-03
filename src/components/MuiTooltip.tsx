import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
