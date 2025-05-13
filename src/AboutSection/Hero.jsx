const Hero = () => {
  return (
    <header className="w-full bg-primary-midnight-green p-20">
      <div className="grid grid-cols-2 justify-between items-center container gap-[2rem]">
        <h1 className="text-[100px] font-bold text-primary-white leading-[6.5rem]">
          About
        </h1>
        <div>
          <div className=" h-1 w-[60px] bg-primary-light-coral mb-10" />
          <p className="font-semibold text-primary-white leading-small">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
