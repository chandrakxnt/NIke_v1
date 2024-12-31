import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} 
        className="w-[280px] h-[280px]  shadow-xl rounded-3xl hover:scale-105 transform hover:scale-x-[-1] transition-transform duration-500 
         ease-in-out"/>

        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" 
            className="w-[24px] h-[24px]"/>
            <p className="font-montserrat text-xl leading-normal text-gray-800">({rating})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard