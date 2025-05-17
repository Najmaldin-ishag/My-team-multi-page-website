import { TeamMember } from "../Constants";
import Logo from "../../public/assets/icon-cross.svg?react";
import Logo2 from "../../public/assets/icon-close.svg?react";

const Team = () => {
  return (
    <section className="w-full bg-secondary-deep-jungle-green py-[8rem] px-0">
      <div className="container">
        <h3 className="text-center text-primary-white font-bold text-[3rem] mb-[4rem]">
          Meet the directors
        </h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 items-center gap-y-[5rem] justify-center max-sm:grid-cols-1 max-md:grid-cols-2  ">
          {TeamMember.map((item) => (
            <div
              key={item.id}
              className="py-5 px-2 bg-secondary-sacramento-state-green w-full max-sm:max-w-[70%] max-md:max-w-[70%] max-sm:mx-auto max-md:mx-auto  "
            >
              <div>
                <img
                  className="size-[4.5rem] mx-auto rounded-full border-2 border-secondary-rapture-blue mt-6 mb-5"
                  src={item.avatar}
                  alt={item.name}
                />
                <div className="text-center ">
                  <h3 className="text-secondary-rapture-blue font-bold text-md">
                    {item.name}
                  </h3>
                  <p className="text-primary-white font-semibold text-sm">
                    {item.title}
                  </p>
                  {/* Container div for the logo with specific styles */}
                  <div className="relative h-15 w-15 inline-block -mb-15 z-1 cursor-pointer bg-primary-light-coral rounded-full py-5 px-5">
                    <Logo className="stroke-secondary-dark-green  mx-auto  " />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center py-9 px-2 bg-secondary-sacramento-state-green w-full max-sm:max-w-[70%] max-md:p-9 max-md:ml-20 max-sm:mx-auto max-md:max-w-[70%]">
            <div>
              <h3 className="text-secondary-rapture-blue font-bold text-md">
                Aden Allan
              </h3>
              <p className="text-primary-white font-semibold text-[1.4rem] max-md:text-[1.1rem]">
                “Empowered teams create truly amazing products. Set the north
                star and let them follow it.”{" "}
              </p>

              <img
                className="mx-auto inline-block mr-4"
                src="./assets/icon-linkedin.svg"
                alt="linkedin logo"
              />
              <img
                className="mx-auto inline-block"
                src="./assets/icon-twitter.svg"
                alt="twitter logo"
              />
              <div className="flex items-center  justify-center cursor-pointer  mx-auto h-15 w-15  -mb-15 z-[1] bg-secondary-rapture-blue rounded-full py-5 px-5">
                <Logo2 className="stroke-secondary-dark-green " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
