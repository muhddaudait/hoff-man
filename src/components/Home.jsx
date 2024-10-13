import Homesvg from "../../public/assets/images/Home.svg";

const Home = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:h-[900px] h-[831px]">
			{/* Left Image Section */}
			<div className="bg-[#F3F5FB] md:w-[743px] md:h-[736px] z-10">
				<div className="relative flex-1 md:w-[755px] md:h-[710] mt-5 ml-5 md:mt-10 md:ml-10">
					<img
						src={Homesvg} // Replace with the path to your image
						alt="Interior Design"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black opacity-20"></div>
				</div>
			</div>
			{/* Right Content Section */}
			<div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-white md:w-[606px] md:h-[462px] items-start relative lg:-ml-24 z-20 lg:mt-28">
				<h1 className="md:text-[56px] lg:text-6xl font-bold text-[#1C508A] mb-8 text-[36px]">
					BUILDING DREAM HOMES
				</h1>
				<p className="text-lg lg:text-xl mb-8">
					Hoffman offers the highest quality craftsmanship and trusted
					management for both new building projects and renovations
					for your home or business. Contact us to discuss your plans.
				</p>
				<button className="mt-4 bg-[#1C508A] w-[166px] h-[48px] text-white px-4 py-2 hover:bg-blue-700 transition duration-300">
					CONTACT US
				</button>
			</div>
		</div>
	);
};

export default Home;
