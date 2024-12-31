import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className=" flex justify-center justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div>
        <img src={offer}   width={773}
         className="w-[773px] h-[687px]: object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special
          <span className="text-coral-red"> Offer</span>
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label='learn more'/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
