import "../assets/css/Extras.css";
import trainer from "../assets/images/personaltrainer.png";
import backGym01 from "../assets/images/gym01.jpg";
import backGym02 from "../assets/images/gym02.jpg";

const About = () => {
	const tittleAbout = "Sobre nosotros";
	const subtittleAbout =
		"Nos encanta ver a nuestros clientes encender esa chispa interior junto con el trabajo duro enfocado en la dirección correcta y el compromiso son clave para alcanzar el éxito en cualquier objetivo que se propongan.";

	const cardCoach = [
		{
			photoCardCoach: trainer,
			tittleCardCoach: "Conoce a [Nombre entrenador]",
			subtittleCardCoach: "Fundador de Spartan Fitness",
			textCardCoach:
				"[NOMBRE] ha ayudado a cientos de personas a alcanzar sus metas de fitness y también puede ayudarte a ti. Puede que hayas comenzado a hacer ejercicio porque deseabas encontrar la confianza en tu apariencia y ponerte en forma. [NOMBRE] tenía el mismo objetivo y su motivación lo llevó a muchos logros, incluyendo ser campeón de levantamiento de pesas olímpico de Escocia en 4 ocasiones. Con ocho años de experiencia en entrenamiento personal, [NOMBRE] ha trabajado arduamente para encontrar la estrategia correcta y ofrecer resultados verdaderos en los que puedas confiar. Ya sea que busques perder peso, fortalecerte o construir un físico delgado y atlético, él podrá encontrar el plan adecuado para tus necesidades. Una de las principales cosas que motiva a [NOMBRE] es conocer a nuevas personas como tú y descubrir sus historias. Él quiere ayudarte a superar tus obstáculos y alcanzar tus metas hasta la línea de meta.",
		},
	];

	const sectionAboutTittle = "¿SOMOS LOS ADECUADOS PARA TI?";
	const sectionAboutText =
		"¿Cómo sabes si somos los entrenadores personales adecuados? En [Spartan Fitness] haremos lo necesario para ayudarte a ir del punto A (donde estás ahora) al punto B (donde quieres estar). Durante más de una década, hemos ayudado a hombres y mujeres a lograr resultados que nunca pensaron posibles, a menudo después de años de frustración y promesas vacías de soluciones que habían intentado anteriormente.";
	const sectionTittleList =
		"Trabajamos con cualquier hombre o mujer que esté dispuesto a dar el paso y hacer un cambio. Si te encuentras asintiendo o murmurando sí a alguna de estas preguntas...";
	const sectionList = [
		{
			itemList:
				"¿Has notado que tu ropa se ajusta más y más con cada año que pasa, y en las áreas incorrectas?",
		},
		{
			itemList:
				"¿Te sorprendiste la última vez que te pesaste (o evitas hacerlo activamente)?",
		},
		{
			itemList:
				"¿Alguna vez te has encontrado agitado como si hubieras corrido una Marathon, o intentado jugar al fútbol con  tus amigos?",
		},
		{
			itemList:
				"¿Te has encontrado internamente encogiéndote cada vez que una foto de cuerpo completo tuya se sube a Facebook y puedes ver tu físico desde un ángulo poco favorecedor?",
		},
		{
			itemList:
				"¿Desearías poder esperar con ansias las vacaciones, sin temer cómo te sentirás en la playa?",
		},
		{
			itemList:
				"¿Has comenzado a reconocer que tomar acción no se trata solo de ser vanidoso, sino de estar presente y activo para tu familia (sea pareja, hijos o nietos (futuros o actuales))?",
		},
		{
			itemList:
				"¿Te has sentido desanimado por un plan de entrenamiento aburrido o una dieta insípida en el pasado, y piensas que “hacer dieta” y “entrenar” no son para ti?",
		},
	];
	const finalMsgAbout =
		"¿Si es así? Entonces ahora es el momento de hacer algo al respecto. Y aquí en [Spartan Fitness], sería un honor poder ayudarte. Haz clic aquí para solicitar una consulta o prueba gratuita, sin obligación. Nadie más tomará la acción por ti, así que si estás esperando una señal, esta es.";
	return (
		<>
			<section
				className="bg-cover bg-fixed bg-center min-h-screen flex flex-col justify-center items-start px-2  font-sans"
				style={{backgroundImage: `url(${backGym01})`}}
			>
				<div className="w-full  text-neutral-200 text-center">
					<h1 className=" text-6xl sm:text-7xl lg:text-8xl mx-auto mb-16 md:mb-24 lg:mb-32 animated-fall">
						<strong>{tittleAbout}</strong>
					</h1>
					<h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mx-2 my-8 bg-black bg-opacity-35 rounded-md animated-upper">
						{subtittleAbout}
					</h2>
				</div>
			</section>
			<section className="flex flex-col w-full bg-neutral-300">
				{cardCoach.map((card, index) => (
					<article
						key={index}
						className="flex flex-col md:flex-row items-start md:items-center my-8 mx-auto"
					>
						<div className="md:w-1/2 p-4">
							<img
								className="w-full h-auto rounded object-cover "
								src={card.photoCardCoach}
								alt={card.photoCardCoach}
							/>
						</div>

						<div className="md:w-1/2 p-4 mx-4">
							<h1 className="text-left  text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold md:my-4 lg:my-8 xl:mb-16   uppercase">
								{card.tittleCardCoach}
							</h1>
							<h2 className="text-left text-xl my-4 md:text-2xl lg:text-2xl xl:text-4xl font-semibold md:my-4 lg:my-8 xl:mb-16">
								{card.subtittleCardCoach}
							</h2>
							<p className="text-left text-xs md:text-sm lg:text-base xl:text-xl italic">
								{card.textCardCoach}
							</p>
						</div>
					</article>
				))}
			</section>

			<section
				className="bg-cover bg-fixed bg-center min-h-screen flex flex-col justify-center items-start  text-neutral-100 p-4 md:p-8 lg:p-12 xl:p-16"
				style={{backgroundImage: `url(${backGym02})`}}
			>
				<article className="bg-black bg-opacity-35 px-12 rounded-md">
					<div className=" md:w-3/5">
						<h1 className=" text-3xl xl:text-5xl text-bold text-center mx-auto my-12">
							{sectionAboutTittle}
						</h1>
						<h2 className=" text-base text-center md:text-left sm:text-xl xl:text-2xl my-8">
							{sectionAboutText}
						</h2>
						<h3 className="text-base text-center md:text-left md:text-lg my-8 ">
							{sectionTittleList}
						</h3>
					</div>
					<ul className="sm:list-disc ">
						{sectionList.map((item, index) => (
							<li
								key={index}
								className="text-xs text-center sm:text-left lg:text-sm xl:text-base  ml-12 sm:my-4"
							>
								{item.itemList}
							</li>
						))}
					</ul>
					<strong>
						<p className="md:my-12 p-4  text-lg sm:text-xl md:text-2xl text-gray-300 text-center">
							{finalMsgAbout}
						</p>
					</strong>
				</article>
			</section>
		</>
	);
};

export default About;
