import ReactDOM from "react-dom/client";
import "./index.css";
import {NavBar} from "./components/NavBar";
import logo from "./asset/images/loguito.svg";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<NavBar
		logo={logo}
		btnNav={[
			{label: "Home", link: "#home"},
			{label: "Services", link: "#services"},
			{label: "About us", link: "#about"},
			{label: "Contact us", link: "#contact"},
		]}
		logoLink="#home"
	/>
);
