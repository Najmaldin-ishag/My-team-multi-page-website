import { Link } from "react-router-dom";
import { socailLinks } from "../Constants";
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="w-full bg-secondary-dark-green py-[2.5rem]">
      <div className="grid grid-cols-3 gap-[.5rem] container max-sm:grid-cols-1 max-sm:items-center max-sm:text-center max-md:hidden max-sm:block">
        <div>
          <img
            src="./assets/logo.svg"
            alt="logo"
            className="mb-6 max-sm:mx-auto"
          />
          <div className="flex items-center gap-8 max-sm:block max-sm:space-x-10 max-sm:mb-10 ">
            <Link
              to="/"
              className="text-primary-white text-m font-semibold hover:text-primary-light-coral "
            >
              Home
            </Link>
            <Link
              className="text-primary-white text-m font-semibold hover:text-primary-light-coral"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
        <div>
          <address className="text-primary-white font-[200]">
            987 Hillcrest
            <br />
            Irvine, CA
            <br />
            California 92714
            <br />
            <strong className="font-normal">Call Us:</strong>
            <a href="tel:9498337432">949-833-7432</a>
          </address>
        </div>
        <div className="flex flex-col items-center gap-4 ml-auto max-sm:ml-0 max-sm:mt-10">
          <div className="flex items-center gap-4 mb-auto">
            {socailLinks.map((link) => (
              <img key={link.id} src={link.imgPath} alt="icon" />
            ))}
          </div>

          <p className="text-primary-white font-thin text-sm">
            {date} All Rights Reserved
          </p>
        </div>
      </div>

      {/* Tablet Footer */}
      <div className="lg:hidden max-sm:hidden max-md:grid grid-cols-2 p-10">
        <div>
          <img
            src="./assets/logo.svg"
            alt="logo"
            className="mb-6 max-sm:mx-auto"
          />
          <Link
            to="/"
            className="text-primary-white text-m font-semibold hover:text-primary-light-coral mr-10 "
          >
            Home
          </Link>
          <Link
            className="text-primary-white text-m font-semibold hover:text-primary-light-coral"
            to="/about"
          >
            About
          </Link>
          <div className="flex items-center gap-10 mt-10">
            {socailLinks.map((link) => (
              <img key={link.id} src={link.imgPath} alt="icon" />
            ))}
          </div>
        </div>
        <div className="ml-auto">
          <address className="text-primary-white font-[200]">
            987 Hillcrest
            <br />
            Irvine, CA
            <br />
            California 92714
            <br />
            <strong className="font-normal">Call Us:</strong>
            <a href="tel:9498337432">949-833-7432</a>
          </address>
          <p className="text-primary-white font-thin text-sm">
            {date} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
