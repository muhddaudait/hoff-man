import { FaArrowRight } from "react-icons/fa";
import portfolioimage from "../../public/assets/images/portfolioimage.svg";

export default function OurPortfolio() {
    return (
        <div className="w-full h-full md:h-screen bg-white flex items-center">
            <div className="flex flex-row relative w-full max-w-6xl ">
                {/* Image Section */}
                <img
                    src={portfolioimage}
                    alt="Portfolio background"
                    className="md:w-[1055px] h-auto object-cover"
                />

                {/* Text Box Overlay */}
                <div className="absolute top-[16rem] right-0 md:-right-10 border-[#1C508A] text-[#475467] bg-[#F3F5FB] p-6 w-[300px] md:w-[309px] md:h-[164px]  md:mt-32 -mt-20">
                    <p className="mb-4 text-[16px]">
                        We will help you with anything from kitchen remodels to
                        steel decks.
                    </p>
                    <button className="flex items-center gap-2">
                        <p className="text-[14px]">OUR PORTFOLIO</p>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
