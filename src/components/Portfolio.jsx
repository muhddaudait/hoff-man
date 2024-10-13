import { FaArrowRight } from "react-icons/fa";
import portfolioimg from "../../public/assets/images/portfolioimg.svg";
export default function Portfolio() {
    return (
        <div className="bg-white w-full h-full md:h-screen">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">
                <div className="z-10 ml-[20rem] mt-[100px] md:mt-0">
                    <img src={portfolioimg} />
                </div>
                <div className="bg-white z-1 absolute md:top-[15rem] z-20 md:left-[5rem]">
                    <div className="flex flex-col md:flex-row bg-[#1C508A] w-[301px] h-[212px]">
                        <div className="text-white px-5 py-4">
                            <p className="mb-2">
                                We strive for innovative design that elevates
                                our surroundings, shaping spaces where we live,
                                work, and play.
                            </p>
                            <div className="flex flex-row items-center gap-2">
                                <p>OUR PORTFOLIO</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
