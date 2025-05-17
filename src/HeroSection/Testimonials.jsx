import { TestimonialsFeatures } from "../Constants";

const Testimonials = () => {
  return (
    <section className="py-[6rem] px-0 w-full bg-primary-midnight-green relative">
      <div className="container">
        <img
          src="./assets/bg-pattern-home-4-about-3.svg"
          alt="background img"
          className="left-0 top-0 absolute  z-0"
        />
        <h2 className="text-center text-primary-white font-bold text-4xl mb-8 max-sm:text-4xl max-sm:mt-10">
          Delivering real results for top <br />
          companies. Some of our{" "}
          <span className="text-secondary-rapture-blue">success stories.</span>
        </h2>
        <div className="grid grid-cols-3 gap-5 p-10 max-sm:grid-cols-1 max-sm:py-20 max-md:grid-cols-1">
          {TestimonialsFeatures.map((item) => (
            <figure key={item.id}>
              <img
                src="./assets/icon-quotes.svg"
                alt="quotes"
                className="mx-auto -mb-5 z-0 size-[4rem]"
              />
              <blockquote className="text-primary-white font-semibold text-md max-md:text-center max-md:text-xl">
                {item.desc}
              </blockquote>
              <figcaption className="text-center mt-8">
                <span className="text-secondary-rapture-blue font-bold text-md">
                  {item.name}
                </span>
                <br />
                <span className="text-primary-white">{item.title}</span>
              </figcaption>
              <img
                src={`${item.avatar}`}
                alt="avatar"
                className="size-[4.5rem] mx-auto rounded-full border-2 border-secondary-rapture-blue mt-6"
              />
            </figure>
          ))}
        </div>
        <img
          src="./assets/bg-pattern-home-5.svg"
          className="absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
};

export default Testimonials;
