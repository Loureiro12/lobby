import React from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface CardItemProps {
  image: string;
  name: string;
  selected?: boolean;
  onSelect?: () => void;
}

const CardItem = ({
  image,
  name,
  selected = false,
  onSelect,
}: CardItemProps) => {
  return (
    <Card
      sx={{
        width: "292px",
        height: "334px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "6px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1,
          }}
        >
          <Checkbox
            checked={selected}
            onChange={onSelect}
            icon={
              <RadioButtonUncheckedIcon
                sx={{
                  color: "#fff",
                  fontSize: "24px",
                  backgroundColor: "#fff",
                  borderColor: "#B1B9C5",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              />
            }
            checkedIcon={
              <CheckCircleIcon
                sx={{
                  color: "#04DDB3",
                  fontSize: "24px",
                }}
              />
            }
            sx={{
              padding: 0,
              "& .MuiSvgIcon-root": {
                borderRadius: "50%",
              },
            }}
          />
        </Box>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "#353535",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          {name}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardItem;
