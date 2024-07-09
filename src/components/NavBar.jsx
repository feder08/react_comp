//Validacion de los PROP q voy a usar en un funcion para evitar posibles errores
import PropTypes from "prop-types";
//importar useState para usarlo en mi funcion NavBar y useEffect para añadir icono hamburguesa.
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import MobileMenu from "./MobileMenu";

//Creo una funcion con las propiedad deseadas para mi Navigation Bar
export function NavBar({logo, btnNav, logoLink}) {
	//Creo una variable para AGREGAR componentes dinamicos
	const [activeSection, setActiveSection] = useState("Home");
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className=" bg-gray-300 bg-opacity-75 flex items-center justify-between shadow-sm ">
			<div className="flex items-center pl-4">
				<a href={logoLink} className="flex items-center pl-4">
					<img className="size-16 " src={logo} alt="Logo" />{" "}
				</a>
			</div>
			<ul className=" space-x-8 justify-end pr-4 hidden md:flex">
				{/* Al usar map en el prop btnNav este espera que le pase un array y recibir 2 parametros btn e index */}
				{btnNav.map((btn, index) => (
					<li key={index}>
						{/*Cada iteracion me devuelve un LI con un A Link va ser la el A e indicara si esta seleccionado o no. Dentro le pongo una clase con un operado ternarario que me permite cambiar el estado de la variable activeSection*/}
						<a
							href={activeSection === btn.label ? null : btn.link}
							className={`py-2 px-4 rounded-md transition duration-300 ease-in-out ${
								activeSection === btn.label
									? "font-bold cursor-default text-gray-500"
									: "text-gray-700 hover:bg-gray-400 hover:text-white hover:shadow-sm"
							}`}
							onClick={() => {
								if (activeSection !== btn.label) {
									setActiveSection(btn.label);
								}
							}}
						>
							{btn.label}{" "}
							{/*btn.label accede al valor de la propiedad label de ese objeto, que es el texto que se mostrará como contenido del enlace <a>*/}
						</a>
					</li>
				))}
			</ul>
			<button
				className="flex md:hidden pr-4 transition-transform duration-300 ease-in-out"
				onClick={toggleMenu}
			>
				{menuOpen ? (
					<FaTimes className=" text-gray-500" />
				) : (
					<FaBars className=" text-gray-500" />
				)}
			</button>
			{menuOpen && (
				<MobileMenu
					btnNav={btnNav}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					toggleMenu={toggleMenu}
					menuOpen={menuOpen}
				/>
			)}
		</nav>
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
logo="asset/loguito.svg"
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
