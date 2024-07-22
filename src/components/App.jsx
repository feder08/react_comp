import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import SectionHome from "./SectionHome";
import Footer from "./Footer";
import SectionServices from "./SectionServices";
import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionTerms from "./SectionLegal";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<SectionHome />} />
				<Route path="/services" element={<SectionServices />} />
				<Route path="/about" element={<SectionAbout />} />
				<Route path="/contact" element={<SectionContact />} />
				<Route path="/terms&cond" element={<SectionTerms type="terms" />} />
				<Route
					path="/privacypolicy"
					element={<SectionTerms type="privacy" />}
				/>
				<Route
					path="/cookiespolicy"
					element={<SectionTerms type="cookies" />}
				/>
			</Routes>
			<ScrollToTop />
			<Footer />
		</Router>
	);
};

export default App;
