const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleHover=()=>{
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`}
    onMouseOver={(handleHover)}>

        <div className="justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-3xl">
            <img src={imgURL.thumbnail} alt="shoe collection" 
            className="h-[130px] w-[157px] p-2"/>
        </div>
        
    </div>
  )
}

export default ShoeCard