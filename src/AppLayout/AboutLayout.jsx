import FooterTwo from "../components/FooterTwo";
import Header from "../components/Header";

export default function AboutLayout({ children }) {
	return (
		<div className="app-layout">
			<Header />
			{children}
			<FooterTwo />
		</div>
	);
}
