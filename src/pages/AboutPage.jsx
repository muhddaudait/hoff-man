import AboutLayout from "../AppLayout/AboutLayout";
import AboutOne from "../components/AboutOne";
import Approach from "../components/Approach";
import Build from "../components/Build";

export default function AboutPage() {
	return (
		<AboutLayout>
			<div className="">
				<AboutOne />
				<Approach />
				<Build />
			</div>
		</AboutLayout>
	);
}
