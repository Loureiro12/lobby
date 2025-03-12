import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Button from "@/components/common/Button";
import CardItem from "@/components/common/CardItem";
import CenteredLayout from "@/components/layout/CenteredLayout";

const gifts = [
  { id: 1, name: "Presente 1", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
  { id: 2, name: "Presente 2", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
  { id: 3, name: "Presente 3", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
  { id: 4, name: "Presente 4", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
  { id: 5, name: "Presente 5", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
  { id: 6, name: "Presente 6", image: "https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg" },
];

export default function ChooseGiftPage() {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedGift(id);
  };

  return (
    <CenteredLayout title="Escolha o seu presente! 🎁">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="center" mt={4} mb={6}>
          {gifts.map((gift) => (
            <Grid item xs={12} sm={6} md={4} key={gift.id}>
              <CardItem
                image={gift.image}
                name={gift.name}
                selected={selectedGift === gift.id}
                onSelect={() => handleSelect(gift.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "24px",

          }}
        >
          <Link href="/" passHref>
            <Button variant="secondary">Voltar</Button>
          </Link>

          <Link href="/success" passHref>
            <Button variant="primary">
              Continuar
            </Button>
          </Link>
        </Box>
      </Box>
    </CenteredLayout>
  );
}