import imgHome from "../assets/images/background.jpg";
import Card from "./Card.jsx";
import logo01 from "../assets/images/iconsCARD/bicep.svg";
import logo02 from "../assets/images/iconsCARD/dumbell.svg";
import logo03 from "../assets/images/iconsCARD/coach.svg";
import imgSectionAbout from "../assets/images/imgfuerzaa.jpg";

const HomePage = () => {
	const homeSlogan = "¿Listo para alcanzar tus metas?";
	const homeInfo =
		"Descubre cómo nuestras rutinas personalizadas para el gimnasio o casa, seguimiento nutricional y acompañamiento 24/7 pueden asegurar tu éxito. Explora más y transforma tu vida hoy mismo.";
	const btnWelcome = "Explora Nuestro Programa";
	const sectionCardTittle =
		"Descubre los Beneficios de Nuestros Servicios Personalizados";
	const sectionCardParagraph =
		"Probablemente ya has probado diversas estrategias para perder peso y ponerte en forma, solo para quedar decepcionado. Entendemos tu frustración y te ofrecemos no solo recursos físicos, sino también un plan alimentario personalizado y acompañamiento 24/7. Supera tus límites, escapa de la inercia y consigue el cuerpo que mereces. Si te sientes al borde de la desesperación, estás en el lugar correcto: obtén la ayuda que necesitas para superar cualquier obstáculo y redescubrir tu juventud.";

	const introduceAboutTittle = "Servicios profesionales de entrenamiento";

	const introduceAboutParagraph =
		"¿Cuánto has gastado tratando de mejorar tu salud y estado físico a lo largo de los años, solo para que los suplementos terminen en la basura, el equipo de ejercicios en casa se quede en el armario o las membresías del gimnasio queden sin usar? ¿Alguna vez has calculado cuánto dinero has desperdiciado hasta ahora? (NOMBRE GYM), nos enfocamos en que realmente obtengas un retorno de tu inversión. Estás pagando por resultados y nos aseguraremos de cumplir. Nuestros programas de entrenamiento están diseñados no solo para ayudarte a aprender la forma correcta de ejercicio, sino también para mejorar tu fuerza, perder peso si es necesario y crear una calidad de vida que puedas disfrutar. Así, tu confianza aumentará, tu cuerpo se sentirá y se verá increíble, y no habrá nada que no puedas lograr con dedicación y compromiso...";
	const btnAboutHome = "Aprende mas";

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
		<>
			<section
				className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 font-sans"
				style={{
					backgroundImage: `url(${imgHome})`,
				}}
			>
				<div className="w-full md:w-1/2 text-neutral-100 text-center">
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
			<section className="text-lime-500 bg-lime-50  py-8 text-center ">
				<h1 className="container mx-auto my-8 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase ">
					{sectionCardTittle}
				</h1>
				<p className=" text-center text-gray-700 text-sx sm:text-base italic my-8 xl:mx-72 mx-10 ">
					{sectionCardParagraph}
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
			<section className="flex flex-col items-center text-gray-700 py-4 bg-neutral-100">
				<h1 className="uppercase text-center my-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					{introduceAboutTittle}
				</h1>
				<div className="flex flex-col md:flex-row w-full items-start">
					<article className="w-full md:w-1/2 flex flex-col mx-auto my-auto items-start ">
						<p className="text-left text-xs my-4 mx-4 leading-6  xl:text-base xl:my-12 xl:mx-12 xl:leading-8 italic">
							{introduceAboutParagraph}
						</p>
						<button className="text-xs py-2 px-2 mx-auto my-auto rounded-md border-solid border-2 bg-transparent shadow-sm hover:bg-lime-200 mb-4 md:mb-12 ">
							{btnAboutHome}
						</button>
					</article>
					<img
						className="w-full md:w-1/2 rounded h-auto object-cover shadow-md mx-auto my-auto md:my-12 md:mx-12"
						src={imgSectionAbout}
						alt=""
					/>
				</div>
			</section>
		</>
	);
};

export default HomePage;
