import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons from react-icons
import hoffManLogo from "../../public/assets/images/HoffManLogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-white shadow-md w-full">
			<div className="container mx-auto px-4 py-4 z-100 w-full flex justify-between items-center border-b-[1px] border-b-[#1C508A]">
				{/* Logo */}
				<div className="text-2xl font-bold text-gray-800">
					<img src={hoffManLogo} />
				</div>

				{/* Desktop Navigation */}
				<nav className={`hidden md:flex space-x-8`}>
					<Link to="/" className="text-[#1C508A] hover:text-blue-600">
						Home
					</Link>
					<Link
						to="/about"
						className="text-[#1C508A] hover:text-blue-600"
					>
						About Us
					</Link>
					<Link to="#" className="text-[#1C508A] hover:text-blue-600">
						Portfolio
					</Link>
					<Link to="#" className="text-[#1C508A] hover:text-blue-600">
						Services
					</Link>
				</nav>

				{/* Contact Button */}
				<button
					type="submit"
					className="hidden md:block text-[#1C508A] border border-[#1C508A] px-4 py-2 hover:bg-[#1C508A] hover:text-white transition"
				>
					Contact Us
				</button>

				{/* Mobile Menu Icon */}
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu}>
						{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="md:hidden bg-white shadow-lg">
					<ul className="flex flex-col items-left space-y-4 py-4 px-2">
						<li>
							<Link
								href="/"
								className="text-gray-700 hover:text-blue-600"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="text-gray-700 hover:text-blue-600"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-blue-600 border border-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white transition"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
