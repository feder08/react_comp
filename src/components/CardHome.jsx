import Card from "./Card.jsx";
import logo01 from "../asset/images/iconsCARD/bicep.svg";
import logo02 from "../asset/images/iconsCARD/dumbell.svg";
import logo03 from "../asset/images/iconsCARD/coach.svg";

const CardHome = () => {
	const sectionTittleCard =
		"Descubre los Beneficios de Nuestros Servicios Personalizados";

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
			<h1 className="container mx-auto mb-24 mt-5 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase italic">
				<strong> {sectionTittleCard}</strong>
			</h1>
			<div className="flex flex-wrap  justify-center items-stretch gap-8 xl:gap-x-44 w-full">
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
