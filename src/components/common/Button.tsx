import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const StyledButton = styled(Button)<{ customVariant: "primary" | "secondary" }>(
  ({ customVariant }) => ({
    borderRadius: "61px",
    textTransform: "none",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: 600,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: customVariant === "primary" ? "#3100B6" : "#F4F4F4",
    },
    "&.Mui-disabled": {
      opacity: customVariant === "primary" ? 0.25 : 1,
      backgroundColor: customVariant === "primary" ? "#22007F" : "#FFFFFF",
      color: customVariant === "primary" ? "#FFFFFF" : "#64748B",
      border: customVariant === "secondary" ? "1px solid #64748B" : "none",
    },
    backgroundColor: customVariant === "primary" ? "#22007F" : "#FFFFFF",
    color: customVariant === "primary" ? "#FFFFFF" : "#64748B",
    border: customVariant === "secondary" ? "1px solid #64748B" : "none",
  })
);

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: CustomButtonProps) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      customVariant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
