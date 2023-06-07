"use client";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Logo from "../../../public/logo.webp";
const Footer = () => {
  return (
    <footer>
      <div className="text-[#666666] sm:wrapper px-10 sm:px-0 py-32 gap-10 flex mx-auto  md:flex-row flex-col">
        {/* left side logo */}
        <div className="md:w-1/3 w-full flex flex-col gap-y-6 ">
          <div>
            <Image src={Logo} alt="" />
          </div>
          <p className="max-w-xs">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>

          {/* ICons */}
          <div className="flex gap-x-5 ">
            <FaTwitter className="text-blue-500 text-2xl " />
            <GrFacebookOption className="text-blue-600 text-2xl" />
            <BsLinkedin className="text-blue-800 text-2xl" />
          </div>
        </div>
        {/* right side */}
        <div className="w-full  grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-y-10">
          <div className="">
            <h5 className="text-xl font-semibold mb-4 items-center ">
              Company
            </h5>
            <ul className="space-y-2 ">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className=" text-xl font-semibold mb-4 items-center ">
              Support
            </h5>
            <ul className="space-y-2 text-[#666666]">
              <li> Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>

          <div>
            <h5 className=" text-xl font-semibold mb-4 items-center ">
              Contact
            </h5>
            <ul className="space-y-2 ">
              <li> Whatsapp</li>
              <li>Support 24h</li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </footer>
  );
};
export default Footer;
