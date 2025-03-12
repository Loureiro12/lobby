import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Button from "@/components/common/Button";
import CardItem from "@/components/common/CardItem";
import CenteredLayout from "@/components/layout/CenteredLayout";
import { useAppContext } from "@/context/AppContext";

export default function ChooseGiftPage() {
  const { products, loading, error, selectedItems, setSelectedItems } = useAppContext();

  useEffect(() => {
    const hasOptionalItems = products.some((product) =>
      product.items.some((item) => item.optional && product.status === "ACTIVE")
    );

    if (!hasOptionalItems) {
      window.location.href = "/redemption-data";
    }
  }, [products]);

  const handleSelect = (id: string) => {
    setSelectedItems(
      selectedItems.includes(id)
        ? selectedItems.filter((item: string) => item !== id)
        : [...selectedItems, id]
    );
  };

  if (loading) {
    return (
      <CenteredLayout title="Escolha o seu presente! 🎁">
        <Typography>Carregando...</Typography>
      </CenteredLayout>
    );
  }

  if (error) {
    return (
      <CenteredLayout title="Escolha o seu presente! 🎁">
        <Typography>Erro: {error}</Typography>
      </CenteredLayout>
    );
  }

  const activeOptionalItems = products
    .filter((product) => product.status === "ACTIVE")
    .flatMap((product) =>
      product.items.filter((item) => item.optional)
    );

  if (activeOptionalItems.length === 0) {
    return (
      <CenteredLayout title="Escolha o seu presente! 🎁">
        <Typography>Nenhum item opcional ativo encontrado.</Typography>
      </CenteredLayout>
    );
  }

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
          {activeOptionalItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.customer_product_id}>
              <CardItem
                image={item.image_url}
                name={item.name}
                selected={selectedItems.includes(item.customer_product_id)}
                onSelect={() => handleSelect(item.customer_product_id)}
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

          <Link href="/redemption-data" passHref>
            <Button variant="primary" disabled={selectedItems.length === 0}>
              Continuar
            </Button>
          </Link>
        </Box>
      </Box>
    </CenteredLayout>
  );
}