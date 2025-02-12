import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import bag from '../../assets/image/bag.png';

const OfferBag = () => {
    return (
        <div className="w-[1540px] mx-auto">
            {/* Featured Bag Section */}
            <div className="grid grid-cols-2 gap-8 items-center p-8 rounded-xl">
                {/* Photo Card on the Left */}
                {/* Photo Card on the Left */}
                <div className="h-[719px] w-[770px] bg-[#EBEBEB] rounded-tl-[36px] rounded-bl-[36px] flex justify-center items-center">
                    <img
                        src={bag}
                        alt="Luxury Bag"
                        className="w-[406px] h-[404px] object-cover rounded-xl"
                    />
                </div>


                {/* Second Card with specific background color on the Right */}
                {/* Second Card with specific background color on the Right */}
                <div className="bg-orange-200 p-6 rounded-tr-[36px] rounded-br-[36px] w-[770px] h-[719px] flex justify-center items-center">
                    <div className="w-[514px] h-[463px] bg-white p-6 rounded-xl text-center shadow-md flex flex-col justify-center items-center">
                        {/* Title and Description Section */}
                        <div className="w-[333px] h-[134px] flex flex-col justify-center items-center mt-8">
                            <h2 className="text-xl font-semibold">Exclusive bag offers awaits</h2>
                            <p className="text-gray-500 mt-2 text-center">
                                Lorem ipsum dolor sit amet consectetur. Phasellus ornare vitae in urna suspendisse elit arcu tellus.
                            </p>
                        </div>

                        {/* Button */}
                        <Button className="bg-black text-white flex items-center justify-center mt-4 gap-2">
                            See Collection <ArrowRight size={16} />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OfferBag;
