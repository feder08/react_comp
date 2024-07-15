import Card from "./Card.jsx";
import logo01 from "../asset/images/iconsCARD/bicep.svg";
import logo02 from "../asset/images/iconsCARD/dumbell.svg";
import logo03 from "../asset/images/iconsCARD/coach.svg";

const CardHome = () => {
	const sectionTittleCard =
		"Descubre los Beneficios de Nuestros Servicios Personalizados";
	const sectionParagraph =
		"Probablemente ya has probado diversas estrategias para perder peso y ponerte en forma, solo para quedar decepcionado. Entendemos tu frustración y te ofrecemos no solo recursos físicos, sino también un plan alimentario personalizado y acompañamiento 24/7. Supera tus límites, escapa de la inercia y consigue el cuerpo que mereces. Si te sientes al borde de la desesperación, estás en el lugar correcto: obtén la ayuda que necesitas para superar cualquier obstáculo y redescubrir tu juventud.";

	const cardHome = [
		{
			logoCard: logo01,
			subtCard: "Rutinas personalizadas",
			infoCard:
				"Te ofrecemos rutinas diseñadas específicamente para tus necesidades, adaptadas a tu estilo de vida y objetivos personales.",
		},
		{
			logoCard: logo02,
			subtCard: "Musculación",
			infoCard:
				"Nos especializamos en la construcción de masa muscular, ayudándote a alcanzar tus objetivos estéticos y deportivos de manera efectiva.",
		},
		{
			logoCard: logo03,
			subtCard: "Asistencia personalizada",
			infoCard:
				"Disfruta de la asistencia continua de un entrenador disponible las 24 horas, para resolver tus dudas y preocupaciones en cualquier momento.",
		},
	];
	return (
		<section className="text-lime-500 bg-lime-100 min-h-screen py-8 text-center ">
			<h1 className="container mx-auto my-8 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase italic">
				<strong> {sectionTittleCard}</strong>
			</h1>
			<p className=" text-center text-gray-700 text-sx sm:text-base italic my-8 xl:mx-72 mx-10 ">
				{sectionParagraph}
			</p>
			<div className="flex flex-wrap mx-auto justify-center items-stretch gap-8 xl:gap-x-44 w-full">
				{cardHome.map((card, index) => (
					<Card
						key={index}
						logoCard={card.logoCard}
						subtCard={card.subtCard}
						infoCard={card.infoCard}
					/>
				))}
			</div>
		</section>
	);
};

export default CardHome;
