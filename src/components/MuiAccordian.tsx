import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export const MuiAccordian = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-coontent"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 1 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            assumenda voluptatem pariatur asperiores explicabo ab soluta, optio
            ipsum ea corrupti porro qui sapiente similique fugit nesciunt
            officia, temporibus dolor atque!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-coontent"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 2 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            assumenda voluptatem pariatur asperiores explicabo ab soluta, optio
            ipsum ea corrupti porro qui sapiente similique fugit nesciunt
            officia, temporibus dolor atque!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-coontent"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 3 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            assumenda voluptatem pariatur asperiores explicabo ab soluta, optio
            ipsum ea corrupti porro qui sapiente similique fugit nesciunt
            officia, temporibus dolor atque!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
