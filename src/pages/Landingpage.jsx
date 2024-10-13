import Header from "../components/Header";
import AppLayout from "../AppLayout/AppLayout";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import AboutUsImage from "../components/AboutUsImage";
import FooterTwo from "../components/FooterTwo";
import OurServices from "../components/OurServices";
import OurPortfolio from "../components/OurPortfolio";

export default function LandingPage() {
	return (
		<AppLayout>
			<div className="m-auto">
				<Header />
				<div className="px-4 py-4 md:px-10 md:py-10">
					<Home />
					<About />
					<Portfolio />
					<AboutUs />
					<AboutUsImage />
					<OurServices />
					<OurPortfolio />
				</div>
				<FooterTwo />
			</div>
		</AppLayout>
	);
}
