import { NavBar } from "./NavBar";
import SectionHome from "./SectionHome";
import imgHome from "../assets/images/background.jpg";
import CardHome from "./CardHome";

const App = () => {
  return (
    <>
      <NavBar />
		{/**
		 * El nombre me indica que SectionHome es solo la seccion de home que mostras. podrias tenerlo adentro si es la unica asi.
		 * En caso que despues tengas mas si te sirve como lo tenes ahora
		 */}
		<SectionHome
			imgHome={imgHome}
			homeSlogan="¿Listo para alcanzar tus metas?"
			homeInfo="Descubre cómo nuestras rutinas personalizadas para el gimnasio o casa, seguimiento nutricional y acompañamiento 24/7 pueden asegurar tu éxito. Explora más y transforma tu vida hoy mismo."
			btnWelcome="Explora Nuestro Programa"
			sectionTitttleCard="Nuestros servicios"
		/>
		<CardHome />
    </>
  );
};

export default App;
