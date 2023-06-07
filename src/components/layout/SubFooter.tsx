"use client";

const SubFooter = () => {
  return (
    <footer>
      <hr />
      <div className="grid justify-between py-5 px-10 sm:px-0 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 sm:wrapper gap-y-6 lg:gap-y-0 ">
        <div className="text-[#666666] text-base ">
          Copyright © 2023 Dine Market
        </div>
        <div className="text-[#666666] text-base">
          Design by.{" "}
          <span className="font-bold text-[#212121]"> Weird Design Studio</span>
        </div>
        <div>
          Code by.{" "}
          <span className="font-bold text-[#212121] ">
            shabrina12 on github
          </span>
        </div>
      </div>
    </footer>
  );
};
export default SubFooter;
