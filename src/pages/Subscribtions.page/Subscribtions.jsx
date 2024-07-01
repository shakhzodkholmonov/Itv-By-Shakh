import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/Layout/Footer";
import SearchAppBar from "../../component/Layout/Headerr";

function Series() {
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
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>Obunalar</Typography>
          <Box sx={{ marginTop: "30px" }}>
            <Breadcrumbs sx={{ color: "white" }}>
              <Link underline="hover" color="inherit" to="/" style={{ textDecoration: "none", color: "white" }}>
                Bosh sahifa
              </Link>
              <Typography sx={{ color: "#ffffff80" }}>Obunalar</Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ marginTop: "25px", display: "flex", gap: "20px" }}>
            <Box sx={{ height: "370px", width: "550px", bgcolor: "rgb(29, 31, 30)", borderRadius: "20px" }}>
              <Box sx={{ padding: "26px" }}>
                <Typography sx={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Premium</Typography>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "26px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <span style={{ marginLeft: "13px" }} class="css-138jnhu">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.765 6H2.66a.66.66 0 00-.66.66v9.84c0 .365.296.66.66.66h18.105a.66.66 0 00.66-.66V6.66a.66.66 0 00-.66-.66zM15.485 18.855h-2.241v-.885h-3.062v.885H7.94a.573.573 0 000 1.145h7.544a.573.573 0 100-1.145z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        170+
                      </Typography>
                      <Typography color={"#b2b2b2"}>TV Kanallar</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.5 14.39a2.413 2.413 0 11.022-4.826 2.413 2.413 0 01-.021 4.826zm5.467 5.511a2.412 2.412 0 11.02-4.824 2.412 2.412 0 01-.02 4.824zM10.945 12a1.055 1.055 0 112.11 0 1.055 1.055 0 01-2.11 0zm1.068-3.076a2.413 2.413 0 11.021-4.827 2.413 2.413 0 01-.021 4.827zm5.466 5.512a2.412 2.412 0 11.019-4.823 2.412 2.412 0 01-.02 4.823z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        50 000+
                      </Typography>
                      <Typography color={"#b2b2b2"}>film va seriallar</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "20px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.333 18.863c-.414.093-.75.09-1.08.049.173.755 1.36 1.364 2.747 1.364 1.382 0 2.568-.604 2.746-1.364a.552.552 0 01-.084.009 2.902 2.902 0 01-.996-.058v.653a.223.223 0 01-.222.223h-2.889c-.35 0-.182-.52-.222-.876zM12 14.605c-1.182 0-1.41.325-1.431.667-.007 0-.006-.001 0 .004-.12.478.606 1.907 1.43 1.907.734 0 1.42-1.131 1.432-1.831v-.014c0-.364-.169-.733-1.431-.733zM10.542 11.991c0-1.524-.91-2.76-2.026-2.76-1.39 0-2.434 1.933-1.871 3.8v.005c.875 2.833 3.897 1.903 3.897-1.045zm-2.31.632c0-.658.4-1.192.893-1.192.186 0 .355.076.497.2a.408.408 0 00-.355.405.41.41 0 00.72.262c.022.102.035.213.035.325 0 1.567-1.79 1.573-1.79 0z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M11.777 18.054h-.003c-.23.23-.512.445-.813.582-.005.004-.01.009-.014.009l-.169.075v.574h1v-1.24zM12.258 18.085c-.013-.01-.022-.023-.035-.031v-.005l-.001-.001v1.246h1v-.57c-.234-.078-.763-.406-.963-.64zM15.48 9.231c-1.115 0-2.022 1.236-2.022 2.76 0 1.516.907 2.756 2.022 2.756.636 0 1.21-.404 1.578-1.036a2.82 2.82 0 00.293-.688c.098-.32.152-.667.152-1.032 0-1.524-.907-2.76-2.023-2.76zm-.609 4.578c-.497 0-.897-.533-.897-1.186 0-.116.013-.223.035-.33a.407.407 0 10.364-.662.751.751 0 01.498-.2c.494 0 .898.534.898 1.192 0 .653-.404 1.186-.898 1.186z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M19.63 13.142V9.916a4.384 4.384 0 003.036-4.183c0-2.426-1.977-4.4-4.404-4.4a4.379 4.379 0 00-4.178 3.018c-1.364-.795-2.76-.791-4.169.009a4.377 4.377 0 00-4.177-3.027 4.408 4.408 0 00-4.405 4.4 4.39 4.39 0 003.031 4.183v3.226a3.908 3.908 0 00-2.524 4.316c.32 1.973 2.142 3.4 4.11 3.244.786 0 2.314 1.965 6.05 1.965 2.653 0 4.63-1.147 5.578-1.836.462-.324 2.138.24 3.626-1.409a3.855 3.855 0 00.982-3.027 3.886 3.886 0 00-2.555-3.253zM5.736 7.402a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zm12.1 5.531c-.08.351-.213.68-.382.97-.449.781-1.164 1.288-1.973 1.288-.04 0-.076 0-.116-.009a.407.407 0 01-.173.307 4.233 4.233 0 01-1.516.715c-.253.596-.724 1.174-1.293 1.36a2.538 2.538 0 002.502.871c.28-.057.547-.164.787-.315a.228.228 0 01.306.071.223.223 0 01-.075.307c-.213.137-.449.24-.698.315-.071 1.076-1.453 1.907-3.204 1.907-1.756 0-3.134-.831-3.205-1.907a2.823 2.823 0 01-.702-.31.226.226 0 01-.08-.308.225.225 0 01.307-.075c.865.51 1.863.419 2.19.222.105-.03.306-.13.374-.169h.005c.296-.148.698-.536.724-.613-.591-.196-1.084-.813-1.324-1.44-.328-.119-1.403-.616-1.48-.956-.752.137-1.67-.236-2.258-1.248h-.005a3.65 3.65 0 01-.386-.978c-.506-2.15.763-4.151 2.355-4.151 1.36 0 2.471 1.435 2.471 3.204 0 1.218-.529 2.284-1.306 2.822.164.107.32.2.466.276.183-.929 1.423-.929 1.854-.929.444 0 1.777 0 1.866 1.058.2-.08.4-.182.6-.311-.857-.503-1.453-1.618-1.453-2.916 0-1.769 1.107-3.204 2.467-3.204s2.466 1.435 2.466 3.204c0 .329-.04.645-.11.942zm.427-5.53a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.333z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        2 200+
                      </Typography>
                      <Typography color={"#b2b2b2"}>multfilmlar</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.4c-5.294 0-9.6 4.306-9.6 9.6 0 5.293 4.306 9.6 9.6 9.6 5.293 0 9.6-4.307 9.6-9.6 0-5.294-4.307-9.6-9.6-9.6zm-1.97 5.618L16.068 12l-6.038 3.982V8.018z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        2 500+
                      </Typography>
                      <Typography color={"#b2b2b2"}>uz video</Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ marginTop: "20px", fontSize: "18px", color: "#b2b2b2" }}>
                  Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga oladi.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "26px", fontWeight: "bold", marginTop: "20px" }}>
                  49 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box sx={{ height: "370px", width: "550px", bgcolor: "rgb(29, 31, 30)", borderRadius: "20px" }}>
              <Box sx={{ padding: "26px" }}>
                <Typography sx={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Premium</Typography>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "26px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <span style={{ marginLeft: "13px" }} class="css-138jnhu">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.765 6H2.66a.66.66 0 00-.66.66v9.84c0 .365.296.66.66.66h18.105a.66.66 0 00.66-.66V6.66a.66.66 0 00-.66-.66zM15.485 18.855h-2.241v-.885h-3.062v.885H7.94a.573.573 0 000 1.145h7.544a.573.573 0 100-1.145z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        170+
                      </Typography>
                      <Typography color={"#b2b2b2"}>TV Kanallar</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.5 14.39a2.413 2.413 0 11.022-4.826 2.413 2.413 0 01-.021 4.826zm5.467 5.511a2.412 2.412 0 11.02-4.824 2.412 2.412 0 01-.02 4.824zM10.945 12a1.055 1.055 0 112.11 0 1.055 1.055 0 01-2.11 0zm1.068-3.076a2.413 2.413 0 11.021-4.827 2.413 2.413 0 01-.021 4.827zm5.466 5.512a2.412 2.412 0 11.019-4.823 2.412 2.412 0 01-.02 4.823z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        25 000+
                      </Typography>
                      <Typography color={"#b2b2b2"}>film va seriallar</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "20px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.333 18.863c-.414.093-.75.09-1.08.049.173.755 1.36 1.364 2.747 1.364 1.382 0 2.568-.604 2.746-1.364a.552.552 0 01-.084.009 2.902 2.902 0 01-.996-.058v.653a.223.223 0 01-.222.223h-2.889c-.35 0-.182-.52-.222-.876zM12 14.605c-1.182 0-1.41.325-1.431.667-.007 0-.006-.001 0 .004-.12.478.606 1.907 1.43 1.907.734 0 1.42-1.131 1.432-1.831v-.014c0-.364-.169-.733-1.431-.733zM10.542 11.991c0-1.524-.91-2.76-2.026-2.76-1.39 0-2.434 1.933-1.871 3.8v.005c.875 2.833 3.897 1.903 3.897-1.045zm-2.31.632c0-.658.4-1.192.893-1.192.186 0 .355.076.497.2a.408.408 0 00-.355.405.41.41 0 00.72.262c.022.102.035.213.035.325 0 1.567-1.79 1.573-1.79 0z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M11.777 18.054h-.003c-.23.23-.512.445-.813.582-.005.004-.01.009-.014.009l-.169.075v.574h1v-1.24zM12.258 18.085c-.013-.01-.022-.023-.035-.031v-.005l-.001-.001v1.246h1v-.57c-.234-.078-.763-.406-.963-.64zM15.48 9.231c-1.115 0-2.022 1.236-2.022 2.76 0 1.516.907 2.756 2.022 2.756.636 0 1.21-.404 1.578-1.036a2.82 2.82 0 00.293-.688c.098-.32.152-.667.152-1.032 0-1.524-.907-2.76-2.023-2.76zm-.609 4.578c-.497 0-.897-.533-.897-1.186 0-.116.013-.223.035-.33a.407.407 0 10.364-.662.751.751 0 01.498-.2c.494 0 .898.534.898 1.192 0 .653-.404 1.186-.898 1.186z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M19.63 13.142V9.916a4.384 4.384 0 003.036-4.183c0-2.426-1.977-4.4-4.404-4.4a4.379 4.379 0 00-4.178 3.018c-1.364-.795-2.76-.791-4.169.009a4.377 4.377 0 00-4.177-3.027 4.408 4.408 0 00-4.405 4.4 4.39 4.39 0 003.031 4.183v3.226a3.908 3.908 0 00-2.524 4.316c.32 1.973 2.142 3.4 4.11 3.244.786 0 2.314 1.965 6.05 1.965 2.653 0 4.63-1.147 5.578-1.836.462-.324 2.138.24 3.626-1.409a3.855 3.855 0 00.982-3.027 3.886 3.886 0 00-2.555-3.253zM5.736 7.402a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zm12.1 5.531c-.08.351-.213.68-.382.97-.449.781-1.164 1.288-1.973 1.288-.04 0-.076 0-.116-.009a.407.407 0 01-.173.307 4.233 4.233 0 01-1.516.715c-.253.596-.724 1.174-1.293 1.36a2.538 2.538 0 002.502.871c.28-.057.547-.164.787-.315a.228.228 0 01.306.071.223.223 0 01-.075.307c-.213.137-.449.24-.698.315-.071 1.076-1.453 1.907-3.204 1.907-1.756 0-3.134-.831-3.205-1.907a2.823 2.823 0 01-.702-.31.226.226 0 01-.08-.308.225.225 0 01.307-.075c.865.51 1.863.419 2.19.222.105-.03.306-.13.374-.169h.005c.296-.148.698-.536.724-.613-.591-.196-1.084-.813-1.324-1.44-.328-.119-1.403-.616-1.48-.956-.752.137-1.67-.236-2.258-1.248h-.005a3.65 3.65 0 01-.386-.978c-.506-2.15.763-4.151 2.355-4.151 1.36 0 2.471 1.435 2.471 3.204 0 1.218-.529 2.284-1.306 2.822.164.107.32.2.466.276.183-.929 1.423-.929 1.854-.929.444 0 1.777 0 1.866 1.058.2-.08.4-.182.6-.311-.857-.503-1.453-1.618-1.453-2.916 0-1.769 1.107-3.204 2.467-3.204s2.466 1.435 2.466 3.204c0 .329-.04.645-.11.942zm.427-5.53a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.333z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        2 200+
                      </Typography>
                      <Typography color={"#b2b2b2"}>multfilmlar</Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ marginTop: "20px", fontSize: "18px", color: "#b2b2b2" }}>
                  Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga olmaydi.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "20px" }}>
                  29 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box sx={{ height: "370px", width: "550px", bgcolor: "rgb(29, 31, 30)", borderRadius: "20px" }}>
              <Box sx={{ padding: "26px" }}>
                <Typography sx={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Premium</Typography>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "26px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <span style={{ marginLeft: "13px" }} class="css-138jnhu">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.765 6H2.66a.66.66 0 00-.66.66v9.84c0 .365.296.66.66.66h18.105a.66.66 0 00.66-.66V6.66a.66.66 0 00-.66-.66zM15.485 18.855h-2.241v-.885h-3.062v.885H7.94a.573.573 0 000 1.145h7.544a.573.573 0 100-1.145z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        120+
                      </Typography>
                      <Typography color={"#b2b2b2"}>TV Kanallar</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.5 14.39a2.413 2.413 0 11.022-4.826 2.413 2.413 0 01-.021 4.826zm5.467 5.511a2.412 2.412 0 11.02-4.824 2.412 2.412 0 01-.02 4.824zM10.945 12a1.055 1.055 0 112.11 0 1.055 1.055 0 01-2.11 0zm1.068-3.076a2.413 2.413 0 11.021-4.827 2.413 2.413 0 01-.021 4.827zm5.466 5.512a2.412 2.412 0 11.019-4.823 2.412 2.412 0 01-.02 4.823z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        25 000+
                      </Typography>
                      <Typography color={"#b2b2b2"}>film va seriallar</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "60px", marginTop: "20px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      style={{
                        width: "50px",
                        height: "38px",
                        border: "none",
                        backgroundColor: "#ffffff1a",
                        borderRadius: "30px",
                        color: "white",
                        marginLeft: "5px",
                        cursor: "default",
                        paddingTop: "14px",
                        ":hover": {
                          backgroundColor: "rgba(203, 203, 203, 0.100)",
                        },
                      }}
                    >
                      <svg
                        style={{ marginLeft: "13px" }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.333 18.863c-.414.093-.75.09-1.08.049.173.755 1.36 1.364 2.747 1.364 1.382 0 2.568-.604 2.746-1.364a.552.552 0 01-.084.009 2.902 2.902 0 01-.996-.058v.653a.223.223 0 01-.222.223h-2.889c-.35 0-.182-.52-.222-.876zM12 14.605c-1.182 0-1.41.325-1.431.667-.007 0-.006-.001 0 .004-.12.478.606 1.907 1.43 1.907.734 0 1.42-1.131 1.432-1.831v-.014c0-.364-.169-.733-1.431-.733zM10.542 11.991c0-1.524-.91-2.76-2.026-2.76-1.39 0-2.434 1.933-1.871 3.8v.005c.875 2.833 3.897 1.903 3.897-1.045zm-2.31.632c0-.658.4-1.192.893-1.192.186 0 .355.076.497.2a.408.408 0 00-.355.405.41.41 0 00.72.262c.022.102.035.213.035.325 0 1.567-1.79 1.573-1.79 0z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M11.777 18.054h-.003c-.23.23-.512.445-.813.582-.005.004-.01.009-.014.009l-.169.075v.574h1v-1.24zM12.258 18.085c-.013-.01-.022-.023-.035-.031v-.005l-.001-.001v1.246h1v-.57c-.234-.078-.763-.406-.963-.64zM15.48 9.231c-1.115 0-2.022 1.236-2.022 2.76 0 1.516.907 2.756 2.022 2.756.636 0 1.21-.404 1.578-1.036a2.82 2.82 0 00.293-.688c.098-.32.152-.667.152-1.032 0-1.524-.907-2.76-2.023-2.76zm-.609 4.578c-.497 0-.897-.533-.897-1.186 0-.116.013-.223.035-.33a.407.407 0 10.364-.662.751.751 0 01.498-.2c.494 0 .898.534.898 1.192 0 .653-.404 1.186-.898 1.186z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M19.63 13.142V9.916a4.384 4.384 0 003.036-4.183c0-2.426-1.977-4.4-4.404-4.4a4.379 4.379 0 00-4.178 3.018c-1.364-.795-2.76-.791-4.169.009a4.377 4.377 0 00-4.177-3.027 4.408 4.408 0 00-4.405 4.4 4.39 4.39 0 003.031 4.183v3.226a3.908 3.908 0 00-2.524 4.316c.32 1.973 2.142 3.4 4.11 3.244.786 0 2.314 1.965 6.05 1.965 2.653 0 4.63-1.147 5.578-1.836.462-.324 2.138.24 3.626-1.409a3.855 3.855 0 00.982-3.027 3.886 3.886 0 00-2.555-3.253zM5.736 7.402a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zm12.1 5.531c-.08.351-.213.68-.382.97-.449.781-1.164 1.288-1.973 1.288-.04 0-.076 0-.116-.009a.407.407 0 01-.173.307 4.233 4.233 0 01-1.516.715c-.253.596-.724 1.174-1.293 1.36a2.538 2.538 0 002.502.871c.28-.057.547-.164.787-.315a.228.228 0 01.306.071.223.223 0 01-.075.307c-.213.137-.449.24-.698.315-.071 1.076-1.453 1.907-3.204 1.907-1.756 0-3.134-.831-3.205-1.907a2.823 2.823 0 01-.702-.31.226.226 0 01-.08-.308.225.225 0 01.307-.075c.865.51 1.863.419 2.19.222.105-.03.306-.13.374-.169h.005c.296-.148.698-.536.724-.613-.591-.196-1.084-.813-1.324-1.44-.328-.119-1.403-.616-1.48-.956-.752.137-1.67-.236-2.258-1.248h-.005a3.65 3.65 0 01-.386-.978c-.506-2.15.763-4.151 2.355-4.151 1.36 0 2.471 1.435 2.471 3.204 0 1.218-.529 2.284-1.306 2.822.164.107.32.2.466.276.183-.929 1.423-.929 1.854-.929.444 0 1.777 0 1.866 1.058.2-.08.4-.182.6-.311-.857-.503-1.453-1.618-1.453-2.916 0-1.769 1.107-3.204 2.467-3.204s2.466 1.435 2.466 3.204c0 .329-.04.645-.11.942zm.427-5.53a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.333z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Typography color={"white"} sx={{ fontWeight: "bold" }}>
                        2 200+
                      </Typography>
                      <Typography color={"#b2b2b2"}>multfilmlar</Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ marginTop: "20px", fontSize: "18px", color: "#b2b2b2" }}>
                  Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga olmaydi.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "20px" }}>
                  19 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ color: "white", fontSize: "30px", fontWeight: "bold", marginTop: "40px" }}>
            Qo'shimcha obunalar
          </Typography>
          <Box sx={{ display: "flex", gap: "25px", marginTop: "30px" }}>
            <Box
              sx={{
                width: "350px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>UZ Video</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  O'zbek Milliy filmlari va seriallarini, shuningdek milliy mashhur telekanallarida yoshlarning yorqin
                  dasturlarini tomosha qilishdan zavqlaning.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "50px" }}>
                  10 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "350px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>setanta-tv</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  Setanta Sports 1 va Setanta Sports 2 telekanallarida dunyodagi turli va eng yirik sport musobaqalarini
                  tomosha qiling.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "76px" }}>
                  14 999 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "350px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>Wink</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  Wink original seriallari, shuningdek, CTC kanalidagi filmlar va seriallar.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "107px" }}>
                  16 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "350px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>start-ru</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  START platformasidan, «Содержанки», «Папины дочки. Новые», «Бедные Абрамовичи» va boshqa ko’plab rus
                  seriallarining eksklyuziv premyeralari.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "30px" }}>
                  16 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "25px", marginTop: "25px" }}>
            <Box
              sx={{
                width: "281px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>Amediateka</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  Jahon studiyalarining original Amedia dublyajidagi eng yaxshi seriyalar: HBO, FOX, Showtime, Startz,
                  BBC, CBS, Sony Pictures.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "70px" }}>
                  16 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "281px",
                height: "300px",
                bgcolor: "rgb(29, 31, 30)",
                borderRadius: "20px",
                padding: "26px",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>premier-one</Typography>
                <Typography sx={{ marginTop: "40px", fontSize: "18px", color: "#b2b2b2" }}>
                  «THT» kanalining yangi komik filmlari, seriallari va ko’rsatuvlari, shu jumladan: «Stand UP», «Comedy
                  Club», «Концерты», «Однажды в России» va boshqalar
                </Typography>
                <Typography sx={{ color: "white", fontSize: "23px", fontWeight: "bold", marginTop: "18px" }}>
                  15 000 dan sotib oling
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Series;
