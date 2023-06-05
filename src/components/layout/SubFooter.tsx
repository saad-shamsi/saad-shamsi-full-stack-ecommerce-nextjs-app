"use client";

const SubFooter = () => {
  return (
    <footer>
      <hr />
      <div className="flex justify-around p-5">
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
