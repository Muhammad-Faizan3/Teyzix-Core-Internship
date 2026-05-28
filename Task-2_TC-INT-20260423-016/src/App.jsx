import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FooterServices from "./Components/FooterServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
            <Header/>
          <Services />
          </>
          }
        />

        <Route
          path="/portfolio"
          element={
            <>
            <Header/>
          <Portfolio />
          <FooterServices/>
          </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
            <Header/>
          <Contact />
          <FooterServices/>
          </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;