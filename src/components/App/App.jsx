
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../Pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage"));
const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={"Loading..."}>
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
    </>
  );
};

export default App;