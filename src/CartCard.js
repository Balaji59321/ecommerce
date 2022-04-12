import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { DataLayerValue } from "./ContextProvider";

function CartCard({ data }) {
  const [state, dispatch] = DataLayerValue();
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid #111",
        borderRadius: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      p={1}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 0.6 }}>
        <Typography sx={{ fontWeight: 800 }}>{data.name}</Typography>
        <Typography>{`$ ${data.price}`}</Typography>
      </Box>
      <Typography sx={{ flex: 0.1 }}>{data.quantity}</Typography>
      <Typography sx={{ flex: 0.3 }}>{`$ ${
        data.quantity * data.price
      }`}</Typography>
      <Button
        variant="contained"
        sx={{ flex: 0.2 }}
        onClick={() => dispatch({ type: "REMOVE", id: data.id })}
      >
        Remove
      </Button>
    </Box>
  );
}

export default CartCard;
