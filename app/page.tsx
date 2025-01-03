import Image from "next/image";
import Review from "./compo/Review";
import Specialities from "./compo/Specialities";
import RDishes from "./compo/RDishes";

export default function Home() {
  return (
    <div className="">
      <div className="my-80 flex flex-col justify-center">
         <Image src="/LogoB.svg" width={1800} height={0} alt="Food House Logo"/>
         <h2 className="ml-3 sm:ml-8 lg:ml-8 xl:ml-11 2xl:ml-14">Serves a bite of authenticity.</h2>
      </div>
      <div className="my-10 md:my-32"><h1 className="text-center">Why Us?</h1>
        <div className="p-10 flex flex-col gap-10 lg:flex-row justify-around">
          <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
            <Image src="/ingredients.svg" width={120} height={0} alt="Food House Logo"/>
            <h3 className="mt-5 p-2">High quality ingredients </h3>
            <p className="text-center">At Food House, we use only high-quality ingredients to ensure every dish is fresh, flavorful, and crafted to perfection.</p>
          </div>
          <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
            <Image src="/taste.svg" width={120} height={0} alt="Food House Logo"/>
            <h3 className="mt-5 p-2">Pure taste</h3>
            <p className="text-center">Experience the pure taste of perfection in every dish at Food House, where authenticity meets flavor.</p>
          </div>
          <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
            <Image src="/healthy.svg" width={120} height={0} alt="Food House Logo"/>
            <h3 className="mt-5 p-2">Serve Healthy Food</h3>
            <p className="text-center">At Food House, we’re committed to serving healthy food that’s as nourishing as it is delicious.</p>
          </div>
        </div>
      </div>
        <Specialities/>
        <RDishes/>
        <Review/>
    </div>
  );
}
