import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const FilmCard = ({ good }) => {
  const [status, setStatus] = useState(good && good.status);

  const { mutate: updateStatus } = useMutation(
    async (newStatus) =>
      await axios.patch(`http://localhost:3001/goods/${good.id}`, {
        status: newStatus,
      })
  );

  return (
    <Box sx={{ width: "260px" }}>
      <Link to={`product?id=${good.id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            borderRadius: "10px",
            background: "none",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt={good.title}
            height="350px"
            image={good.media[0]}
            title={good.title}
            sx={{
              borderRadius: "10px",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              padding: "10px",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <Box sx={{ marginBottom: "70px" }}>
              <Typography variant="h6" gutterBottom>
                {good.rating}
              </Typography>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none">
                <path
                  d="M5.149 5.595a2.375 2.375 0 100-4.751 2.375 2.375 0 000 4.75zM33.65 6.951l-4.75 8.142-4.75-8.142H19.4l7.125 12.893h4.75L38.4 6.951h-4.75zM.398 6.951v4.751a2.37 2.37 0 012.37 2.37v5.769h4.755v-5.765A7.133 7.133 0 00.398 6.95zM21.186 15.094h-4.499a2.37 2.37 0 01-2.37-2.37v-1.017h5l-2.63-4.756h-2.37V3.216h-4.74v9.505a7.133 7.133 0 007.124 7.124h7.124l-2.64-4.75z"
                  fill="#fff"
                />
              </svg>
            </Box>
            <IconButton
              aria-label="play"
              sx={{
                marginLeft: "88px",
                marginBottom: "90px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 50 }} />
            </IconButton>
            <Typography fontSize="16px" variant="h6" sx={{ width: "180px", marginBottom: "12px" }}>
              {good.about}
            </Typography>
          </Box>
        </Card>
        <Typography fontSize="20px" color="white" variant="subtitle1" component="h6" sx={{ marginTop: "10px" }}>
          {good.title}
        </Typography>
      </Link>
      <Link href="/subscribtions" style={{ textDecoration: "none" }}>
        <Typography fontSize="15px" color="green" variant="subtitle1" component="h6">
          Obuna
        </Typography>
      </Link>
    </Box>
  );
};

export default FilmCard;
