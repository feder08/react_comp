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
		// Change top-x depend on logo size
		<div
			className={`fixed top-16 right-0 bottom-0 items-center justify-center z-50 bg-lime-200 bg-opacity-80 w-1/2 h-auto rounded-b-md transition-transform duration-700 ease-in-out shadow-sm max-h-full overflow-y-auto ${menuClass}`}
		>
			<ul className="space-y-4 p-2">
				{btnNav.map((btn, index) => (
					<li key={index}>
						<a
							href={activeSection === btn.label ? null : btn.link}
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
