import React from "react";
import { DataLayerValue } from "./ContextProvider";
import { Box } from "@mui/system";
import CartCard from "./CartCard";
import { Typography } from "@mui/material";

function Cart() {
  const [state, dispatch] = DataLayerValue();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} py={4}>
      {state.items.length === 0 && (
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          No Item Found
        </Typography>
      )}
      {state.items.length > 0 && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "95%", md: "60%" },
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4">Cart Items</Typography>
            {state.items.map((ele) => (
              <CartCard key={ele.id} data={ele} />
            ))}
            <Typography>
              <strong>
                Total Amount in ($):{" "}
                {state.items.reduce(
                  (acc, ele) => acc + ele.quantity * ele.price,
                  0
                )}
              </strong>
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;
