import { Box, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilmCard from "../../component/filmCard";
import Footer from "../../component/Layout/Footer";
import SearchAppBar from "../../component/Layout/Headerr";
import GetFilms from "../../hooks/getFilms";

const FilmPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = JSON.parse(searchParams.get("id"));
  const { Goods } = GetFilms();
  const myProd = Goods && Goods.find((good) => +good.id === id);

  const leftImages = myProd && myProd.media.slice(0, 3);
  const snapshots = myProd && myProd.kadrlar;

  const [quantity, setQuantity] = useState(1);
  const [similarFilms, setSimilarFilms] = useState([]);

  useEffect(() => {
    const fetchSimilarFilms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/similar");
        setSimilarFilms(response.data);
      } catch (error) {
        console.error("Error fetching similar films:", error);
      }
    };

    fetchSimilarFilms();
  }, []);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!myProd) {
    return (
      <Container maxWidth="xl" sx={{ marginTop: "200px" }}>
        <Typography variant="h4" color="#171818">
          Product not found.
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <SearchAppBar />
      <Box>
        <img src="https://files.itv.uz/uploads/helper/2022/03/02/1x/desktop.jpg" alt="" />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
          "@media (min-width:1920px)": {
            maxWidth: "1600px",
          },
        }}
      >
        <Box sx={{ marginTop: "50px", display: "flex", gap: "10px" }}>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "rgb(40, 68, 35)",
              width: "80px",
              height: "30px",
              borderRadius: "20px",
              paddingLeft: "30px",
              paddingTop: "7px",
              "&:hover": {
                backgroundColor: "rgb(20, 48, 15)",
                cursor: "pointer",
              },
            }}
          >
            Tavsif
          </Typography>
          <Typography
            sx={{
              color: "grey",
              backgroundColor: "#ffffff0d",
              width: "200px",
              height: "30px",
              borderRadius: "20px",
              paddingLeft: "30px",
              paddingTop: "7px",
              "&:hover": {
                color: "white",
                cursor: "pointer",
              },
            }}
          >
            Aktyorlar Va Ijodkorlar
          </Typography>
          <Typography
            sx={{
              color: "grey",
              backgroundColor: "#ffffff0d",
              width: "80px",
              height: "30px",
              borderRadius: "20px",
              paddingLeft: "30px",
              paddingTop: "7px",
              "&:hover": {
                color: "white",
                cursor: "pointer",
              },
            }}
          >
            Tavsif
          </Typography>
        </Box>

        <Box sx={{ display: "flex", pt: 3 }}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={2}>
              {leftImages &&
                leftImages.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={myProd.title}
                    sx={{ width: "250px", borderRadius: "10px", height: "350px", boxShadow: 3 }}
                  />
                ))}
            </Stack>
            <Container sx={{ width: "50%" }}>
              <Stack spacing={2} pl={3}>
                <Typography sx={{ color: "grey", fontSize: "15px" }} variant="h5">
                  {myProd.about}
                </Typography>
                <Typography sx={{ color: "white" }} variant="body1">
                  {myProd.description}
                </Typography>
                <Typography sx={{ display: "flex", gap: "10px", color: "#787a79", fontSize: "15px" }} variant="h5">
                  Til:{" "}
                  <Typography sx={{ color: "white", fontSize: "15px" }} variant="h5">
                    {myProd.lang}
                  </Typography>
                </Typography>
                <Typography sx={{ display: "flex", gap: "10px", color: "#787a79", fontSize: "15px" }} variant="h5">
                  Sifati:{" "}
                  <Typography sx={{ color: "white", fontSize: "15px" }} variant="h5">
                    {myProd.Sifati}
                  </Typography>
                </Typography>
              </Stack>
            </Container>
          </Stack>
        </Box>

        <Box mt={4}>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>Kadrlar</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
            {snapshots &&
              snapshots.map((snapshot, index) => (
                <Box
                  key={index}
                  component="img"
                  src={snapshot}
                  alt={`Snapshot ${index + 1}`}
                  sx={{ width: "300px", borderRadius: "10px", height: "160px", boxShadow: 3 }}
                />
              ))}
          </Box>
        </Box>

        <Box mt={4}>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>O'xshash</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "10px" }}>
            {similarFilms.map((good) => (
              <FilmCard key={good.id} good={good} sx={{ flex: "1 1 300px" }} />
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FilmPage;
