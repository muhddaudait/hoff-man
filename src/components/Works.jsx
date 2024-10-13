import images1 from "../../public/assets/images/images1.svg";
import images2 from "../../public/assets/images/images2.svg";
import images3 from "../../public/assets/images/images3.svg";
import images4 from "../../public/assets/images/images4.svg";
import images5 from "../../public/assets/images/images5.svg";
import images6 from "../../public/assets/images/images6.svg";

const HouseWorks = ({ image, title }) => {
	return (
		<div className="w-full mx-auto">
			<div className="relative">
				<img
					src={image}
					alt={title || "House work image"}
					className="w-full h-40 object-cover"
				/>
				{title && (
					<h3 className="relative bg-white bg-opacity-60 text-black text-[24px] font-semibold px-2 py-5 text-sm">
						{title}
					</h3>
				)}
			</div>
		</div>
	);
};

export default function Works() {
	const Houses = [
		{ image: images1, title: "General Construction" },
		{ image: images2, title: "General Construction" },
		{ image: images3, title: "General Construction" },
		{ image: images4, title: "General Construction" },
		{ image: images5, title: "Kitchen and Dining" },
		{ image: images6, title: "General Construction" },
	];

	return (
		<div className="w-full bg-[#F3F5FB] border border-[#F3F5FB] md:py-20 h-[1500px] md:h-screen mx-auto">
			<div className="max-w-6xl mx-auto py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{Houses.map((house, index) => (
						<HouseWorks
							key={index}
							image={house.image}
							title={house.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
