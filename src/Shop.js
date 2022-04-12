import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import CardPage from "./Card";
import { Typography } from "@mui/material";
import { Translate } from "@mui/icons-material";

function Home() {
  const [data, setData] = useState([]);

  const deleteHandler = (id) => {
    return setData((prev) => prev.filter((ele) => ele.id !== id));
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://620737a992dd6600171c0d1c.mockapi.io/ecommerce"
      );
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <Box my={2}>
      {/* <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgb(241,224,183)",
          zIndex: -200,
          width: "100%",
          height: "100vh",
          top: 0,
        }}
        pb={7}
      ></Box> */}
      <Box
        sx={{
          height: 400,

          borderRadius: 10,
          backgroundColor: "rgb(253,189,8)",
          position: "absolute",
          width: "90%",
          left: "50%",
          transform: "translate(-50%,0)",
          display: "flex",
          zIndex: -100,
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          textAlign: "center",
        }}
        py={4}
      >
        Shop
      </Typography>
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ justifySelf: "end" }}>Cart</Typography>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        mx={5}
      >
        {data.map((ele) => (
          <CardPage key={ele.id} data={ele} deleteHand={deleteHandler} />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
