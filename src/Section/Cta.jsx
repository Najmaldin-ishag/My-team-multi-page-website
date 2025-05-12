import Button from "../Components/Button";

const Cta = () => {
  return (
    <section className="py-10 w-full bg-primary-light-coral">
      <div className="max-w-[950px] h-[100px] flex justify-between items-center text-center mx-auto my-0">
        <h2 className="font-bold text-5xl text-secondary-dark-green">
          Ready to get started?
        </h2>
        <Button
          title="Contact us"
          classname="px-10 py-2 border-2 cursor-pointer border-secondary-dark-green rounded-full text-secondary-dark-green text-lg font-semibold"
        />
      </div>
    </section>
  );
};

export default Cta;
