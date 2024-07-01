import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box } from "@mui/system";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carusel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://files.itv.uz/uploads/helper/2024/06/28//bfe36fbedccecad73e51d0b850af9337-q-1920x750.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="slide-text">
              <Box sx={{ display: "flex" }}>
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#52b038",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "17px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  Ko'rish
                </button>
              </Box>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://files.itv.uz/uploads/helper/2024/06/24//b55fc2d569d49dfc0a5e59ed2af2e79a-q-1920x750.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="slide-text">
              <img
                style={{ width: "370px", marginBottom: "40px" }}
                src="https://files.itv.uz/uploads/content/logos/2024/06/28//0da49aa501dd1ac26ff7bc3315ce5f1e.png"
                alt=""
              />
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }} class="css-1zuxot">
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.484 18.945h4.318V3.402H1.484v15.543zM15.018 3.402l-.966 7.26-.6-3.948a109.238 109.238 0 00-.502-3.312H7.53v15.543h3.662l.014-10.263 1.542 10.263h2.607l1.464-10.49.01 10.49h3.653V3.402h-5.464zM22.209 18.945V3.402h6.74a2.75 2.75 0 012.758 2.743v10.057a2.75 2.75 0 01-2.759 2.743H22.21zM27.245 6.2c-.171-.093-.499-.137-.975-.137V16.26c.629 0 1.016-.113 1.161-.35.145-.233.22-.864.22-1.899V7.986c0-.703-.026-1.152-.075-1.351a.635.635 0 00-.33-.435zM39.85 7.294h.275c1.55 0 2.807 1.214 2.807 2.71v6.231c0 1.497-1.256 2.71-2.807 2.71h-.276a2.834 2.834 0 01-2.295-1.15l-.249.95h-3.871V3.402h4.13v4.992a2.925 2.925 0 012.285-1.1zm-.885 7.58V11.19c0-.608-.04-1.008-.12-1.192-.082-.183-.407-.301-.635-.301-.228 0-.58.096-.648.257v6.234c.079.178.414.277.648.277.234 0 .576-.096.647-.277.072-.18.108-.62.108-1.315z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.5
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#rating-kp_svg__clip0_2652_17640)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.527 9.256c-.113.112-.22.22-.328.332 1.492-.082 2.978-.301 4.474-.317 2.225-.265 4.454-.434 6.683-.628.01 1.507.01 3.02 0 4.527-3.818-.353-7.636-.746-11.454-1.063l-.226.015c.287.2.62.312.949.424 3.572 1.354 7.16 2.672 10.731 4.026.005 1.584.016 3.168 0 4.752-4.213-2.31-8.394-4.675-12.602-7-.297-.163-.59-.332-.871-.516 1.737 1.86 3.562 3.638 5.34 5.462.656.69 1.399 1.308 1.963 2.08-1.65.025-3.296.015-4.946.004-.277-.23-.446-.556-.65-.843-1.261-1.854-2.522-3.714-3.793-5.563-.01 2.135.005 4.27-.01 6.412H-.395C-.4 14.386-.405 7.412-.39.431h4.177c.025 2.126-.02 4.256.025 6.387A608.416 608.416 0 008.163.438c1.686-.006 3.373-.01 5.059 0-.656.756-1.394 1.435-2.091 2.156-1.697 1.793-3.475 3.504-5.182 5.288C10.45 5.47 14.872 2.91 19.356.473c.01 1.59.01 3.178 0 4.767C15.743 6.57 12.15 7.963 8.527 9.261v-.005z"
                          fill="#fff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rating-kp_svg__clip0_2652_17640">
                          <path fill="#fff" d="M0 0h21v22H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.1
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none">
                      <g clip-path="url(#rating-itv_svg__clip0_2652_2204 0)" fill="#fff">
                        <path d="M5.149 5.595a2.375 2.375 0 100-4.751 2.375 2.375 0 000 4.75zM33.65 6.951l-4.75 8.142-4.75-8.142H19.4l7.125 12.893h4.75L38.4 6.951h-4.75zM.398 6.951v4.751a2.37 2.37 0 012.37 2.37v5.769h4.755v-5.765A7.133 7.133 0 00.398 6.95zM21.186 15.094h-4.499a2.37 2.37 0 01-2.37-2.37v-1.017h5l-2.63-4.756h-2.37V3.216h-4.74v9.505a7.133 7.133 0 007.124 7.124h7.124l-2.64-4.75z"></path>
                      </g>
                      <defs>
                        <clipPath id="rating-itv_svg__clip0_2652_22040">
                          <path fill="#fff" d="M0 0h38v26H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    9
                  </span>
                </div>
              </div>
              <p
                style={{ marginBottom: "25px" }}
                class="MuiTypography-root MuiTypography-body1 subtitle css-1j3mqhj"
                level="5"
              >
                Jangari, Drama, Melodrama, Fentezi, 2022, 18+, AQSh
              </p>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <button
                  style={{
                    width: "180px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#52b038",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "17px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  Ko'rish
                </button>
                <button
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.86 14.969c-1.159 0-2.179.57-2.82 1.435L8.5 13.567c.092-.313.156-.638.156-.981a3.49 3.49 0 00-.26-1.314l5.799-3.49a3.493 3.493 0 002.664 1.25 3.52 3.52 0 003.516-3.516A3.52 3.52 0 0016.859 2a3.52 3.52 0 00-3.515 3.516c0 .446.092.87.244 1.264l-5.816 3.5a3.493 3.493 0 00-2.631-1.21 3.52 3.52 0 00-3.516 3.516 3.52 3.52 0 003.516 3.516 3.507 3.507 0 002.853-1.477l5.522 2.828c-.102.328-.172.67-.172 1.031A3.52 3.52 0 0016.859 22a3.52 3.52 0 003.516-3.516 3.52 3.52 0 00-3.516-3.515z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </Box>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://files.itv.uz/uploads/helper/2024/06/20//11ac76fde88811ff5744f28571efb742-q-1920x750.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="slide-text">
              <Box sx={{ display: "flex" }}>
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#52b038",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "17px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  Batafsil
                </button>
              </Box>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://files.itv.uz/uploads/helper/2024/06/05//6d530f7094a078e80e4903ea3dd0ed4c-q-1920x750.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="slide-text">
              <img
                style={{ width: "370px", marginBottom: "40px" }}
                src="https://files.itv.uz/uploads/content/logos/2024/06/29//e019cb5d32f6507a5a61ebcc0c3faaeb.png"
                alt=""
              />
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }} class="css-1zuxot">
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.484 18.945h4.318V3.402H1.484v15.543zM15.018 3.402l-.966 7.26-.6-3.948a109.238 109.238 0 00-.502-3.312H7.53v15.543h3.662l.014-10.263 1.542 10.263h2.607l1.464-10.49.01 10.49h3.653V3.402h-5.464zM22.209 18.945V3.402h6.74a2.75 2.75 0 012.758 2.743v10.057a2.75 2.75 0 01-2.759 2.743H22.21zM27.245 6.2c-.171-.093-.499-.137-.975-.137V16.26c.629 0 1.016-.113 1.161-.35.145-.233.22-.864.22-1.899V7.986c0-.703-.026-1.152-.075-1.351a.635.635 0 00-.33-.435zM39.85 7.294h.275c1.55 0 2.807 1.214 2.807 2.71v6.231c0 1.497-1.256 2.71-2.807 2.71h-.276a2.834 2.834 0 01-2.295-1.15l-.249.95h-3.871V3.402h4.13v4.992a2.925 2.925 0 012.285-1.1zm-.885 7.58V11.19c0-.608-.04-1.008-.12-1.192-.082-.183-.407-.301-.635-.301-.228 0-.58.096-.648.257v6.234c.079.178.414.277.648.277.234 0 .576-.096.647-.277.072-.18.108-.62.108-1.315z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.5
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#rating-kp_svg__clip0_2652_17640)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.527 9.256c-.113.112-.22.22-.328.332 1.492-.082 2.978-.301 4.474-.317 2.225-.265 4.454-.434 6.683-.628.01 1.507.01 3.02 0 4.527-3.818-.353-7.636-.746-11.454-1.063l-.226.015c.287.2.62.312.949.424 3.572 1.354 7.16 2.672 10.731 4.026.005 1.584.016 3.168 0 4.752-4.213-2.31-8.394-4.675-12.602-7-.297-.163-.59-.332-.871-.516 1.737 1.86 3.562 3.638 5.34 5.462.656.69 1.399 1.308 1.963 2.08-1.65.025-3.296.015-4.946.004-.277-.23-.446-.556-.65-.843-1.261-1.854-2.522-3.714-3.793-5.563-.01 2.135.005 4.27-.01 6.412H-.395C-.4 14.386-.405 7.412-.39.431h4.177c.025 2.126-.02 4.256.025 6.387A608.416 608.416 0 008.163.438c1.686-.006 3.373-.01 5.059 0-.656.756-1.394 1.435-2.091 2.156-1.697 1.793-3.475 3.504-5.182 5.288C10.45 5.47 14.872 2.91 19.356.473c.01 1.59.01 3.178 0 4.767C15.743 6.57 12.15 7.963 8.527 9.261v-.005z"
                          fill="#fff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rating-kp_svg__clip0_2652_17640">
                          <path fill="#fff" d="M0 0h21v22H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.1
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none">
                      <g clip-path="url(#rating-itv_svg__clip0_2652_2204 0)" fill="#fff">
                        <path d="M5.149 5.595a2.375 2.375 0 100-4.751 2.375 2.375 0 000 4.75zM33.65 6.951l-4.75 8.142-4.75-8.142H19.4l7.125 12.893h4.75L38.4 6.951h-4.75zM.398 6.951v4.751a2.37 2.37 0 012.37 2.37v5.769h4.755v-5.765A7.133 7.133 0 00.398 6.95zM21.186 15.094h-4.499a2.37 2.37 0 01-2.37-2.37v-1.017h5l-2.63-4.756h-2.37V3.216h-4.74v9.505a7.133 7.133 0 007.124 7.124h7.124l-2.64-4.75z"></path>
                      </g>
                      <defs>
                        <clipPath id="rating-itv_svg__clip0_2652_22040">
                          <path fill="#fff" d="M0 0h38v26H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    9
                  </span>
                </div>
              </div>
              <p
                style={{ marginBottom: "25px" }}
                class="MuiTypography-root MuiTypography-body1 subtitle css-1j3mqhj"
                level="5"
              >
                Jangari, Drama, Melodrama, Fentezi, 2022, 18+, AQSh
              </p>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <button
                  style={{
                    width: "180px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#52b038",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "17px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  Ko'rish
                </button>
                <button
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.86 14.969c-1.159 0-2.179.57-2.82 1.435L8.5 13.567c.092-.313.156-.638.156-.981a3.49 3.49 0 00-.26-1.314l5.799-3.49a3.493 3.493 0 002.664 1.25 3.52 3.52 0 003.516-3.516A3.52 3.52 0 0016.859 2a3.52 3.52 0 00-3.515 3.516c0 .446.092.87.244 1.264l-5.816 3.5a3.493 3.493 0 00-2.631-1.21 3.52 3.52 0 00-3.516 3.516 3.52 3.52 0 003.516 3.516 3.507 3.507 0 002.853-1.477l5.522 2.828c-.102.328-.172.67-.172 1.031A3.52 3.52 0 0016.859 22a3.52 3.52 0 003.516-3.516 3.52 3.52 0 00-3.516-3.515z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </Box>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://files.itv.uz/uploads/helper/2024/06/12//88e1211fcd9bc3bbc416441d703cb60f-q-1920x750.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="slide-text">
              <img
                style={{ width: "370px", marginBottom: "40px" }}
                src="https://files.itv.uz/uploads/content/logos/2024/06/29//1df7f3c140c7973d3e2497bfbfb8c301.png"
                alt=""
              />
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }} class="css-1zuxot">
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.484 18.945h4.318V3.402H1.484v15.543zM15.018 3.402l-.966 7.26-.6-3.948a109.238 109.238 0 00-.502-3.312H7.53v15.543h3.662l.014-10.263 1.542 10.263h2.607l1.464-10.49.01 10.49h3.653V3.402h-5.464zM22.209 18.945V3.402h6.74a2.75 2.75 0 012.758 2.743v10.057a2.75 2.75 0 01-2.759 2.743H22.21zM27.245 6.2c-.171-.093-.499-.137-.975-.137V16.26c.629 0 1.016-.113 1.161-.35.145-.233.22-.864.22-1.899V7.986c0-.703-.026-1.152-.075-1.351a.635.635 0 00-.33-.435zM39.85 7.294h.275c1.55 0 2.807 1.214 2.807 2.71v6.231c0 1.497-1.256 2.71-2.807 2.71h-.276a2.834 2.834 0 01-2.295-1.15l-.249.95h-3.871V3.402h4.13v4.992a2.925 2.925 0 012.285-1.1zm-.885 7.58V11.19c0-.608-.04-1.008-.12-1.192-.082-.183-.407-.301-.635-.301-.228 0-.58.096-.648.257v6.234c.079.178.414.277.648.277.234 0 .576-.096.647-.277.072-.18.108-.62.108-1.315z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.5
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#rating-kp_svg__clip0_2652_17640)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.527 9.256c-.113.112-.22.22-.328.332 1.492-.082 2.978-.301 4.474-.317 2.225-.265 4.454-.434 6.683-.628.01 1.507.01 3.02 0 4.527-3.818-.353-7.636-.746-11.454-1.063l-.226.015c.287.2.62.312.949.424 3.572 1.354 7.16 2.672 10.731 4.026.005 1.584.016 3.168 0 4.752-4.213-2.31-8.394-4.675-12.602-7-.297-.163-.59-.332-.871-.516 1.737 1.86 3.562 3.638 5.34 5.462.656.69 1.399 1.308 1.963 2.08-1.65.025-3.296.015-4.946.004-.277-.23-.446-.556-.65-.843-1.261-1.854-2.522-3.714-3.793-5.563-.01 2.135.005 4.27-.01 6.412H-.395C-.4 14.386-.405 7.412-.39.431h4.177c.025 2.126-.02 4.256.025 6.387A608.416 608.416 0 008.163.438c1.686-.006 3.373-.01 5.059 0-.656.756-1.394 1.435-2.091 2.156-1.697 1.793-3.475 3.504-5.182 5.288C10.45 5.47 14.872 2.91 19.356.473c.01 1.59.01 3.178 0 4.767C15.743 6.57 12.15 7.963 8.527 9.261v-.005z"
                          fill="#fff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="rating-kp_svg__clip0_2652_17640">
                          <path fill="#fff" d="M0 0h21v22H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    8.1
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }} class="css-u6zfat">
                  <span class="source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none">
                      <g clip-path="url(#rating-itv_svg__clip0_2652_2204 0)" fill="#fff">
                        <path d="M5.149 5.595a2.375 2.375 0 100-4.751 2.375 2.375 0 000 4.75zM33.65 6.951l-4.75 8.142-4.75-8.142H19.4l7.125 12.893h4.75L38.4 6.951h-4.75zM.398 6.951v4.751a2.37 2.37 0 012.37 2.37v5.769h4.755v-5.765A7.133 7.133 0 00.398 6.95zM21.186 15.094h-4.499a2.37 2.37 0 01-2.37-2.37v-1.017h5l-2.63-4.756h-2.37V3.216h-4.74v9.505a7.133 7.133 0 007.124 7.124h7.124l-2.64-4.75z"></path>
                      </g>
                      <defs>
                        <clipPath id="rating-itv_svg__clip0_2652_22040">
                          <path fill="#fff" d="M0 0h38v26H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span style={{ marginTop: "2px" }} class="value">
                    9
                  </span>
                </div>
              </div>
              <p
                style={{ marginBottom: "25px" }}
                class="MuiTypography-root MuiTypography-body1 subtitle css-1j3mqhj"
                level="5"
              >
                Jangari, Drama, Melodrama, Fentezi, 2022, 18+, AQSh
              </p>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <button
                  style={{
                    width: "180px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "#52b038",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "17px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  Ko'rish
                </button>
                <button
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "none",
                    backgroundColor: "rgba(203, 203, 203, 0.100)255, 255, 255)",
                    borderRadius: "10px",
                    color: "white",
                    marginLeft: "5px",
                  }}
                  class="MuiButtonBase-root swiper-no-swiping css-7xbd94"
                  tabindex="0"
                  type="button"
                  aria-label="Share to socials"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.86 14.969c-1.159 0-2.179.57-2.82 1.435L8.5 13.567c.092-.313.156-.638.156-.981a3.49 3.49 0 00-.26-1.314l5.799-3.49a3.493 3.493 0 002.664 1.25 3.52 3.52 0 003.516-3.516A3.52 3.52 0 0016.859 2a3.52 3.52 0 00-3.515 3.516c0 .446.092.87.244 1.264l-5.816 3.5a3.493 3.493 0 00-2.631-1.21 3.52 3.52 0 00-3.516 3.516 3.52 3.52 0 003.516 3.516 3.507 3.507 0 002.853-1.477l5.522 2.828c-.102.328-.172.67-.172 1.031A3.52 3.52 0 0016.859 22a3.52 3.52 0 003.516-3.516 3.52 3.52 0 00-3.516-3.515z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </Box>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
