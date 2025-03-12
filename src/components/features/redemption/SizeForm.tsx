import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography, Box, SelectChangeEvent } from "@mui/material";

interface SizeFormProps {
  formData: { shirtSize: string };
  handleChange: (event: SelectChangeEvent<string>) => void;
}

export const SizeForm: React.FC<SizeFormProps> = ({ formData, handleChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#353535" }}>
        Tamanhos
      </Typography>
      <FormControl variant="standard" fullWidth sx={{ marginTop: "16px" }}>
        <InputLabel id="size-label">Qual o seu tamanho (Camisetas)?</InputLabel>
        <Select
          labelId="size-label"
          id="size-select"
          name="shirtSize"
          value={formData.shirtSize}
          onChange={handleChange}
          label="Tamanho"
        >
          <MenuItem value="P">P</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="G">G</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};