//Validacion de los PROP q voy a usar en un funcion para evitar posibles errores
import PropTypes from "prop-types";
//importar useState para usarlo en mi funcion NavBar y useEffect para añadir icono hamburguesa.
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../assets/images/loguito.png";

/**
 * Te conviene dejar toda la logica del nav en la misma clase.
 * Si dependiese de algun estado lo podrias tener arriba o manejar el estado aca tambien,
 * pero en este caso conviene tener todo aca
 */
const labels = {
  HOME: "Home",
  SERVICES: "Services",
  ABOUT: "About us",
  CONTACT: "Contact",
};

//Creo una funcion con las propiedad deseadas para mi Navigation Bar
export function NavBar() {
  //Creo una variable para AGREGAR componentes dinamicos
  const [activeSection, setActiveSection] = useState(labels.HOME);

  const nav = [
    { label: labels.HOME, link: "#home" },
    { label: labels.SERVICES, link: "#services" },
    { label: labels.ABOUT, link: "#about" },
    { label: labels.CONTACT, link: "#contact" },
  ];

  return (
	<header>
		<nav className="bg-lime-200 bg-opacity-75 flex items-center justify-between shadow-sm ">
		<div className="flex items-center pl-4">
			<a href={"#home"} className="flex items-center pl-4">
			<img className="size-16 " src={logo} alt="Logo" />
			</a>
			{/* depend on size-x see mobileMenu */}
		</div>
		<ul className=" space-x-8 justify-end pr-4 hidden md:flex">
			{/* Al usar map en el prop btnNav este espera que le pase un array y recibir 2 parametros btn e index */}
			{/* Se puede usar index porque es un array estatico, si fuese un array dinamico no lo deberias usar. En ese caso usarias un id o el label en el peor de los casos */}
			{nav.map((btn, index) => (
			<li key={index}>
				{/*Cada iteracion me devuelve un LI con un A Link va ser la el A e indicara si esta seleccionado o no. Dentro le pongo una clase con un operado ternarario que me permite cambiar el estado de la variable activeSection*/}
				<a
				href={btn.link}
				className={`py-2 px-4 rounded-md transition duration-300 ease-in-out ${
					activeSection === btn.label
					? "font-bold cursor-default text-neutral-600"
					: "text-neutral-800 hover:bg-lime-400 hover:text-neutral-100 hover:shadow-sm"
				}`}
				onClick={() => {
					if (activeSection !== btn.label) {
					setActiveSection(btn.label);
					}
				}}
				>
				{btn.label}
				{/*btn.label accede al valor de la propiedad label de ese objeto, que es el texto que se mostrará como contenido del enlace <a>*/}
				</a>
			</li>
			))}
		</ul>
		
		{/* No tengo tiempo ahora, pero deberias tener un solo componente. Tailwind ya te provee la sintaxis de las clases para que se apliquen solo en dispositivos sm o xs */}
		<MobileMenu
			btnNav={nav}
			activeSection={activeSection}
			setActiveSection={setActiveSection}
		/>
		</nav>
	</header>
  );
}
//Validacion de los PROP q voy a usar en un funcion para evitar posibles errores
//Esto hace que cada prop reciba la informacion requerida y no pueda recibir otro tipo de dato
NavBar.propTypes = {
  logo: PropTypes.string.isRequired,
  btnNav: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  logoLink: PropTypes.string.isRequired,
};

export default NavBar;

//PARA IMPORTAR EL COMPONENTE EN OTRO ARCHIVO
{
  /* <NavBar
logo=".asset/loguito.svg"
btnNav={[
    {label: "Home", link: "#home"},
    {label: "Services", link: "#services"},
    {label: "About us", link: "#about"},
    {label: "Contact us", link: "#contac"},
]}
logoLink="#home"
/>
); */
}
