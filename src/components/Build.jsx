import first from "../../public/assets/images/first.svg";
import second from "../../public/assets/images/second.svg";
import dot from "../../public/assets/images/dot.svg";

export default function Build() {
	return (
		<div className="bg-white my-20">
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-row gap-2">
					<img src={dot} />
					<p className="text-[#1C508A]">OUR PROCESS</p>
				</div>
				<h1 className="text-[40px]">BEHIND THE BUILD</h1>
				<p className="text-[#475467] text-[20px] md:w-[846px] md:h-[120px] text-center">
					See sneak peek into the hustle, creativity, and teamwork
					that went in some projects what delivered. From the first
					sketch to the final nail, see how we bring our construction
					dreams to life.
				</p>
				<div className="flex justify-center flex-col md:flex-row bg-[#F3F5FB] md:w-[829px] md:h-[546px]">
					<img src={first} className="mx-auto py-8 md:py-6" />
					<img src={second} className="mx-auto py-8 md:py-6" />
					<img src={first} className="mx-auto py-8 md:py-6" />
				</div>
			</div>
		</div>
	);
}
