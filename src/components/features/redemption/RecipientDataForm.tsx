import React from "react";
import { TextField, Box, Typography } from "@mui/material";

interface RecipientDataFormProps {
  formData: {
    fullName: string;
    cpfCnpj: string;
    email: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RecipientDataForm: React.FC<RecipientDataFormProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#353535" }}>
        Dados do Destinatário
      </Typography>
      <TextField
        label="Nome completo"
        variant="standard"
        fullWidth
        margin="normal"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <Box display="flex" gap={2}>
        <TextField
          label="CPF ou CNPJ"
          variant="standard"
          fullWidth
          margin="normal"
          name="cpfCnpj"
          value={formData.cpfCnpj}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-mail"
          variant="standard"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Box>
    </Box>
  );
};