import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import CommonWrapper from "../CommonWrapper";
// import "./Header.css";
import bag1 from "../../assets/header/bags/1.png";
import bag2 from "../../assets/header/bags/2.png";
import bag3 from "../../assets/header/bags/3.png";
import bag4 from "../../assets/header/bags/5.png";

const Header = () => {
  const bags = [bag1, bag2, bag3, bag4];

  const positions = [
    { top: 600, left: 250 },
    { top: 680, left: 630 },
    { top: 680, left: 1030 },
    { top: 580, left: 1420 },
  ];
  const bagAnimation = (index) => ({
    initial: positions[index], // Each bag starts at its assigned pillar
    animate: {
      top: [
        positions[index].top, // Start position
        positions[(index + 1) % positions.length].top, // Move to next pillar
        positions[(index + 2) % positions.length].top, // Move to next pillar
        positions[(index + 3) % positions.length].top, // Move to next pillar
        positions[index].top, // Return smoothly to the original position
      ],
      left: [
        positions[index].left, // Start position
        positions[(index + 1) % positions.length].left, // Move to next pillar
        positions[(index + 2) % positions.length].left, // Move to next pillar
        positions[(index + 3) % positions.length].left, // Move to next pillar
        positions[index].left, // Return smoothly to the original position
      ],
      transition: {
        duration: 8, // Full cycle duration
        ease: "easeInOut", // Smooth movement
        times: [0, 0.25, 0.5, 0.75, 1], // Ensures continuous looping
        repeat: Infinity, // Infinite loop
      },
    },
  });

  return (
    <div className="bg-gradient-to-r from-[#F1FBFF] from-0% via-[#F1EDEB] via-49.68% to-[#F8DAB0] to-50.53% h-[1123px] overflow-hidden relative">
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
        <div className="">
          <div>
            <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute top-[843px]" />
            <div className="lg:w-[365px] lg:h-[79px] bg-[#F8DAB0] absolute top-[808px] rounded-[50%]" />
            <div>
              {bags.map((bag, index) => (
                <motion.img
                  key={index}
                  src={bag}
                  alt={`Bag ${index + 1}`}
                  className="absolute lg:w-[245px] lg:h-[284px] z-10"
                  variants={bagAnimation(index)}
                  initial="initial"
                  animate="animate"
                />
              ))}
            </div>
          </div>
          <div>
            <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute lg:top-[939px] lg:left-[585px]" />
            <div className="lg:w-[365px] lg:h-[79px] bg-[#F8DAB0] absolute top-[904px] left-[585px] rounded-[50%]" />
          </div>
          <div>
            <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute lg:top-[939px] lg:left-[970px]" />
            <div className="lg:w-[365px] lg:h-[79px] bg-[#F8DAB0] absolute top-[904px] left-[970px] rounded-[50%]" />
          </div>
          <div>
            <div className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute lg:top-[843px] lg:left-[1355px]" />
            <div className="lg:w-[365px] lg:h-[79px] bg-[#F8DAB0] absolute top-[808px] left-[1355px] rounded-[50%]" />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Header;
