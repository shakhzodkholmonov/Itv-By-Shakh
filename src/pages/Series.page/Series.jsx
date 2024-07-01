import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Breadcrumbs, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmCard from "../../component/filmCard";
import Footer from "../../component/Layout/Footer";
import SearchAppBar from "../../component/Layout/Headerr";

function Series() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleMovies, setVisibleMovies] = useState(10);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3001/series");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const loadMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      <SearchAppBar />
      <Container
        maxWidth="2lg"
        style={{ backgroundColor: "#171818" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
          "@media (min-width:1920px)": {
            maxWidth: "1600px",
          },
        }}
      >
        <Box sx={{ width: "1400px", marginTop: "130px" }}>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>Seriallar</Typography>
          <Box sx={{ marginTop: "40px" }}>
            <Breadcrumbs sx={{ color: "white" }}>
              <Link underline="hover" color="inherit" to="/" style={{ textDecoration: "none", color: "white" }}>
                Bosh sahifa
              </Link>
              <Typography sx={{ color: "#ffffff80" }}>Seriallar</Typography>
            </Breadcrumbs>
            <Box
              sx={{
                height: "170px",
                width: "100%",
                backgroundColor: "#1D1F1E",
                borderRadius: "15px",
                padding: "14px",
                marginTop: "20px",
              }}
            >
              <Box sx={{ display: "flex", gap: "13px" }}>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px white",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Janr
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px grey",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Mamlakat
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px grey",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Reyting bo'yicha
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px grey",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Yil
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px grey",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Audiotrek
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#171818",
                    width: "200px",
                    height: "40px",
                    border: "solid 1px grey",
                    borderRadius: "10px",
                    paddingTop: "20px",
                    color: "grey",
                    paddingLeft: "20px",
                  }}
                >
                  Kinostudiya
                </Box>
              </Box>
              <Box sx={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    height: "40px",
                    backgroundColor: "rgba(53, 58, 56, 0.5)",
                    borderRadius: "20px",
                    paddingRight: "5px",
                    color: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                  }}
                >
                  <AddIcon style={{ marginRight: "3px", color: "rgba(255, 255, 255, 0.5)" }} />
                  Bepul
                </button>
                <button
                  style={{
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px",
                    height: "40px",
                    backgroundColor: "rgba(53, 58, 56, 0.5)",
                    borderRadius: "20px",
                    paddingRight: "5px",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <AddIcon style={{ marginRight: "3px", color: "rgba(255, 255, 255, 0.5)" }} />
                  O'zbek tilida
                </button>
              </Box>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginTop: "25px", display: "flex" }}>
                <CloseIcon />
                Filtelarni tozalash
              </Typography>
            </Box>
            <Grid sx={{ marginTop: "20px" }} container spacing={3}>
              {movies.slice(0, visibleMovies).map((good) => (
                <Grid item xs={12} sm={6} md={4.8} lg={2.4} key={good.id}>
                  <FilmCard good={good} />
                </Grid>
              ))}
            </Grid>
            {visibleMovies < movies.length && (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button
                  onClick={loadMoreMovies}
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff0d",
                    color: "white",
                    height: "50px",
                    width: "100%",
                    border: "none",

                    "&:hover": {
                      backgroundColor: "rgb(40, 68, 35)",
                    },
                  }}
                >
                  Ko'proq Ko'rsatish
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Series;
