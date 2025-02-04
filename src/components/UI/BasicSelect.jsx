// import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import  Select  from "@mui/material/Select";

export default function BasicSelect({ options, title,  handleValue, value}) {


  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={title}
          onChange={handleValue}
        >
          {options.map((rov) => (
            <MenuItem key={rov} value={rov}>
              {rov}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     </Box>
  );
}
