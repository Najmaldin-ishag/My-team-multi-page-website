import Cta from "./Section/Cta";
import Features from "./Section/Features";
import Footer from "./Section/Footer";
import Hero from "./Section/Hero";
import NavBar from "./Section/NavBar";
import Testimonials from "./Section/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <Features />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </>
  );
};

export default App;
