import PropTypes from "prop-types";

export function Card({logoCard, subtCard, infoCard, children}) {
	return (
		<div className="max-w-xs grid grid-rows-[auto,auto,auto] rounded overflow-hidden shadow-sm bg-lime-200 bg-opacity-35 px-6 py-4 ">
			{logoCard && (
				<img
					className="h-max w-auto object-contain mx-auto my-auto"
					src={logoCard}
					alt="Card Logo"
				/>
			)}
			<h2 className="font-bold text-xl sm:text-2xl text-center mt-2">
				{subtCard}
			</h2>
			<p className="text-gray-700 text-sm italic sm:text-base text-center mt-2">
				{infoCard}
			</p>
			<div className="mt-auto flex justify-center">{children}</div>
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
