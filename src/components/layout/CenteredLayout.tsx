import React from "react";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

interface CenteredLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const CenteredLayout = ({ title, children }: CenteredLayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#EFF6FF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: 3,
          maxWidth: "1000px",
          width: "100%",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {title && (
          <Typography
            variant="h4"
            sx={{
              fontSize: "20px",
              color: "#353535",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            {title}
          </Typography>
        )}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>

        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: "14px",
            color: "#353535",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CopyrightIcon
            sx={{
              fontSize: "16px",
              marginRight: "5px",
            }}
          />
          2025 -{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "14px",
              color: "#353535",
              fontWeight: "bold",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Empresa X
          </Typography>
          em parceria com a
          <Typography
            component="span"
            sx={{
              fontSize: "14px",
              color: "#353535",
              fontWeight: "bold",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Lobby
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default CenteredLayout;
