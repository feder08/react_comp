import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const MobileMenu = ({
	btnNav,
	activeSection,
	setActiveSection,
	toggleMenu,
	menuOpen,
}) => {
	const [menuClass, setMenuClass] = useState("");

	useEffect(() => {
		if (menuOpen) {
			setMenuClass("transform translate-x-0 opacity-100");
		} else {
			setMenuClass("transform translate-x-full opacity-0");
		}
	}, [menuOpen]);
	return (
		<div
			className={`fixed top-16 right-0 bottom-0 z-50 bg-gray-300 bg-opacity-75 w-1/2 h-2/5 rounded-b-md transition-transform duration-700 ease-in-out shadow-sm ${menuClass}`}
		>
			<ul className="space-y-4 p-2">
				{btnNav.map((btn, index) => (
					<li key={index}>
						<a
							href={activeSection === btn.label ? null : btn.link}
							className={`block text-center py-2 px-4 rounded-md transition duration-300 ease-in-out ${
								activeSection === btn.label
									? "font-bold cursor-default text-gray-500"
									: "text-gray-700 hover:bg-gray-400 hover:text-white hover:shadow-sm"
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
	);
};

MobileMenu.propTypes = {
	btnNav: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,
	activeSection: PropTypes.string.isRequired,
	setActiveSection: PropTypes.func.isRequired,
	toggleMenu: PropTypes.func.isRequired,
	menuOpen: PropTypes.bool.isRequired,
};
export default MobileMenu;
