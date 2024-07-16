import {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../assets/images/loguito.png";

const labels = {
	HOME: "Home",
	SERVICES: "Services",
	ABOUT: "About",
	CONTACT: "Contact",
};

const NavBar = () => {
	const [activeSection, setActiveSection] = useState(labels.HOME);
	const [isOpen, setIsOpen] = useState(false);

	const nav = [
		{label: labels.HOME, link: "#home"},
		{label: labels.SERVICES, link: "#services"},
		{label: labels.ABOUT, link: "#about"},
		{label: labels.CONTACT, link: "#contact"},
	];

	const toggleMenu = () => setIsOpen(!isOpen);
	useEffect(() => {
		const closeMenu = () => setIsOpen(false);
		window.addEventListener("scroll", closeMenu);
		window.addEventListener("resize", closeMenu);

		return () => {
			window.removeEventListener("scroll", closeMenu);
			window.removeEventListener("resize", closeMenu);
		};
	}, []);

	const menuClass = isOpen
		? "transform translate-x-0 opacity-100"
		: "transform translate-x-full opacity-0";

	return (
		<header>
			<nav className=" bg-lime-200 bg-opacity-75 flex items-center justify-between shadow-sm ">
				<div className="flex items-center pl-4">
					<a href={"#home"} className="flex items-center pl-4">
						<img className="size-16 " src={logo} alt="Logo" />
					</a>
					{/* depend on size-x see mobileMenu */}
				</div>
				<ul className=" space-x-8 justify-end pr-4 hidden md:flex">
					{nav.map((btn, index) => (
						<li key={index}>
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
							</a>
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
			{isOpen && (
				<div
					className={`fixed top-16 right-0 bottom-0 items-center justify-center z-50 bg-lime-200 bg-opacity-80 w-1/2 h-auto rounded-b-md transition-transform duration-300 ease-in-out shadow-sm max-h-full overflow-y-auto ${menuClass}`}
				>
					<ul className="space-y-4 p-2">
						{nav.map((btn, index) => (
							<li key={index}>
								<a
									href={btn.link}
									className={`block text-center py-2 px-4 rounded-md transition duration-300 ease-in-out ${
										activeSection === btn.label
											? "font-bold cursor-default text-neutral-600"
											: "text-neutral-800 hover:bg-lime-400 hover:text-neutral-100 hover:shadow-sm"
									}`}
									onClick={() => {
										if (activeSection !== btn.label) {
											setActiveSection(btn.label);
											toggleMenu();
										}
									}}
								>
									{btn.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};
export default NavBar;
