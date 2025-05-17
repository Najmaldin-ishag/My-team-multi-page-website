const Hero = () => {
  return (
    <header className="w-full bg-primary-midnight-green p-20 relative max-sm:p-10 ">
      <div className="grid grid-cols-2 justify-between items-center container gap-[2rem] max-sm:grid-cols-1 max-sm:py-3 max-sm:pb-50 max-md:grid-cols-1 max-md:pb-50">
        <img
          src="./assets/bg-pattern-home-1.svg"
          alt="img"
          className="size-[10rem] -left-15 bottom-30 absolute max-sm:hidden max-md:hidden "
        />
        <h1 className="text-[6rem] font-bold text-primary-white leading-[6.5rem] max-sm:text-center max-md:text-center ">
          Find the best <span className="text-primary-light-coral">talent</span>
        </h1>

        <div>
          <div className=" h-1 w-[60px] bg-secondary-rapture-blue mb-10 max-sm:hidden max-md:hidden " />
          <p className="font-semibold text-primary-white leading-small max-sm:text-3xl max-sm:text-center max-md:text-3xl max-md:text-center">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
          <img
            src="./assets/bg-pattern-home-2.svg"
            className="absolute right-15 bottom-0 max-sm:w-[50%] max-md:left-50 max-md:right-50  max-md:w-[50%]"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
