import aboutoneimage from "../../public/assets/images/aboutoneimage.svg";
import dot from "../../public/assets/images/dot.svg";

export default function AboutOne() {
	return (
		<div className="grid md:grid-cols-2 grid-rows-1 md:gap-4 bg-[#F3F5FB] md:mx-16 md:my-10 md:px-10 md:py-10 mx-2 my-2">
			<div>
				<img src={aboutoneimage} />
			</div>
			<div>
				<div className="flex flex-row mb-3 gap-2">
					<img src={dot} />
					<p className="text-[#1C508A] text-[14px]">OUR STORY</p>
				</div>
				<div className="md:w-[305px] mb-3">
					<p className="text-[40px] text-black">
						TOGETHER WE BUILD SUCCESS
					</p>
				</div>
				<p className="text-[20px] text-[#475467] mb-3">
					Founded in 2004, Hoffman Custom Construction has been a
					hallmark of excellence in the industry for two decades.
					Specializing in bespoke residential and commercial projects,
					the company prides itself on meticulous craftsmanship and
					personalized service. With a commitment to quality and
					innovation, Hoffman Custom Construction continues to exceed
					expectations, building dreams one project at a time.
				</p>
				<p className="text-[20px] text-[#475467]">
					Hoofman offers the highest quality craftsmanship and trusted
					management for both new building projects and renovations
					for your home or business. Contact us to discuss your plans.
				</p>
			</div>
		</div>
	);
}
