import { Routes, Route } from "react-router-dom";
// import Cta from "./Section/Cta";
// import Features from "./Section/Features";
// import Footer from "./Section/Footer";

// import Hero from "./Section/Hero";
// import NavBar from "./Section/NavBar";
// import Testimonials from "./Section/Testimonials";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import MainLayout from "./Layouts/MainLayout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
