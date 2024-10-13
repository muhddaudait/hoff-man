import { FaArrowRight } from "react-icons/fa";
import services from "../../public/assets/images/services.svg";

export default function OurServices() {
    return (
        <div className="w-full h-full md:h-screen md:justify-end justify-center bg-white flex items-center">
            <div className="flex flex-row relative w-full max-w-6xl ">
                {/* Image Section */}
                <img
                    src={services}
                    alt="Portfolio background"
                    className="md:w-[1055px] h-auto object-cover"
                />

                {/* Text Box Overlay */}
                <div className="absolute md:top-48 md:-left-32 bg-[#1C508A] text-white p-6 w-[300px] md:w-[309px] md:h-[164px] md:mt-20 mt-44">
                    <p className="mb-4">
                        We will help you with anything from kitchen remodels to
                        steel decks.
                    </p>
                    <button className="flex items-center gap-2">
                        <p>OUR SERVICES</p>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
