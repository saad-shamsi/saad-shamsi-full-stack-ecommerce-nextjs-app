"use client";
import asset9 from "../../../public/asset 9.png";
import Image from "next/image";

const Feature = () => {
  return (
    <main className="h-screen mt-32  bg-[#fbfcff]">
      <div className="inline-block ml-16 xl:ml-0  md:text-5xl text-4xl font-bold text-left text-[#212121] max-w-md leading-tight tracking-wide static z-20 top-0 left-11 xl:relative xl:left-[44rem]  xl:top-14 ">
        Unique and Authentic Vintage Designer Jewellery
      </div>
      {/* <div className="inline-block invisible lg:visible relative  text-8xl tracking-widest max-w-sm font-extrabold text-[#f2f3f7] top-96 right-96 z-0">
        Different From Otherrs
      </div> */}
      {/* Main div */}
      <div className="flex flex-col md:flex-row   ">
        {/* Left side */}
        <div className="md:w-1/2 w-full  grid grid-cols-2 gap-x-6 gap-y-10 py-20 px-20 z-20">
          <div>
            <p className="text-xl font-semibold  text-[#212121] max-w-[200px]">
              Using Good Quality Materials
            </p>
            <p className="text-lg font-thin max-w-[200px] mt-4">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold  text-[#212121] max-w-[200px]">
              Using Good Quality Materials
            </p>
            <p className="text-lg font-thin max-w-[200px] mt-4">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold  text-[#212121] max-w-[200px]">
              Using Good Quality Materials
            </p>
            <p className="text-lg font-thin max-w-[200px] mt-4">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold  text-[#212121] max-w-[200px]">
              Using Good Quality Materials
            </p>
            <p className="text-lg font-thin max-w-[200px] mt-4">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 w-full  flex justify-center items-center gap-x-8 gap-y-12 flex-col sm:flex-row">
          {/* Image */}
          <div className="w-[300px] h-[350px]">
            <Image src={asset9} alt="" />
          </div>
          {/* content */}
          <div className="space-y-4">
            <p className="text-base max-w-xs">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="bg-[#212121] px-4 py-2 text-white ">
              See All Product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Feature;
