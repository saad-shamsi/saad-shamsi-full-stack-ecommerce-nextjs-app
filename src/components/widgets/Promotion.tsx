"use client";
import Image from "next/image";
import asset6 from "../../../public/asset 6.png";
import asset7 from "../../../public/asset 7.png";
import asset8 from "../../../public/asset 8.png";
const Promotion = () => {
  return (
    <article className="h-screen wrapper">
      <div className=" mt-28">
        <div className="font-semibold text-md text-[#0062f5] text-center">
          PROMOTIONS
        </div>
        <div className="text-4xl font-bold text-center text-[#212121]">
          Our Promotions Events
        </div>

        {/* boxes */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-rows-2 gap-5 mt-10 grid-flow-row  ">
          <div className="col-span-2 bg-[#d6d6d8]  min-h-[200px] flex justify-around max-h-[200px]">
            {" "}
            <div className="justify-center items-center flex flex-col">
              <div className="text-4xl font-semibold text-[#212121] max-w-xs ">
                GET UP TO <span className="text-5xl font-bold"> 60%</span>
              </div>
              <div className="text-lg font-normal text-[#212121] max-w-sm text-start">
                For the summer season
              </div>
            </div>
            <div>
              <Image src={asset6} alt="" width={260} />
            </div>
          </div>
          <div className="row-span-2 bg-[#efe1c7]  pt-6  ">
            {" "}
            <div className="font-normal   text-xl leading-6 pl-5  tracking-wide ">
              Flex Sweatshirt
            </div>
            <div className="flex gap-3 items-center text-2xl pl-5 ">
              <div className="line-through text-xl font-medium text-black/80 space-x-2">
                $100.00
              </div>
              <div className="text-black font-semibold ">$75.00</div>
            </div>
            <Image src={asset7} alt="" />
          </div>
          <div className="row-span-2 bg-[#d7d7d9]  pt-5 ">
            {" "}
            <div className="font-normal   text-xl leading-6 pl-5  tracking-wide ">
              Flex Push Button Bomber
            </div>
            <div className="flex gap-3 items-center text-2xl pl-5 ">
              <div className="line-through text-xl font-medium text-black/80 space-x-2">
                $225.00
              </div>
              <div className="text-black font-semibold ">$190.00</div>
            </div>
            <Image src={asset8} alt="" />
          </div>
          <div className="col-span-2 min-h-[200px] bg-[#212121] text-[#fff] flex flex-col justify-center items-center ">
            <div className="text-4xl font-bold nt-5 ">GET 30% Off</div>
            <div className="text-sm mt-3">USE PROMO CODE</div>
            <div className="tracking-[0.3rem] font-bold text-white text-lg bg-[#474747] py-1.5 px-8 mt-1 rounded-md">
              DINEWEEKENDSALE
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Promotion;
