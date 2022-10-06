import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Favorite } from "@mui/icons-material";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs Exmpl"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>
    </Box>
  );
};
