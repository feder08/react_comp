import ReactDOM from "react-dom/client";
import "./index.css";
import {NavBar} from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<NavBar
		logo="/public/asset/images/loguito.svg"
		btnNav={[
			{label: "Home", link: "#home"},
			{label: "Services", link: "#services"},
			{label: "About us", link: "#about"},
			{label: "Contact us", link: "#contact"},
		]}
		logoLink="#home"
	/>
);
