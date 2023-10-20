import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/ContactForm/Contact"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const Work = lazy(() => import("./pages/Works/Work"));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/Resume"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/Work"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Work />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
