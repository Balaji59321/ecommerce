import { Typography } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { Box } from "@mui/system";

function HomeCard({ data }) {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: 180, sm: 230, md: 250 },
          textAlign: "center",
          borderRadius: 2,
          padding: 3,
          paddingBottom: 0,
          border: "1px solid #ddd",
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={data.image}
          alt="product-item"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontSize: 16, height: 30 }}
          >
            {data.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomeCard;
