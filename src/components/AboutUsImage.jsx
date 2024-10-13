import aboutusimage from "../../public/assets/images/aboutimage.svg";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUsImage() {
    return (
        <div className="relative w-full flex  md:h-screen bg-white mx-auto md:my-10 items-center justify-center">
            <div className="absolute top-0 ">
                <img src={aboutusimage} className="mx-auto w-full h-full " />
            </div>
            <div className="flex flex-col gap-5 relative w-[627px]">
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                <div className="flex flex-col relative z-50">
                    <p className="md:text-[40px] text-white text-[30px]">
                        We believe in building better
                    </p>
                    <p className="text-xs md:text-sm text-white">
                        We emphasize curiosity, challenging norms, and embracing
                        risks. This approach enables us to recognize emerging
                        markets and housing trends, resulting in superior
                        outcomes for our stakeholders.
                    </p>
                </div>
                <button className="flex items-center text-[14px] text-white">
                    ABOUT US
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
