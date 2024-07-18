import PropTypes from "prop-types";

export function Card({logoCard, subtCard, infoCard, children}) {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-sm bg-lime-200 bg-opacity-35 px-6 py-4 flex flex-col items-center justify-center space-y-4">
			{logoCard && (
				<img className="h-max object-contain" src={logoCard} alt="Card Logo" />
			)}
			<h2 className="font-bold text-xl sm:text-2xl text-center">{subtCard}</h2>
			<p className="text-gray-700 text-sm italic sm:text-base text-center">
				{infoCard}
			</p>
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
