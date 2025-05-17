import { features, icons, MobileFeatures } from "../Constants";

const Features = () => {
  return (
    <section className="w-full bg-secondary-dark-green p-[5rem]">
      <div className="container grid grid-cols-2 justify-between items-center max-sm:hidden">
        <div>
          <div className=" h-1 w-[60px] bg-primary-light-coral mb-10" />
          <p className="font-bold text-primary-white text-[2rem] leading-[2.2rem]">
            Build & manage
            <br />
            distributed teams <br /> like no one else.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            {icons.map((icon) => (
              <img
                src={icon.imgPath}
                alt={icon.alt}
                className="flex items-center flex-col mb-10"
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {features.map((item) => (
              <>
                <h3 className="text-primary-light-coral font-semibold text-md mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-white font-semibold">
                  {item.description}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Features */}
      <div className=" lg:hidden md:hidden">
        <div className=" h-1 w-[60px] bg-primary-light-coral mb-10" />
        <p className="font-bold text-primary-white text-[2rem] leading-[2.2rem]">
          Build & manage
          <br />
          distributed teams <br /> like no one else.
        </p>
        <div>
          {MobileFeatures.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 justify-between items-center mt-10"
            >
              <img src={item.imgPath} alt={item.id} className="mx-auto mb-5 " />
              <h3 className="text-primary-light-coral font-semibold text-md mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-primary-white font-semibold">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
