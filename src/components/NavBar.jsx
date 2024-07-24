import "../assets/css/Extras.css";
import {useState, useEffect, useMemo} from "react";
import {Link, useLocation} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../assets/images/loguito.png";

const labels = {
	HOME: "Home",
	SERVICES: "Services",
	ABOUT: "About",
	CONTACT: "Contact",
};

const NavBar = () => {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState(labels.HOME);
	const [isOpen, setIsOpen] = useState(false);

	const CompanyName = "Spartan Fitness";

	const nav = useMemo(
		() => [
			{label: labels.HOME, link: "/"},
			{label: labels.SERVICES, link: "/services"},
			{label: labels.ABOUT, link: "/about"},
			{label: labels.CONTACT, link: "/contact"},
		],
		[]
	);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		const closeMenu = () => setIsOpen(false);

		window.addEventListener("scroll", closeMenu);
		window.addEventListener("resize", closeMenu);
		window.addEventListener("popstate", closeMenu);

		return () => {
			window.removeEventListener("scroll", closeMenu);
			window.removeEventListener("resize", closeMenu);
			window.removeEventListener("popstate", closeMenu);
		};
	}, []);

	useEffect(() => {
		const currentPath = location.pathname;
		const foundSection = nav.find((item) => item.link === currentPath);
		if (foundSection) {
			setActiveSection(foundSection.label);
		}
	}, [location.pathname, nav]);

	return (
		<header>
			<nav className="bg-lime-200 bg-opacity-75 flex items-center justify-between shadow-sm ">
				<div className="flex items-center pl-4">
					<Link to={"/"} className="flex items-center pl-4">
						<img className="size-16" src={logo} alt="Logo" />
					</Link>
					<h3 className="uppercase ml-4 font-logoFont text-2xl text-neutral-600">
						{CompanyName}
					</h3>
				</div>
				<ul className="space-x-8 justify-end pr-4 hidden md:flex">
					{nav.map((btn, index) => (
						<li key={index}>
							<Link
								to={btn.link}
								className={`py-2 px-4 rounded-md transition duration-300 ease-in-out ${
									activeSection === btn.label
										? "font-bold cursor-default text-neutral-600"
										: "text-neutral-800 hover:bg-lime-400 hover:text-neutral-100 hover:shadow-sm"
								}`}
								onClick={() => {
									setActiveSection(btn.label);
								}}
							>
								{btn.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex md:hidden pr-4">
					<button
						className="transition-transform duration-300 ease-in-out"
						onClick={toggleMenu}
					>
						{isOpen ? (
							<FaTimes className="text-gray-500" />
						) : (
							<FaBars className="text-gray-500" />
						)}
					</button>
				</div>
			</nav>
			<div className={`menu-container ${isOpen ? "open" : "closed"}`}>
				<ul className="space-y-4 p-2">
					{nav.map((btn, index) => (
						<li key={index}>
							<Link
								to={btn.link}
								className={`block text-center py-2 px-4 rounded-md transition duration-300 ease-in-out ${
									activeSection === btn.label
										? "font-bold cursor-default text-neutral-600"
										: "text-neutral-800 hover:bg-lime-400 hover:text-neutral-100 hover:shadow-sm"
								}`}
								onClick={() => {
									setActiveSection(btn.label);
									setIsOpen(false); // Close menu after clicking
								}}
							>
								{btn.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
