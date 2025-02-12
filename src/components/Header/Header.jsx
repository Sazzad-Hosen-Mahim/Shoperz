import { GoArrowUpRight } from "react-icons/go";
import CommonWrapper from "../CommonWrapper";

const Header = () => {
  return (
    <div className="h-[1123px] overflow-hidden relative">
      <div className="lg:w-[868px] mt-[202px] mx-auto">
        <h1 className="font-bold text-[72px] text-center">
          Discover Iconic Styles at <br /> Unbeatable Value
        </h1>
        <p className="lg:w-[667px] text-center mx-auto mt-8 text-[#7F7F7F]">
          From Chanel to Hermès, experience luxury at your fingertips with our
          verified and <br /> curated collections.
        </p>
        <div className="text-center mt-8 flex justify-center">
          <button className="bg-black px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
            Start Shopping
          </button>
          <button className="bg-black p-[20px] text-white rounded-full">
            <GoArrowUpRight />
          </button>
        </div>
      </div>
      {/* bag section  */}
      <CommonWrapper>
        <div className="flex">
          <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute bottom-0"></div>
          <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute bottom-0 "></div>
          <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute bottom-0"></div>
          <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute bottom-0"></div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Header;
