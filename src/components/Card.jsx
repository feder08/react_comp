import PropTypes from "prop-types";

export function Card({logoCard, subtCard, infoCard, children}) {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-sm bg-lime-200 bg-opacity-35 px-6 py-4  justify-center ">
			{logoCard && <img className=" w-full" src={logoCard} />}
			<h2 className="font-bold text-xl mb-2 sm:text-2xl">{subtCard}</h2>
			<p className="text-gray-700  text-sm	 sm:text-base">{infoCard}</p>
			{children}
		</div>
	);
}

Card.propTypes = {
	logoCard: PropTypes.string,
	subtCard: PropTypes.string.isRequired,
	infoCard: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Card;
