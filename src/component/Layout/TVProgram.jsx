import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TVProgram = () => {
  return (
    <>
      <Typography
        sx={{ marginTop: "20px" }}
        fontSize={"35px"}
        color={"white"}
        variant="h5"
        gutterBottom
        fontWeight="bold"
      >
        Telekanallar
        <ArrowForwardIosIcon sx={{ marginLeft: "6px", fontSize: "medium", fontWeight: "bold" }} />
      </Typography>
      <Box sx={{ marginTop: "20px", marginLeft: "7px" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2021/10/28//2a8ebe8401dd495ceb7b877c9cb43d8a-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539673835_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2021/10/28//3949af971384aacf7c3e45bf758dd5b0-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "210px",
                width: "210px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <img
                style={{ width: "210px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2022/11/28//cd455bf9d26fe6786d1c7db4fd8bf351-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/2021/10/28//656d207e5a33c862933dd026685955c6-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2021/10/28//279298110b85517552174518018114d4-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2023/06/23//85b02c0f497c9a54eb773bd1e73460ed-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/2021/11/03//2675cdc82b452ba3267237a976d173fc-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "210px",
                width: "210px",
                marginTop: "10px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <img
                style={{ width: "210px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2022/11/28//5170b24fea2735ad4fbf3f1df1b16f15-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2023/06/23//efa102b22ab6603f803081b78f9f810d-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539682154_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "210px",
                width: "210px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <img
                style={{ width: "210px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539667812_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/2020/06/17//d2e38ec0058f9c217b4c77c88f81404e-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "100px",
                  width: "100px",
                  borderRadius: "10px",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  style={{ width: "100px", borderRadius: "10px" }}
                  src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                  alt=""
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    aria-label="play"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2023/05/31//91c58d573e4a8e351e68a0ebcbe724ab-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "10px",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100px", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/1539678907_10_16_2018-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
                src="https://files.itv.uz/uploads/iptv/channels/2021/10/28//3dac3983d4adc9be46d5e797bbff1b0a-q-500x500.jpeg"
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <IconButton
                  aria-label="play"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                    },
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TVProgram;
