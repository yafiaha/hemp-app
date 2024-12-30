"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Sidebar = () => {
    return (<material_1.Box sx={{
            padding: "1rem",
            backgroundColor: "var(--panel-bg-color)",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
      <material_1.Typography variant="h6" gutterBottom style={{ color: "var(--primary-color)" }}>
        Filters
      </material_1.Typography>
      <material_1.FormControl fullWidth style={{ marginBottom: "1rem" }}>
        <material_1.InputLabel>Strain Type</material_1.InputLabel>
        <material_1.Select>
          <material_1.MenuItem value="indica">Indica</material_1.MenuItem>
          <material_1.MenuItem value="sativa">Sativa</material_1.MenuItem>
          <material_1.MenuItem value="hybrid">Hybrid</material_1.MenuItem>
        </material_1.Select>
      </material_1.FormControl>
      <material_1.Typography gutterBottom>THC Level</material_1.Typography>
      <material_1.Slider defaultValue={20} aria-label="THC Level" valueLabelDisplay="auto" sx={{ color: "var(--accent-color)" }}/>
      <material_1.Typography gutterBottom>CBD Level</material_1.Typography>
      <material_1.Slider defaultValue={10} aria-label="CBD Level" valueLabelDisplay="auto" sx={{ color: "var(--secondary-color)" }}/>
      <material_1.List>
        <material_1.ListItem>
          <material_1.Checkbox />
          <material_1.Typography>Organic</material_1.Typography>
        </material_1.ListItem>
        <material_1.ListItem>
          <material_1.Switch />
          <material_1.Typography>In Stock</material_1.Typography>
        </material_1.ListItem>
      </material_1.List>
    </material_1.Box>);
};
exports.default = Sidebar;
