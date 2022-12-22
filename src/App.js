import "./styles/App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Booking from "./components/pages/Booking";
import Career from "./components/pages/Career";
import Advertising from "./components/pages/Advertising";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Video from "./components/videos/Video";
import Photos from "./components/photos/Photos";
import PDFreader from "./components/helper/PDFreader.js";
import Videos from "./components/videos/Videos";
import { ErrorBoundary } from "react-error-boundary";

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
        <div className="pageContainer">
          <Navbar />
          <div className="pageContent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/video/:filename/:extension" element={<Video />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/career" element={<Career />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/pdf-reader" element={<PDFreader />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
