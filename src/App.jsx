import Features from "./Section/Features";
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
      </main>
    </>
  );
};

export default App;
