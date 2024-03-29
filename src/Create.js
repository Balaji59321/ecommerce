import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Input } from "@mui/material";
import { TextField, TextareaAutosize } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { faker } from "@faker-js/faker";

function Create() {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const imgHandler = () => {
    setVal((prev) => {
      let newState = { ...prev };
      newState["image"] = faker.image.image(640, 480, true);
      return { ...newState };
    });
  };

  const changeHandler = (e) => {
    setVal((prev) => {
      let newState = { ...prev };
      newState[e.target.name] = e.target.value;
      return { ...newState };
    });
  };

  const saveHandler = async () => {
    await axios.post(`https://620737a992dd6600171c0d1c.mockapi.io/ecommerce/`, {
      name: val.name,
      price: val.price,
      description: val.description,
      image: val.image,
    });
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
        margin: "auto",
        gap: 3,
      }}
      py={3}
    >
      <label>Enter the Name</label>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={val["name"]}
        name="name"
        onChange={changeHandler}
      />
      <label>Enter the Price</label>
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={val["price"]}
        name="price"
        onChange={changeHandler}
      />
      <label>Enter the Description</label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="Description"
        style={{ width: "100%" }}
        value={val["description"]}
        name="description"
        onChange={changeHandler}
      />

      <Button onClick={imgHandler}>Generate Image</Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {val.image.length > 0 && (
          <img src={val.image} alt="product" width={200} height={200} />
        )}
      </Box>
      <Button variant="contained" onClick={saveHandler}>
        Save
      </Button>
      <Button onClick={() => navigate(-1)} variant="contained">
        Cancel
      </Button>
    </Box>
  );
}

export default Create;
