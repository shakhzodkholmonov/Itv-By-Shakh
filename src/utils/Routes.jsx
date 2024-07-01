import { Route, Routes } from "react-router-dom";
import Home from "../App";
import FilmPage from "../pages/Film.page/FilmPage";
import Movies from "../pages/Movies.page/Movies";
import Series from "../pages/Series.page/Series";
import Subscribtions from "../pages/Subscribtions.page/Subscribtions";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<FilmPage />} />
      <Route path="/series" element={<Series />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/subscribtions" element={<Subscribtions />} />
    </Routes>
  );
}

export default RoutesPage;
