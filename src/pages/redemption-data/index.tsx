import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Link from "next/link";
import CenteredLayout from "@/components/layout/CenteredLayout";
import Button from "@/components/common/Button";

export default function RedemptionDataPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    cpfCnpj: "",
    email: "",
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    shirtSize: "",
    hobby: "",
    commercialTeam: "",
    birthday: "",
    iceCreamFlavors: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <CenteredLayout title="Finalize o seu resgate">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          margin: "0 auto",
          flex: 1,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#353535" }}
          >
            Dados do Destinatário
          </Typography>
          <TextField
            label="Nome completo"
            variant="standard"
            fullWidth
            margin="normal"
            name="nomeCompleto"
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

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#353535" }}
          >
            Endereço de Entrega
          </Typography>
          <Box display="flex" gap={2}>
            <TextField
              label="CEP"
              variant="standard"
              fullWidth
              margin="normal"
              name="cep"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <TextField
              label="Rua"
              variant="standard"
              fullWidth
              margin="normal"
              name="rua"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </Box>
          <Box display="flex" gap={2}>
            <TextField
              label="Número"
              variant="standard"
              fullWidth
              margin="normal"
              name="numero"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <TextField
              label="Complemento"
              variant="standard"
              fullWidth
              margin="normal"
              name="complemento"
              value={formData.complement}
              onChange={handleChange}
            />
            <TextField
              label="Bairro"
              variant="standard"
              fullWidth
              margin="normal"
              name="bairro"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" gap={2} alignItems="center" marginTop={2}>
            <TextField
              label="Cidade"
              variant="standard"
              fullWidth
              margin="normal"
              name="cidade"
              value={formData.city}
              onChange={handleChange}
              sx={{ margin: 0 }}
            />

            <FormControl variant="standard" fullWidth>
              <InputLabel id="state-label">Estado</InputLabel>
              <Select
                labelId="state-label"
                id="state-select"
                name="estado"
                value={formData.neighborhood}
                onChange={handleChange}
                label="Estado"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel id="country-label">País</InputLabel>
              <Select
                labelId="country-label"
                id="country-select"
                name="pais"
                value={formData.country}
                onChange={handleChange}
                label="País"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>EUA</MenuItem>
                <MenuItem value={20}>Brazil</MenuItem>
                <MenuItem value={30}>Argentina</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#353535" }}
          >
            Tamanhos
          </Typography>
          <FormControl variant="standard" fullWidth sx={{ marginTop: "16px" }}>
            <InputLabel id="size-label">
              Qual o seu tamanho (Camisetas)?
            </InputLabel>
            <Select
              labelId="size-label"
              id="size-select"
              name="tamanhoCamiseta"
              value={formData.shirtSize}
              onChange={handleChange}
              label="Tamanho"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>P</MenuItem>
              <MenuItem value={20}>M</MenuItem>
              <MenuItem value={30}>G</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#353535" }}
          >
            Perguntas Extras
          </Typography>
          <Box display="flex" gap={2}>
            <TextField
              label="Qual o seu hobbie?"
              variant="standard"
              fullWidth
              margin="normal"
              name="hobbie"
              value={formData.hobby}
              onChange={handleChange}
            />

            <FormControl
              variant="standard"
              fullWidth
              sx={{ marginTop: "16px" }}
            >
              <InputLabel id="commercial-label">
                Você fará parte do time comercial?
              </InputLabel>
              <Select
                labelId="commercial-label"
                id="commercial-select"
                name="timeComercial"
                value={formData.commercialTeam}
                onChange={handleChange}
                label="Time Comercial"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Sim</MenuItem>
                <MenuItem value={20}>Não</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box display="flex" gap={2} marginTop={2}>
            <TextField
              label="Qual a sua data de aniversário?"
              variant="standard"
              fullWidth
              margin="normal"
              name="dataAniversario"
              type="date" 
              InputLabelProps={{
                shrink: true, 
              }}
              sx={{
                margin: 0
              }}
              value={formData.birthday}
              onChange={handleChange}
            />

            <FormControl variant="standard" fullWidth>
              <InputLabel id="ice-cream-label">
                Selecione seus 3 sabores preferidos de sorvete
              </InputLabel>
              <Select
                labelId="ice-cream-label"
                id="ice-cream-select"
                name="saboresSorvete"
                multiple
                value={formData.iceCreamFlavors}
                onChange={handleChange}
                label="Sabores de Sorvete"
              >
                <MenuItem value={10}>Chocolate</MenuItem>
                <MenuItem value={20}>Morango</MenuItem>
                <MenuItem value={30}>Baunilha</MenuItem>
                <MenuItem value={40}>Limão</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
          }}
        >
          <Link href="/choose-gift" passHref>
            <Button variant="secondary">Voltar</Button>
          </Link>
          <Button variant="primary" onClick={handleSubmit}>
            Continuar
          </Button>
        </Box>
      </Box>
    </CenteredLayout>
  );
}