import React from "react";
import { Typography, Box } from "@mui/material";
import CenteredLayout from "@/components/layout/CenteredLayout";

export default function ErrorPage() {
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
          src="/lobby-logo.png"
          alt="Logo Lobby"
          sx={{
            width: "160px",
            height: "auto",
            marginBottom: "24px",
          }}
        />

        <Box
          component="img"
          src="/error-404.png"
          alt="Error Image"
          sx={{
            width: "500px",
            height: "auto",
            marginBottom: "24px",
          }}
        />

        <Typography
          gutterBottom
          sx={{
            fontSize: "20px",
            color: "#22007F",
            fontWeight: "bold",
          }}
        >
          Oops! Página não encontrada.
        </Typography>

        <Typography
          gutterBottom
          sx={{
            color: "#353535",
            fontSize: "16px",
          }}
        >
          Parece que você explorou demais, e acabou se perdendo.
        </Typography>
      </Box>
    </CenteredLayout>
  );
}
