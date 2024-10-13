import img from "../../public/assets/images/outward.svg";
import profile2 from "../../public/assets/images/profile2.svg";
import profile3 from "../../public/assets/images/profile3.svg";
import profile5 from "../../public/assets/images/profile5.svg";
import profile6 from "../../public/assets/images/profile6.svg";
import profile1 from "../../public/assets/images/profile1.svg";

export default function AboutUs() {
    return (
        <div className=" flex flex-col w-full h-full bg-[#F3F5FB] md:my-[1rem] md:py-5 md:px-16 px-4 py-4">
            <div className="flex flex-col md:flex-row md:gap-10 gap-4 md:mt-20 items-center md:mb-10">
                {/* Stacked Images */}
                <div className="flex relative w-full ml-5 mr-16">
                    <img
                        src={profile1}
                        className="w-10 h-10 md:w-[85px] md:h-[85px] absolute top-0 left-0 z-10"
                    />
                    <img
                        src={profile2}
                        className="w-10 h-10 md:w-[85px] md:h-[85px] absolute top-0 left-[25px] md:left-[42.5px] -ml-5 z-20"
                    />
                    <img
                        src={profile3}
                        className="w-10 h-10 md:w-[85px] md:h-[85px] absolute top-0 left-[50px] md:left-[85px] -ml-5 z-30"
                    />
                    <img
                        src={profile5}
                        className="w-10 h-10 md:w-[85px] md:h-[85px] absolute top-0 left-[75px] md:left-[127.5px] -ml-5 z-40"
                    />
                    <img
                        src={profile6}
                        className="w-10 h-10 md:w-[85px] md:h-[85px] absolute top-0 left-[100px] md:left-[170px] -ml-5 z-50"
                    />
                </div>

                {/* Trusted by leading dreamers */}
                <div className="text-center md:text-left">
                    <div className="flex flex-col">
                        <p className="text-[12px]">Trusted by</p>
                        <p className="text-[12px]">leading dreamers</p>
                    </div>
                </div>

                {/* Input for quote */}
                <div className="w-full md:w-auto">
                    <div className="flex md:ml-auto">
                        <div className="bg-white px-3 py-3 border border-[#E8EAED]">
                            <input
                                type="text"
                                placeholder="Get a quote"
                                className="outline-none"
                            />
                        </div>
                        <div className="bg-black w-[48px] h-[48px] flex items-center justify-center">
                            <img src={img} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p
                    className="text-[#475467] md:max-w-[921px] md:h-[184px] md:text-[30px] mb-10 mt-5 text-xl leading-8
				"
                >
                    “For over five years, Hoffman Custom Construction, led by
                    George, has been our reliable partner. Their professionalism
                    ensures on-budget, on-time projects, from townhomes to
                    multi-million dollar homes. Flexible and competent, they
                    consistently exceed expectations.”
                </p>
                <p>Micheal Culwell</p>
                <p className="text-[#1C508A]">Principal, Ivar’s</p>
            </div>
        </div>
    );
}
