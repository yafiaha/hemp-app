import React from "react";
import { Box, Typography, Checkbox, List, ListItem } from "@mui/material";

const Sidebar = () => {
  return (
    <Box>
      <Typography variant="h6">Filters</Typography>
      <List>
        {["Filter 1", "Filter 2", "Filter 3"].map((filter, index) => (
          <ListItem key={index}>
            <Checkbox />
            <Typography>{filter}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
