import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import About from "./pages/AboutPage";
function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Landingpage />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
