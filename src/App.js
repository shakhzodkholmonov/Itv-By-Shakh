import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { default as FilmCard, default as ProductCard } from "./component/filmCard";
import Carusel from "./component/Layout/Carusel";
import Footer from "./component/Layout/Footer";
import SearchAppBar from "./component/Layout/Headerr";
import TVProgram from "./component/Layout/TVProgram";

const CustomNextArrow = (props) => (
  <div {...props}>
    <ArrowForwardIcon fontSize="large" />
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props}>
    <ArrowBackIcon fontSize="large" />
  </div>
);

function Home() {
  const { data, isLoading, isError } = useQuery("goods", async () => {
    const res = await axios.get("http://localhost:3001/films");
    return res.data;
  });

  const [showMore, setShowMore] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likedGoods = data.filter((good) => good.status === true);
  const sortedGoods = [...likedGoods];
  const slicedGoods = sortedGoods.slice(0, 15);

  const Wait = data.filter((good) => good.type === "Wait");
  const rn = data.filter((good) => good.type === "rn");
  const Mafia = data.filter((good) => good.type === "Mafia");
  const OzbekFilms = data.filter((good) => good.type === "OzbekFilms");
  const Fantastic = data.filter((good) => good.type === "Fantastic");

  const sections = [
    { type: "Eng Kutilgan Kinolar Va Seriallar", arr: Wait },
    { type: "RizaNova", arr: rn },
    { type: "Daho izquvarlar haqida", arr: Mafia },
    { type: "Kino va seriallar o'zbek tilida tomosha qiling", arr: OzbekFilms },
    { type: "Fantastik daramalar", arr: Fantastic },
  ];

  const defaultSections = sections.slice(0, 3);
  const additionalSections = sections.slice(3);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box>
      <SearchAppBar />
      <Carusel />
      <Container
        maxWidth="2lg"
        style={{ backroundColor: "#171818" }}
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
        <TVProgram />
        <Box mb={4} sx={{ flexGrow: 1 }}>
          {slicedGoods.map((good) => (
            <Box key={good.id} p={2}>
              <FilmCard good={good} />
            </Box>
          ))}
        </Box>
        {defaultSections.map((item, i) => (
          <Box mb={4} key={i}>
            <Typography fontSize={"35px"} color={"white"} variant="h5" gutterBottom fontWeight="bold">
              {item.type}
              <ArrowForwardIosIcon sx={{ marginLeft: "6px", fontSize: "medium", fontWeight: "bold" }} />
            </Typography>

            <Slider {...sliderSettings}>
              {item.arr.map((good) => (
                <Box key={`${good.id}_${good.type}`} p={2}>
                  <FilmCard good={good} />
                </Box>
              ))}
            </Slider>
          </Box>
        ))}
        {showMore &&
          additionalSections.map((item, i) => (
            <Box mb={4} key={i}>
              <Typography fontWeight="bold" fontSize={"35px"} color={"white"} variant="h5" gutterBottom>
                {item.type}
                <ArrowForwardIosIcon sx={{ marginLeft: "6px", fontSize: "medium" }} />
              </Typography>
              <Slider {...sliderSettings}>
                {item.arr.map((good) => (
                  <Box key={`${good.id}_${good.type}`} p={2}>
                    <ProductCard good={good} />
                  </Box>
                ))}
              </Slider>
            </Box>
          ))}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
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
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Kamaytirish" : "Ko'proq Ko'rsatish"}
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
