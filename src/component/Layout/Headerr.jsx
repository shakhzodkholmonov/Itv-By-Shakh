import { AppBar, Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SearchAppBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scroll ? "#1D1F1E" : "transparent",
          color: "black",
          boxShadow: scroll ? 2 : "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <Box sx={{ display: "flex", gap: "15px", marginLeft: "160px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img style={{ width: "200px" }} src="https://files.itv.uz/itv.png" alt="" />
          </Link>
          <Box sx={{ display: "flex", gap: "20px", marginTop: "35px", color: "white" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "white",

                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                Bosh sahifa
              </Typography>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                TV
              </Typography>
            </Link>
            <Link href="/movies" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Filmlar
              </Typography>
            </Link>
            <Link href="/series" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Seriallar
              </Typography>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Multfilmlar
              </Typography>
            </Link>

            <Link href="/subscribtions" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Obunalar
              </Typography>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#787a79",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Boshqalar
              </Typography>
            </Link>
          </Box>
          <Box sx={{ marginTop: "25px", color: "white", marginLeft: "540px", display: "flex", gap: "5px" }}>
            <button
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                borderRadius: "10px",
                color: "white",
                marginLeft: "5px",
                cursor: "default",
                ":hover": {
                  backgroundColor: "rgba(203, 203, 203, 0.100)",
                },
              }}
            >
              UZ
            </button>

            <button
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                borderRadius: "10px",
                color: "white",
                marginLeft: "5px",
                cursor: "default",
                ":hover": {
                  backgroundColor: "rgba(203, 203, 203, 0.100)",
                },
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.728 9.476c0 1.381.365 2.196 1.168 3.134.61.692.804 1.579.804 2.542 0 .961-.316 1.874-.949 2.615a4.99 4.99 0 01-3.19 1.555c-1.729.147-3.458.271-5.21.271a45.81 45.81 0 01-5.21-.271 4.985 4.985 0 01-3.191-1.555A3.977 3.977 0 013 15.152c0-.963.196-1.85.804-2.542.828-.938 1.17-1.752 1.17-3.134v-.469c0-1.85.46-3.06 1.41-4.244C7.798 3.036 10.062 2 12.302 2h.099c2.288 0 4.625 1.086 6.014 2.887.9 1.16 1.314 2.319 1.314 4.12v.469zM9.13 21.866c0-.553.508-.807.979-.915.55-.117 3.9-.117 4.45 0 .47.108.979.362.979.916-.028.527-.337.995-.765 1.292a3.997 3.997 0 01-1.884.804c-.376.049-.746.05-1.109 0a3.98 3.98 0 01-1.885-.805c-.428-.296-.738-.764-.765-1.291z"
                ></path>
              </svg>
            </button>
            <button
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                borderRadius: "10px",
                color: "white",
                marginLeft: "5px",
                cursor: "default",
                ":hover": {
                  backgroundColor: "rgba(203, 203, 203, 0.100)",
                },
              }}
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.832 11.237C.832 5.491 5.441.833 11.126.833c2.73 0 5.348 1.097 7.278 3.048a10.46 10.46 0 013.015 7.356c0 5.746-4.608 10.404-10.293 10.404S.832 16.983.832 11.237zm20.416 8.382l3.066 2.474h.053c.62.627.62 1.643 0 2.27a1.576 1.576 0 01-2.246 0l-2.544-2.915a1.298 1.298 0 010-1.83 1.183 1.183 0 011.67 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                borderRadius: "10px",
                color: "white",
                marginLeft: "5px",
                cursor: "default",
                ":hover": {
                  backgroundColor: "rgba(203, 203, 203, 0.100)",
                },
              }}
            >
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.534 10.208H2.5M10.094 7.778l2.44 2.43-2.44 2.43"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.444 6.348V5.57a3.07 3.07 0 013.07-3.07h4.07a3.062 3.062 0 013.063 3.063v9.283a3.071 3.071 0 01-3.07 3.07H9.506a3.063 3.063 0 01-3.062-3.062v-.785"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </Box>
        </Box>

        {/* <Link to="/favorites" style={{ textDecoration: "none" }}>
          <NavBarButton>
            <FavoriteBorderOutlinedIcon />
            <ButtonText variant="body1">Saralangan</ButtonText>
          </NavBarButton>
        </Link>
        <Link to="/bag" style={{ textDecoration: "none" }}>
          <NavBarButton>
            <ShoppingCartOutlinedIcon />
            <ButtonText variant="body1">Savat</ButtonText>
          </NavBarButton>
        </Link> */}
      </AppBar>
    </Box>
  );
}
