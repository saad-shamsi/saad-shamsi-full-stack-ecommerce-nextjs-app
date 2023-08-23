import { BsFillEmojiFrownFill } from "react-icons/bs";

const page = () => {
  return (
    <div className="flex justify-center items-center gap-5  h-[50vh]">
      <h1 className="text-6xl font-bold text-center">No Category found</h1>

      <div>
        <BsFillEmojiFrownFill size={200} className="text-red-600" />
      </div>
    </div>
  );
};
export default page;
