import { Outlet } from "react-router-dom";
import NavBar from "../HeroSection/NavBar";
import Footer from "../HeroSection/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
