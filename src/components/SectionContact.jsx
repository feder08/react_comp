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
			province: "",
			postalCode: "",
			country: "",
			map: "",
		},

		contactDetails: {phone: "", email: ""},
	};

	const tittlesInfoContact = {
		ADDRESS: "Direccion:",
		PHONE: "Telefono:",
		EMAIL: "Correo Electronico:",
	};

	return (
		<section className=" bg-lime-400">
			<div className="" style={{backgroundImage: ``}}>
				<h1>{contactTittle}</h1>
				<h3>{contactSubtittle}</h3>
			</div>
			<article>
				<h1>{tittleForm}</h1>
				<form className="">
					{formFields.map((field, index) => (
						<div key={index} className="">
							<label htmlFor={field.name} className="">
								{field.label}
							</label>
							{field.type === "textarea" ? (
								<textarea
									id={field.name}
									name={field.name}
									className=""
									rows="10"
									placeholder={field.placeholder}
								></textarea>
							) : (
								<input
									id={field.name}
									type={field.type}
									name={field.name}
									className=""
									placeholder={field.placeholder}
								/>
							)}
						</div>
					))}
				</form>
			</article>
			<article>
				<h2>{contactInfo}</h2>
				<div>
					<h3>{tittlesInfoContact.ADDRESS}</h3>
					<p>{infoContact.address.addressLine}</p>
					<p>{infoContact.address.city}</p>
					<p>{infoContact.address.province}</p>
					<p>{infoContact.address.postalCode}</p>
					<p>{infoContact.address.country}</p>
					{infoContact.address.map && (
						<img src={infoContact.address.map} alt="Location Map" />
					)}
				</div>
				<div>
					<h3>{tittlesInfoContact.PHONE}</h3>
					<p></p>
				</div>
				<div>
					<h3>{tittlesInfoContact.EMAIL}</h3>
					<p></p>
				</div>
			</article>
		</section>
	);
};

export default Contact;
