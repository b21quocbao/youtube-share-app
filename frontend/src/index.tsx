import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import ShareMovieForm from "./components/ShareMovieForm/ShareMovieForm";
import { IconContext } from "react-icons";
import { Col, Container, Row } from "react-bootstrap";
import { AppProvider } from "./provider/AppProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList />,
  },
  {
    path: "/share",
    element: <ShareMovieForm />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Container fluid>
          <Row className="mt-3 justify-content-center">
            <Col md={11} style={{ width: "80%" }}>
              <Navbar />
              <RouterProvider router={router} />
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
