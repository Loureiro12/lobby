import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import Link from "next/link";
import CenteredLayout from "@/components/layout/CenteredLayout";
import Button from "@/components/common/Button";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { SnackbarAlert } from "@/components/features/redemption/SnackbarAlert";
import { RecipientDataForm } from "@/components/features/redemption/RecipientDataForm";
import { SizeForm } from "@/components/features/redemption/SizeForm";
import { FormData } from "@/types/types";
import { redeemProduct } from "@/services/send-ransom";

export default function RedemptionDataPage() {
  const { products, selectedItems } = useAppContext();
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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

  const hasSizes = products.some((product) => {
    const items = product.items.filter(
      (item) =>
        selectedItems.includes(item.customer_product_id) || !item.optional
    );
    return items.some((item) => item.sizes && item.sizes.length > 0);
  });

  const hasExtraQuestions = products.some(
    (product) => product.extra_questions && product.extra_questions.length > 0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await redeemProduct(
        products[0].id,
        formData,
        products,
        selectedItems
      );

      if (response.ok) {
        router.push("/success");
      } else {
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarOpen(true);
      console.error("Erro ao enviar dados:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const renderQuestionInput = (question: {
    id: string;
    answer_type: string;
    question: string;
    position?: number;
    options: string[];
  }) => {
    switch (question.answer_type) {
      case "text":
        return (
          <TextField
            label={question.question}
            variant="standard"
            fullWidth
            margin="normal"
            name={`question_${question.id}`}
            value={formData[`question_${question.id}`] || ""}
            onChange={handleChange}
          />
        );
      case "text_area":
        return (
          <TextareaAutosize
            aria-label={question.question}
            minRows={3}
            placeholder={question.question}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "8px",
              backgroundColor: "#fff",
            }}
            name={`question_${question.id}`}
            value={formData[`question_${question.id}`] || ""}
            onChange={handleChange}
          />
        );
      case "select_one":
        return (
          <FormControl variant="standard" fullWidth margin="normal">
            <InputLabel id={`question_${question.id}-label`}>
              {question.question}
            </InputLabel>
            <Select
              labelId={`question_${question.id}-label`}
              id={`question_${question.id}`}
              name={`question_${question.id}`}
              value={formData[`question_${question.id}`] || ""}
              onChange={handleChange}
              label={question.question}
            >
              {question.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case "date":
        return (
          <TextField
            label={question.question}
            variant="standard"
            fullWidth
            margin="normal"
            name={`question_${question.id}`}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData[`question_${question.id}`] || ""}
            onChange={handleChange}
          />
        );
      default:
        return null;
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
        <RecipientDataForm formData={formData} handleChange={handleChange} />

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
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <TextField
              label="Rua"
              variant="standard"
              fullWidth
              margin="normal"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </Box>
          <Box display={["block", "flex"]} gap={2}>
            <TextField
              label="Número"
              variant="standard"
              fullWidth
              margin="normal"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <TextField
              label="Complemento"
              variant="standard"
              fullWidth
              margin="normal"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
            />
            <TextField
              label="Bairro"
              variant="standard"
              fullWidth
              margin="normal"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </Box>
          <Box display={["block", "flex"]} gap={2} alignItems="center" marginTop={2}>
            <TextField
              label="Cidade"
              variant="standard"
              fullWidth
              margin="normal"
              name="city"
              value={formData.city}
              onChange={handleChange}
              sx={{ margin: 0 }}
            />

            <FormControl variant="standard" fullWidth>
              <InputLabel id="state-label">Estado</InputLabel>
              <Select
                labelId="state-label"
                id="state-select"
                name="state"
                value={formData.state}
                onChange={handleChange}
                label="Estado"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="SP">São Paulo</MenuItem>
                <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                <MenuItem value="MG">Minas Gerais</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel id="country-label">País</InputLabel>
              <Select
                labelId="country-label"
                id="country-select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="País"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="BR">Brasil</MenuItem>
                <MenuItem value="US">Estados Unidos</MenuItem>
                <MenuItem value="AR">Argentina</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {hasSizes && (
          <SizeForm formData={formData} handleChange={handleChange} />
        )}

        {hasExtraQuestions && (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#353535" }}
            >
              Perguntas Extras
            </Typography>
            {products.map((product) =>
              product.extra_questions?.map((question) => (
                <Box key={question.id} marginBottom={2}>
                  {renderQuestionInput({
                    ...question,
                    id: question.id.toString(),
                  })}
                </Box>
              ))
            )}
          </Box>
        )}

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
      <SnackbarAlert
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Ocorreu um erro ao enviar os dados. Tente novamente mais tarde."
      />
    </CenteredLayout>
  );
}
