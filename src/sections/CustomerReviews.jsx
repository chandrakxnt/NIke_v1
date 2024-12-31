import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about thier
        expceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            imgURL={review.imgURL}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
