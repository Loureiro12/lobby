import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import CenteredLayout from "@/components/layout/CenteredLayout";
import Button from "@/components/common/Button";
import { useAppContext } from "@/context/AppContext";

export default function WelcomePage() {
  const { products, loading, error } = useAppContext();

  if (loading) {
    return (
      <CenteredLayout>
        <Typography>Carregando dados...</Typography>
      </CenteredLayout>
    );
  }

  if (error) {
    return (
      <CenteredLayout>
        <Typography>Error: {error}</Typography>
      </CenteredLayout>
    );
  }

  const activeProduct = products.find((product) => product.status === "ACTIVE");

  if (!activeProduct) {
    return <Typography>No active product found.</Typography>;
  }

  return (
    <CenteredLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flex: 1,
        }}
      >
        <Box
          component="img"
          src={activeProduct.logo_url}
          alt="Logo Lobby"
          sx={{
            width: "189px",
            height: "auto",
            marginBottom: "24px",
          }}
        />

        <Typography
          gutterBottom
          sx={{
            fontSize: "40px",
            color: "#353535",
            fontWeight: "bold",
          }}
        >
          Bem-vindo!
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#353535",
          }}
        >
          Estamos muito felizes em ter você em nossa equipe!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#353535",
          }}
        >
          Preencha as perguntinhas a seguir para escolher o seu presente! 🎁
        </Typography>

        <Box mt={4}>
          <Link href="/choose-gift" passHref>
            <Button>Começar!</Button>
          </Link>
        </Box>
      </Box>
    </CenteredLayout>
  );
}
