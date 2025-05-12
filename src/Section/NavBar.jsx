import Button from "../Components/Button";

const NavBar = () => {
  return (
    <div className="w-full bg-primary-midnight-green p-10">
      <nav className=" container flex items-center justify-between">
        <div className="flex items-center justify-between gap-[3.5rem]">
          <img src="./assets/logo.svg" alt="logo" />
          <span className="text-m text-primary-white font-semibold">Home</span>
          <span className="text-m text-primary-white  font-semibold">
            About
          </span>
        </div>
        <div>
          <Button
            href="href"
            title="Contact us"
            classname="cursor-pointer text-primary-white font-semibold border border-primary-white p-2 rounded-full"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
