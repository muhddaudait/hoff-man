import appraoch from "../../public/assets/images/approach.svg";

export default function Approach() {
	return (
		<div className="bg-white my-20 mx-2">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-[40px] text-center">
					AN INTEEGRATED APPROACH
				</h1>
				<p className="text-[#475467] text-[20px] md:w-[846px] md:h-[120px] text-center">
					At Hoffman Construction, we believe in the power of
					collaboration and seamless execution. Our integrated
					approach means we handle every aspect of your project from
					start to finish. By combining planning, design, and
					construction under one roof, we ensure efficiency, clear
					communication, and exceptional results.
				</p>
				<div className="bg-[#FFD9DA] md:w-[829px] md:h-[546px] h-[268px] mx-2 md:mx-0 w-full">
					<img src={appraoch} className="mx-auto py-8 md:py-6" />
				</div>
			</div>
		</div>
	);
}
