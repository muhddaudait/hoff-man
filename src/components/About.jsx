import dot from "../../public/assets/images/dot.svg";
import Works from "./Works";
export default function About() {
    return (
        <div className="bg-white flex flex-col mx-2">
            <div>
                <div className="md:max-w-[942px] md:h-[247px] flex flex-col text-left md:ml-96 mb-10">
                    <div className="flex flex-row gap-1 items-center mb-2">
                        <img src={dot} />
                        <p className="text-[16px] text-[#1C508A]">who we are</p>
                    </div>
                    <h1 className="text-[#000000] text-[40px] md:mb-10">
                        Leading Global Builder and Developer
                    </h1>
                    <p className="text-[#333333] text-[24px] mb-6">
                        Building dream homes for families and people for over
                        15years.
                    </p>
                    <p className="text-[16px] text-[#475467]">
                        We specialize in crafting exceptional homes, buildings
                        and structures throughout Washington DC and the US as a
                        whole. From complete remodels to custom creations
                        designed to your unique lifestyle. See below for some of
                        our services.
                    </p>
                </div>

                <div className="left-0 bottom-0 md:w-[100px] md:h-[100px] bg-[#1C508A] -ml-10"></div>
                <Works />
            </div>
        </div>
    );
}
