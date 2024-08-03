import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Suspense, lazy } from "react";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../Pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../../Pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

function App() {
  return (
    <div className={s.box}>
      <Navigation />
      <ScrollToTopButton />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;