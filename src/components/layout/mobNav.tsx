import React from "react";
const [openMenu, setMenu] = useState(true);

const MobNav = () => {
  function handleMenuButton() {
    setMenu((event) => !event);
  }
  return (
    <nav>
      {" "}
      <div className="lg:hidden flex  justify-between p-5 bg-fuchsia-600 ">
        <div className="bg-green-400 max-width: 300px;">
          <Link href="/">
            <Image src={Logo} alt="dyne logo" />{" "}
          </Link>
        </div>
        <div onClick={handleMenuButton}>
          {openMenu ? (
            <AiOutlineClose />
          ) : (
            <TfiMenuAlt className=" w-full bg-yellow-300 z-10 " />
          )}
          <div className="pt-10">
            {openMenu && (
              <ul className=" md:flex-row h-screen w-full mt-7 flex-col md:items-center justify-center xs:flex  gap-y-12 text-3xl">
                <Link href="category/female">
                  <li>Female</li>
                </Link>
                <Link href="category/male">
                  <li>Male</li>
                </Link>
                <Link href="category/kids">
                  <li>Kids</li>
                </Link>
                <Link href="/products">
                  <li>All Products</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default mob - Nav;
