import Card from "./Card";
import trainerImg from "../assets/images/personaltrainer.jpg";
import nutritionImg from "../assets/images/nutrition.jpg";
import trainHome from "../assets/images/trainhome.jpg";
import timeWorkout from "../assets/images/timeworkout.jpg";
import strNutri from "../assets/images/strnutri.jpg";

const Services = () => {
	const tittleService = "¿Qué ofrecemos a nuestros clientes?";
	const ServicesDescripion = [
		{
			imgService: trainerImg,
			tittleService: "Entrenamiento personalizado a tu medida",
			infoService:
				"Nuestra pasión por transformar vidas nos impulsa a ayudar a nuestros clientes a lograr una verdadera salud y longevidad. Con más de 25 años de experiencia y extensa investigación, nuestro equipo de entrenadores expertos te proporcionará una experiencia de fitness inigualable.Adoptamos un enfoque holístico del entrenamiento, abordando no solo la condición física, sino también el bienestar emocional, mental y social. Ayudamos a establecer y alcanzar metas realistas y sostenibles, identificando motivaciones y desarrollando estrategias para el cambio de comportamiento a largo plazo.Priorizamos el cuidado individualizado, adaptando nuestras estrategias para satisfacer las necesidades únicas de cada cliente, brindando apoyo continuo y responsabilidad para mantenerse en el camino, ofreciendo estímulo y ajustando las estrategias según sea necesario.Nuestro objetivo es hacer que tu cuerpo sea eficiente, reducir la inflamación, aumentar la capacidad de respuesta muscular y mejorar el rendimiento y la energía.",
		},
		{
			imgService: nutritionImg,
			tittleService: "Nutrición para que siente de la mejor forma",
			infoService:
				"La nutrición es esencial para una vida saludable y la prevención de enfermedades. También es vital para manejar condiciones como la diabetes tipo 2 y los problemas intestinales.Para las personas activas, una buena alimentación es crucial para maximizar el programa de entrenamiento y el rendimiento en la competencia. Nuestros servicios de nutrición se adaptan a las demandas de tu deporte o entrenamiento, considerando tu estilo de vida y necesidades de salud únicas. Ya seas un aficionado o un atleta profesional, la nutrición no debe ser pasada por alto. La alimentación saludable también se trata de la relación con tu cuerpo y los alimentos. Creemos que el bienestar óptimo se logra trabajando con nuestros cuerpos, no en contra de ellos. Estamos aquí para ayudarte a sintonizarte con tu cuerpo y encontrar flexibilidad con la comida.",
		},
	];
	const invitationMsj =
		"¿Estás listo para un viaje de mejora genuina con un equipo impulsado por tu éxito? Comencemos hoy mismo y descubre cómo alguno de nuestros planes puede ayudarte a hacer cambios duraderos y a liberar la mejor versión de ti mismo.";
	const buyServiceCards = [
		{
			logoCard: trainHome,
			subtCard: "Entrenamiento completo en casa",
			infoCard:
				"Este plan está diseñado para aquellos que prefieren entrenar en la comodidad de su hogar. Incluye rutinas personalizadas de entrenamiento y un plan nutricional adaptado a tus necesidades. Con sesiones de entrenamiento de 5 días a la semana, te aseguramos resultados visibles en poco tiempo.",
			children: "COMPRAR PROGRAMA",
		},
		{
			logoCard: timeWorkout,
			subtCard: "Entrenamiento flexible y nutrición",
			infoCard:
				"Perfecto para personas con horarios ocupados que necesitan flexibilidad. Este plan ofrece rutinas de entrenamiento de 3 días a la semana que pueden realizarse tanto en casa como en el gimnasio, junto con un plan nutricional adaptable. Recibirás orientación continua para asegurarte de que estás en el camino correcto.",
			children: "COMPRAR PROGRAMA",
		},
		{
			logoCard: strNutri,
			subtCard: "Fuerza y nutrición en el gimnasio",
			infoCard:
				"Ideal para quienes buscan maximizar su rendimiento en el gimnasio. Este plan combina entrenamientos intensivos de 4 días a la semana con un plan nutricional específico para aumentar tu masa muscular y mejorar tu fuerza. Obtén el apoyo de un entrenador personal y asesoramiento nutricional constante.",
			children: "COMPRAR PROGRAMA",
		},
	];
	const gymPlans = "Nuestros programas de entrenamiento";

	return (
		<>
			<section className="flex flex-col items-center text-gray-700 py-4 bg-neutral-200">
				<strong>
					<h1 className="uppercase text-center leading-10 my-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
						{tittleService}
					</h1>
				</strong>

				<div className="flex flex-col w-full">
					{ServicesDescripion.map((service, index) => (
						<article
							key={index}
							className={`flex flex-col md:flex-row items-center my-8 mx-auto ${
								index % 2 === 0 ? "md:flex-row-reverse" : ""
							}`}
						>
							<div className="md:w-1/2 bg-neutral-300 rounded-md mx-2 my-2 ">
								<h2 className="text-center md:text-2xl text-3xl font-bold mx-2 my-2 uppercase">
									{service.tittleService}
								</h2>
								<p className="text-left text-xs mx-2 my-2 leading-6 xl:text-base xl:my-12 xl:leading-8 italic">
									{service.infoService}
								</p>
							</div>
							<div className="md:w-1/2 p-4">
								<img
									className="w-full h-auto rounded object-cover shadow-sm"
									src={service.imgService}
									alt={service.titService}
								/>
							</div>
						</article>
					))}
				</div>

				<h3 className="text-center bg-lime-300 px-4 py-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
					{invitationMsj}
				</h3>
			</section>

			<section className="text-lime-500 bg-neutral-200  py-8 text-center ">
				<strong>
					<h1 className=" text-gray-700 container mx-auto my-8 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase ">
						{gymPlans}
					</h1>
				</strong>

				<div className="flex flex-wrap mx-auto justify-center items-stretch my-auto gap-8 xl:gap-x-44 w-full">
					{buyServiceCards.map((card, index) => (
						<Card
							key={index}
							logoCard={card.logoCard}
							subtCard={card.subtCard}
							infoCard={card.infoCard}
						>
							<button className="text-sm text-bold text-gray-700 py-2 px-2 mx-auto my-8 rounded-md border-gray-400 border-2 bg-transparent shadow-sm hover:bg-lime-300 mb-4 md:mb-12 ">
								{card.children}
							</button>
						</Card>
					))}
				</div>
			</section>
		</>
	);
};

export default Services;
