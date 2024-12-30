import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Checkbox,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        backgroundColor: "var(--panel-bg-color)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" gutterBottom style={{ color: "var(--primary-color)" }}>
        Filters
      </Typography>
      <FormControl fullWidth style={{ marginBottom: "1rem" }}>
        <InputLabel>Strain Type</InputLabel>
        <Select>
          <MenuItem value="indica">Indica</MenuItem>
          <MenuItem value="sativa">Sativa</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>
      <Typography gutterBottom>THC Level</Typography>
      <Slider
        defaultValue={20}
        aria-label="THC Level"
        valueLabelDisplay="auto"
        sx={{ color: "var(--accent-color)" }}
      />
      <Typography gutterBottom>CBD Level</Typography>
      <Slider
        defaultValue={10}
        aria-label="CBD Level"
        valueLabelDisplay="auto"
        sx={{ color: "var(--secondary-color)" }}
      />
      <List>
        <ListItem>
          <Checkbox />
          <Typography>Organic</Typography>
        </ListItem>
        <ListItem>
          <Switch />
          <Typography>In Stock</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

