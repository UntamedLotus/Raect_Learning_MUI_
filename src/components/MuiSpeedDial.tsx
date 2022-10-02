import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CopyAllRounded } from "@mui/icons-material";
import { PrintRounded } from "@mui/icons-material";
import { ShareRounded } from "@mui/icons-material";
import { EditRounded } from "@mui/icons-material";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditRounded />} />}
    >
      <SpeedDialAction
        icon={<CopyAllRounded />}
        tooltipTitle="copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintRounded />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareRounded />} tooltipTitle="share" />
    </SpeedDial>
  );
};
