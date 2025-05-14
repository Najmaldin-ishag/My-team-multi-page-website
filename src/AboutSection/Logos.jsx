import { LogosIcons } from "../Constants";

const Logos = () => {
  return (
    <section className="w-full bg-secondary-dark-green py-[6.5rem] px-0">
      <div className="container">
        <h2 className="text-primary-white text-[3rem] text-center font-semibold mb-8">
          Some Of our clients
        </h2>
        <div className="flex items-center justify-around">
          {LogosIcons.map((icon) => (
            <img
              src={icon.imgPath}
              key={icon.id}
              alt="icon"
              className="w-[10rem] h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
