"use client";

import Image from "next/image";
import Logo from "../../../public/logo.webp";
const Footer = () => {
  return (
    <footer>
      <div className="text-[#666666] wrapper flex ">
        {/* left side logo */}
        <div className="w-1/3 bg-yellow-300 flex flex-col gap-y-6">
          <div>
            <Image src={Logo} alt="" />
          </div>
          <p className="max-w-xs">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          {/* ICons */}
          <div className="flex"></div>
        </div>
        {/* right side */}
        <div className="w-1/2 bg-green-300  flex justify-between items-center  ">
          <div className="flex">Company</div>
          <ul className="">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
          <div>Support</div>

          <div>Contact</div>
        </div>
      </div>
      ;
    </footer>
  );
};
export default Footer;
