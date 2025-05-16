const Hero = () => {
  return (
    <header className="w-full bg-primary-midnight-green p-20 relative">
      <div className="grid grid-cols-2 justify-between items-center container gap-[2rem]">
        <img
          src="./assets/bg-pattern-home-1.svg"
          alt="img"
          className="size-[10rem] -left-15 bottom-30 absolute "
        />
        <h1 className="text-[100px] font-bold text-primary-white leading-[6.5rem]">
          Find the best <spn className="text-primary-light-coral">talent</spn>
        </h1>

        <div>
          <div className=" h-1 w-[60px] bg-secondary-rapture-blue mb-10" />
          <p className="font-semibold text-primary-white leading-small">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
          <img
            src="./assets/bg-pattern-home-2.svg"
            className="absolute right-15 bottom-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
