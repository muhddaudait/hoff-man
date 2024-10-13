import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl";
import FooterConsultation from "./FooterConsultation";
import whitehoffman from "../../public/assets/images/whitehoffman.svg";

const NavItems = [
	{
		name: "About Us",
		path: "about",
	},
	{
		name: "Portfolio",
		path: "portfolio",
	},
	{
		name: "services",
		path: "services",
	},
	{
		name: "Contact Us",
		path: "contact-us",
	},
];

const FooterTwo = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<FooterConsultation />
			<div className="bg-black w-full px-5 py-3 md:h-[264px]">
				<div className="py-3 text-center md:text-left md:px-10 ">
					<p className="border border-[#737373] border-solid "></p>
					<div className="mother py-5 flex flex-col md:flex-row justify-between">
						<div className="logo and menu w-80% mx-auto md:w-full flex flex-col md:flex-row gap-10 md:gap-20">
							<Link to="/">
								<img src={whitehoffman} alt="logo" />
							</Link>
							<ul>
								{NavItems.map((list, index) => (
									<Link
										key={index}
										className="uppercase text-white font-medium text-xs"
										to={`/${list.path}`}
									>
										<li className="pb-3">{list.name}</li>
									</Link>
								))}
							</ul>
						</div>
						<div className="py-5 icons and copyright w-80% mx-auto md:w-full">
							<div className="icons flex gap-2">
								<Link className="w-8 h-8 py-0.5 bg-[#5C5C5C] text-center text-white">
									<FaFacebookF className="inline" />
								</Link>
								<Link className="w-8 h-8 py-0.5 bg-[#5C5C5C] text-center text-white">
									<FaInstagram className="inline" />
								</Link>
								<Link className="w-8 h-8 py-0.5 bg-[#5C5C5C] text-center text-white">
									<FaLinkedinIn className="inline" />
								</Link>
								<Link className="w-8 h-8 py-0.5 bg-[#5C5C5C] text-center text-white">
									<SlSocialSkype className="inline" />
								</Link>
							</div>
							<div className="pt-5 text-[#E8EAED] text-xs flex flex-col gap-1 capitalize">
								<p>&copy; Copyright {currentYear} </p>
								<p>Hoffman Custom construction</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterTwo;
