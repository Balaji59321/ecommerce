import React, { useState } from "react";
import { Box } from "@mui/system";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, Input, Typography } from "@mui/material";
import { Radio } from "@mui/material";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { DataLayerValue } from "./ContextProvider";

function ViewItem() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = DataLayerValue();
  const val = location.state.data;

  const cartPresence =
    state.items.filter((ele) => ele.id === val.id).length > 0
      ? state.items.filter((ele) => ele.id === val.id)[0]["quantity"]
      : 0;
  const [count, setCount] = useState(cartPresence);

  const clickHandler = () => {
    if (state.items.filter((ele) => ele.id === val.id).length > 0) {
      return dispatch({ type: "UPDATE_QUANTITY", id: val.id, quantity: count });
    }
    return dispatch({
      type: "ADD",
      item: {
        name: val.name,
        price: val.price,
        quantity: count,
        id: val.id,
      },
    });
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: "1040",
            backgroundColor: "#000",
            opacity: 0.5,
            // position: "absolute",
            // backgroundColor: "rgba(1,1,1,0.6)",
            // width: "100%",
            // height: "100%",
            // top: 0,
          }}
        />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#eee",
            borderRadius: 5,
            width: "60%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "auto",
            gap: 10,
            position: "absolute",
            zIndex: "1045",
          }}
          py={5}
          px={4}
        >
          <ImageListItem>
            <img
              src={val["image"]}
              style={{ borderRadius: 10, objectFit: "cover", height: "400px" }}
              alt="product-item"
            />
          </ImageListItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <section>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                {val["name"]}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                {`$ ${val["price"]}`}
              </Typography>
              <hr />
              <Typography variant="p">{val["description"]}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }} py={2}>
                <Typography>Color Shades</Typography>
                <Radio name="radio-btn" color="default" checked />
                Grey
                <Radio name="radio-btn" color="success" checked />
                Green
                <Radio name="radio-btn" color="secondary" checked />
                Violet
              </Box>
            </section>
            <section>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                }}
                mb={3}
              >
                <Button
                  variant="contained"
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}
                >
                  -
                </Button>
                <Typography variant="contained">{count}</Typography>
                <Button
                  variant="contained"
                  onClick={() => count <= 4 && setCount((prev) => prev + 1)}
                >
                  +
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={clickHandler}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100%", marginTop: 3 }}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </section>
          </Box>
        </Box>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default ViewItem;
