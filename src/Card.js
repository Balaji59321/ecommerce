import { Typography } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateItem from "./ViewItem";
import axios from "axios";
import { useContext } from "react";
import { DataLayerValue } from "./ContextProvider";

const CardPage = ({ data, deleteHand }) => {
  const navigate = useNavigate();
  // const [portal, setPortal] = useState(false);
  const [ctx, dispatch] = DataLayerValue();

  const deleteHandler = async (id) => {
    await axios.delete(
      `https://620737a992dd6600171c0d1c.mockapi.io/ecommerce/${id}`
    );
    deleteHand(id);
  };

  return (
    <>
      <Box>
        <Card
          sx={{
            width: 250,
            textAlign: "center",
            borderRadius: 8,
            padding: 3,
            paddingBottom: 0,
            border: "1px solid #ddd",
            boxShadow: "5px 5px 15px #bbb",
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 1,
            }}
          >
            <Button
              onClick={() => navigate(`/view/${data.id}`, { state: { data } })}
            >
              <ArrowDropDownCircleOutlinedIcon />
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={(e) => {
                // dispatch({
                //   type: "ADD",
                //   item: {
                //     name: data.name,
                //     price: data.price,
                //     quantity: 1,
                //     id: data.id,
                //   },
                // });
                console.log(e.target.textContent);
                if (e.target.textContent === "Add")
                  dispatch({
                    type: "ADD",
                    item: {
                      name: data.name,
                      price: data.price,
                      quantity: 1,
                      id: data.id,
                    },
                  });
                else
                  dispatch({
                    type: "REMOVE",
                    id: data.id,
                  });
              }}
            >
              <LocalMallIcon />
              {ctx.items.filter((ele) => ele.id === data.id).length > 0
                ? "Remove"
                : "Add"}
            </Button>
          </Box>
          {data.image.length > 0 ? (
            <CardMedia
              component="img"
              height="230"
              image={data.image}
              alt="product-item"
              sx={{ borderRadius: 3 }}
            />
          ) : (
            "No Image Found"
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" sx={{ fontSize: 16 }}>
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$${data.price}`}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            style={{ margin: 4 }}
            onClick={() => navigate(`/edit/${data.id}`, { state: data })}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            style={{ margin: 4 }}
            onClick={() => deleteHandler(data.id)}
          >
            Delete
          </Button>
        </Card>
      </Box>
      {/* {portal && <CreateItem />} */}
    </>
  );
};

export default CardPage;
