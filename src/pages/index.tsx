import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import CenteredLayout from "@/components/layout/CenteredLayout";
import Button from "@/components/common/Button";

export default function WelcomePage() {
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
