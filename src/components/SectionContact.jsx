import "../assets/css/Extras.css";
import bgContact from "../assets/images/gymContact.jpg";

const Contact = () => {
	const contactTittle = "¿Quieres Saber Más?";
	const contactSubtittle =
		"¿Quiénes somos y qué hacemos aquí en [Spartan Fitness]? ¿Tienes alguna pregunta que no haya sido respondida en ninguna otra página? Completa el formulario a continuación y te responderemos lo antes posible.";
	const tittleForm = "Contactatanos";
	const formFields = [
		{
			label: "Nombre:",
			type: "text",
			name: "firstName",
			placeholder: "Introduce tu nombre",
		},
		{
			label: "Apellido:",
			type: "text",
			name: "lastName",
			placeholder: "Introduce tu apellido",
		},
		{
			label: "Correo Electrónico:",
			type: "email",
			name: "email",
			placeholder: "ejemplo@dominio.com",
		},
		{
			label: "Teléfono:",
			type: "tel",
			name: "phone",
			placeholder: "123-456-7890",
		},
		{
			label: "Mensaje:",
			type: "textarea",
			name: "msg",
			placeholder: "Escribe tu mensaje aquí",
		},
	];

	const contactInfo = "Informacion de contacto";
	const infoContact = {
		address: {
			addressLine: "Av. Siempreviva 743 ",
			city: "Spingfield",
			province: "Esta Lejos",
			postalCode: "31246",
			country: "United States",
		},

		contactDetails: {
			phone: "321-654-9870",
			email: "contant@spartanfitness.com",
		},
	};

	const tittlesInfoContact = {
		ADDRESS: "Direccion:",
		PHONE: "Telefono:",
		EMAIL: "Correo Electronico:",
	};

	return (
		<>
			<section
				className="bg-cover bg-fixed bg-center min-h-screen flex flex-col justify-center items-start px-2  font-sans"
				style={{backgroundImage: `url(${bgContact})`}}
			>
				<div className="w-full text-neutral-200 bg-black bg-opacity-50 text-center animated-fade-in ">
					<h1 className=" mt-10 text-6xl sm:text-7xl lg:text-8xl mx-auto mb-16 md:mb-24 lg:mb-32 animated-fade-in animated-delay-4">
						<strong>{contactTittle}</strong>
					</h1>
					<h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mx-2 my-8 rounded-md animated-fade-in animated-delay-4">
						{contactSubtittle}
					</h2>
				</div>
			</section>
			<section className="flex flex-col md:flex-row justify-between items-start md:items-start w-full bg-neutral-300">
				<article className="flex flex-col w-full md:my-8 md:w-1/2 p-4">
					<h1 className="text-2xl font-semibold mb-4">{tittleForm}</h1>
					<form className="w-full ">
						{formFields.map((field, index) => (
							<div key={index} className="mb-4">
								<label
									htmlFor={field.name}
									className="block text-lg font-medium mb-1"
								>
									{field.label}
								</label>
								{field.type === "textarea" ? (
									<textarea
										id={field.name}
										name={field.name}
										className="w-full p-2 border border-gray-300 rounded"
										rows="4"
										placeholder={field.placeholder}
									></textarea>
								) : (
									<input
										id={field.name}
										type={field.type}
										name={field.name}
										className="w-full p-2 border border-gray-300 rounded"
										placeholder={field.placeholder}
									/>
								)}
							</div>
						))}
						<div className="flex justify-center md:justify-end">
							<button
								type="submit"
								className=" bg-lime-200 text-neutral-600 font-bold rounded-lg hover:bg-lime-400 hover:text-neutral-100 py-2 px-4 text-center"
							>
								Enviar
							</button>
						</div>
					</form>
				</article>
				<article className="flex flex-col w-full md:w-1/2 p-4 md:my-8">
					<h2 className="text-2xl font-semibold mb-4">{contactInfo}</h2>
					<div className="mb-4">
						<h3 className="text-lg font-medium">
							{tittlesInfoContact.ADDRESS}
						</h3>
						<p>{infoContact.address.addressLine}</p>
						<p>{infoContact.address.city}</p>
						<p>{infoContact.address.province}</p>
						<p>{infoContact.address.postalCode}</p>
						<p>{infoContact.address.country}</p>
						<div className="w-full h-64 relative overflow-hidden">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209225.3883869778!2d-82.30585247828715!3d34.97799014841222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48278173fd277d7%3A0xb2f44e73d004c6fc!2sSpartan%20City%20Fitness%2C%20LLC!5e0!3m2!1sen!2sca!4v1721686733658!5m2!1sen!2sca"
								width="100%"
								height="100%"
								style={{border: 0}}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Google Maps Location"
								className="absolute top-0 left-0 w-full h-full"
							></iframe>
						</div>
					</div>
					<div className="mb-4">
						<h3 className="text-lg font-medium">{tittlesInfoContact.PHONE}</h3>
						<p>{infoContact.contactDetails.phone}</p>
					</div>
					<div className="mb-4">
						<h3 className="text-lg font-medium">{tittlesInfoContact.EMAIL}</h3>
						<p>{infoContact.contactDetails.email}</p>
					</div>
				</article>
			</section>
		</>
	);
};

export default Contact;
