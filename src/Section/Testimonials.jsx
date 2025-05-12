import { TestimonialsFeatures } from "../Constants";

const Testimonials = () => {
  return (
    <section className="py-[6rem] px-0 w-full bg-primary-midnight-green">
      <div className="container">
        <h2 className="text-center text-primary-white font-bold text-4xl mb-8">
          Delivering real results for top <br />
          companies. Some of our{" "}
          <span className="text-secondary-rapture-blue">success stories.</span>
        </h2>
        <div className="grid grid-cols-3 gap-5 p-10">
          {TestimonialsFeatures.map((item) => (
            <figure key={item.id}>
              <img
                src="./assets/icon-quotes.svg"
                alt="quotes"
                className="mx-auto -mb-5 z-0 size-[4rem]"
              />
              <blockquote className="text-primary-white font-semibold text-md">
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
      </div>
    </section>
  );
};

export default Testimonials;
