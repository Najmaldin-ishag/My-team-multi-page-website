const Hero = () => {
  return (
    <header className="w-full bg-primary-midnight-green p-20 max-sm:p-10 relative">
      <div className="grid grid-cols-2 justify-between items-center container gap-[2rem] max-sm:grid-cols-1 max-sm:py-20 max-md:grid-cols-1 max-md:text-center">
        <h1 className="text-[100px] font-bold text-primary-white leading-[6.5rem] max-sm:text-center max-sm:text-6xl">
          About
        </h1>
        <div>
          <div className="  w-[60px] bg-primary-light-coral mb-10 max-sm:hidden max-md:hidden max-sm:px-[5rem]" />
          <p className="font-semibold text-primary-white leading-small max-sm:text-center max-md:text-2xl max-sm:text-[1.5rem]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
        <img
          src="./assets/bg-pattern-about-1-mobile-nav-1.svg"
          alt="background image"
          className="absolute bottom-0 -right-30 z-0 max-sm:hidden max-md:hidden lg:hidden"
        />
      </div>
    </header>
  );
};

export default Hero;
