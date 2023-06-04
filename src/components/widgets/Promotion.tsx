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
        <div className="grid grid-cols-4 grid-rows-2 gap-5 mt-10 ">
          <div className="col-span-2 bg-[#d6d6d8]  min-h-[200px] flex justify-around ">
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
          <div className="row-span-2 bg-blue-400 max-h-[450px] ">
            {" "}
            <Image src={asset7} alt="" />
          </div>
          <div className=" row-span-2 bg-red-400 max-h-[450px]  ">
            {" "}
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
