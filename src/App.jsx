import Features from "./Section/Features";
import Hero from "./Section/Hero";
import NavBar from "./Section/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <Features />
      </main>
    </>
  );
};

export default App;
