import Button from "../Components/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-primary-midnight-green p-10">
      <nav className=" container flex items-center justify-between">
        <div className="flex items-center justify-between gap-[3.5rem]">
          <img src="./assets/logo.svg" alt="logo" />
          <Link
            to="/"
            className="text-m text-primary-white font-semibold hover:text-primary-light-coral"
          >
            Home
          </Link>
          <Link
            to="About"
            className="text-m text-primary-white  font-semibold hover:text-primary-light-coral"
          >
            About
          </Link>
        </div>
        <div>
          <Button
            href="/contact-us"
            title="Contact us"
            className="cursor-pointer text-primary-white font-semibold border border-primary-white p-2 rounded-full hover:text-primary-midnight-green hover:bg-primary-white"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
