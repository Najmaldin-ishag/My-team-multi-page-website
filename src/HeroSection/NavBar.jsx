import { useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY && currentScrollY > 100) {
  //       // Scrolling down
  //       setIsSticky(true);
  //     } else {
  //       // Scrolling up
  //       setIsSticky(false);
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  function toggleNavigation() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  function handleClick() {
    if (!isOpen) return;
    setIsOpen(false);
  }
  return (
    <header className="w-full bg-primary-midnight-green p-10 relative">
      <nav className=" container flex items-center justify-between ">
        <div className="flex items-center justify-between gap-[3.5rem] ">
          <div className="flex items-center justify-between gap-5">
            <div>
              <img src="./assets/logo.svg" alt="logo " />
            </div>

            <div className="lg:hidden md:hidden max-sm:block z-70  right-5 absolute ">
              {isOpen ? (
                <button onClick={toggleNavigation}>
                  <img src="./assets/icon-close.svg" alt="icon" />
                </button>
              ) : (
                <button onClick={toggleNavigation}>
                  <img src="./assets/icon-hamburger.svg" alt="icon" />
                </button>
              )}
            </div>
          </div>

          <Link
            to="/"
            className="text-m text-primary-white font-semibold max-sm:hidden hover:text-primary-light-coral "
          >
            Home
          </Link>
          <Link
            to="About"
            className="text-m text-primary-white max-sm:hidden font-semibold hover:text-primary-light-coral "
          >
            About
          </Link>
        </div>
        <div>
          <Button
            href="/contact-us"
            title="Contact us"
            className="cursor-pointer max-sm:hidden text-primary-white font-semibold border border-primary-white p-2 rounded-full hover:text-primary-midnight-green hover:bg-primary-white"
          />
        </div>
      </nav>

      {/* <button onClick={toggleNavigation}>
        {isOpen ? (
          <img src="./assets/icon-close.svg" alt="icon" />
        ) : (
          <img src="./assets/icon-hamburger.svg" alt="icon" />
        )}
      </button> */}
      {/* Mobile nav */}

      {isOpen && (
        <div className="md:hidden lg:hidden  absolute  top-0 right-0  py-5 gap-4 items-center bg-secondary-rapture-blue  w-[250px] h-screen z-50 ">
          <div className="translate-y-1/2 flex flex-col gap-6 items-center justify-between ">
            <Link
              onClick={handleClick}
              to="/"
              className="text-m text-primary-white font-semibold hover:text-primary-light-coral"
            >
              Home
            </Link>
            <Link
              onClick={handleClick}
              to="/about"
              className="text-m text-primary-white font-semibold hover:text-primary-light-coral"
            >
              About
            </Link>
            <Button
              onClick={handleClick}
              href="/contact-us"
              title="Contact us"
              className="cursor-pointer text-primary-white font-semibold border border-primary-white p-2 rounded-full hover:text-primary-midnight-green hover:bg-primary-white"
            />
            {/* <div className="">
              <img
                src="./assets/bg-pattern-about-1-mobile-nav-1.svg"
                alt="icon"
                className="w-[6.5rem] h-auto "
              />
            </div> */}
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default NavBar;
