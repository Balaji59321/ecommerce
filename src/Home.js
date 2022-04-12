import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import HomeCard from "./HomeCard";
import { Typography } from "@mui/material";

function Home() {
  const [data, setData] = useState([]);
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
    <div style={{ backgroundColor: "#ddd", paddingBottom: 50 }}>
      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search For Home
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search By Fashion
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search By Electronics
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search By Books
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search By Games
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 900 }} pt={3} mx={3}>
        Search By Kids
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowWrap: "nowrap",
          overflow: "auto",
        }}
        pt={1}
        mx={3}
      >
        {data.map((ele) => {
          return <HomeCard key={ele.id} data={ele} />;
        })}
      </Box>
    </div>
  );
}

export default Home;
