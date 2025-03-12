import React from "react";
import { Typography, Box } from "@mui/material";
import CenteredLayout from "@/components/layout/CenteredLayout";

export default function SuccessPage() {
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
          Presente resgatado! 🎉🥳
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#353535",
          }}
        >
          Seu pedido está em andamento!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#353535",
          }}
        >
          E não se preocupe, as alterações de status do envio chegam todas em
          seu e-mail!
        </Typography>
      </Box>
    </CenteredLayout>
  );
}
