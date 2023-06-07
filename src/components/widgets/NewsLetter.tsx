"use cient";

const NewsLetter = () => {
  return (
    <section className="h-96 bg-slate-50 text-center flex flex-col justify-center wrapper items-center">
      <div className="text-center border- space-y-5">
        <h2 className="text-4xl font-bold text-center ">
          Subscribe Our Newsletter
        </h2>
        <h4 className="text-base font-normal text-[#212121] ">
          Get the latest information and promo offers directly
        </h4>
        <h3 className="text-[#f2f3f7] absolute hidden lg:visible  left-80 top-48 text-center -z-10 tracking-wide text-9xl font-bold ">
          Newsletter
        </h3>
        <div className="flex gap-x-2 justify-center items-center  sm:flex-row flex-col gap-y-4  ">
          <input
            type="email"
            name=""
            id=""
            placeholder="input ypur email"
            required
            className="w-72 focus:ring-0 px-3 border-spacing-1 border-black border-2  py-2"
          />
          <button className="bg-black px-3 py-2 text-white">Get Started</button>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
