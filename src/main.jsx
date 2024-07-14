import ReactDOM from "react-dom/client";
import "./index.css";
import {NavBar} from "./components/NavBar";
import logo from "./asset/images/Loguito001.svg";
import SectionHome from "./components/SectionHome";
import imgHome from "./asset/images/background.jpg";
import CardHome from "./components/CardHome";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
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
		<SectionHome
			imgHome={imgHome}
			homeSlogan="¿Listo para alcanzar tus metas?"
			homeInfo="Descubre cómo nuestras rutinas personalizadas para el gimnasio o casa, seguimiento nutricional y acompañamiento 24/7 pueden asegurar tu éxito. Explora más y transforma tu vida hoy mismo."
			btnWelcome="Explora Nuestro Programa"
			sectionTittleCard="Nuestros servicios"
		/>
		<CardHome />
	</>
);
