import Button from "@mui/material/Button";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
