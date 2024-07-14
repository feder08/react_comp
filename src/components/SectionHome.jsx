import PropTypes from "prop-types";

export function SectionHome({imgHome, homeSlogan, homeInfo, btnWelcome}) {
	return (
		<section
			className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 font-sans"
			style={{
				backgroundImage: `url(${imgHome})`,
			}}
		>
			<div className="w-full md:w-1/2 text-neutral-100  text-center">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl mb-8  bg-black bg-opacity-35 rounded-md md:bg-transparent md:bg-opacity-0">
					<strong>{homeSlogan}</strong>
				</h1>
				<p className="text-lg  lg:text-xl xl:text-3xl mt-16 mb-16  md:text-left text-lime-200 bg-black bg-opacity-35 rounded-md">
					{homeInfo}
				</p>
				<button className="mt-16 px-6 py-3 bg-lime-200 text-neutral-600 font-bold rounded-lg hover:bg-lime-400 hover:text-neutral-100 sm:text-lg shadow-sm hover:shadow-sm transition-transform duration-300 ease-in-out uppercase">
					{btnWelcome}
				</button>
			</div>
		</section>
	);
}

SectionHome.propTypes = {
	imgHome: PropTypes.string.isRequired,
	homeSlogan: PropTypes.string.isRequired,
	homeInfo: PropTypes.string.isRequired,
	btnWelcome: PropTypes.string.isRequired,
};

export default SectionHome;
