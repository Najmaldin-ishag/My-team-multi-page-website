import Button from "../Components/Button";

const Cta = () => {
  return (
    <section className="py-10 w-full bg-primary-light-coral relative">
      <div className="max-w-[950px] h-[100px] flex justify-between items-center text-center mx-auto my-0 max-sm:flex-col max-sm:pb-80 max-sm:pt-10">
        <h2 className="font-bold text-5xl text-secondary-dark-green z-10 max-sm:mb-[2rem] max-sm:text-7xl">
          Ready to get started?
        </h2>
        <Button
          href="contact-us"
          title="Contact us"
          className="px-10 py-2 border-2 cursor-pointer text-secondary-dark-green hover:text-primary-white hover:bg-secondary-dark-green  rounded-full border-secondary-dark-green text-sm font-semibold"
        />
        <img
          src="./assets/bg-pattern-home-6-about-5.svg"
          className="absolute left-0 bottom-0 z-0"
        />
      </div>
    </section>
  );
};

export default Cta;
