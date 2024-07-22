import React from "react";
import PropTypes from "prop-types";

// Contenido legal con saltos de línea
const legalContent = {
	terms: {
		title: "Términos y Condiciones",
		content: `Bienvenido a [Spartan Fitness]\n\nEstos Términos y Condiciones regulan el uso de nuestro sitio web [www.EjemplodeWeb.com]. Al acceder o utilizar el Sitio, usted acepta estos términos. Si no está de acuerdo con ellos, por favor, no utilice nuestro Sitio.\n\nUso del Sitio\n\nUsted se compromete a utilizar el Sitio solo para fines legales y de acuerdo con todas las leyes y regulaciones aplicables. No puede utilizar el Sitio para transmitir, distribuir o almacenar material que sea ilegal, ofensivo o que infrinja los derechos de propiedad intelectual de terceros.\n\nPropiedad Intelectual\n\nTodos los derechos de propiedad intelectual relacionados con el Sitio y su contenido son propiedad de [Tu Empresa] o de sus licenciantes. Usted no puede reproducir, distribuir, modificar o crear trabajos derivados sin el permiso expreso de [Tu Empresa].\n\nExclusión de Responsabilidad\n\nEl Sitio se proporciona "tal cual" y [Tu Empresa] no hace ninguna garantía sobre la exactitud, integridad o disponibilidad del Sitio. No seremos responsables por ningún daño derivado del uso del Sitio, incluyendo daños directos, indirectos, incidentales o consecuenciales.\n\nModificaciones\n\nNos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones se publicarán en esta página y serán efectivas a partir de su publicación.\n\nLey Aplicable\n\nEstos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de [Tu País/Estado], sin tener en cuenta sus principios de conflicto de leyes.\n\nContacto\n\nPara cualquier pregunta sobre estos Términos y Condiciones, por favor contáctenos en [Tu Dirección de Correo Electrónico].`,
	},
	privacy: {
		title: "Política de Privacidad",
		content: `Información que Recopilamos\n\nRecopilamos información personal que usted nos proporciona directamente, como nombre, dirección de correo electrónico, y cualquier otra información que decida proporcionarnos. También podemos recopilar información de uso del Sitio mediante cookies y otras tecnologías de seguimiento.\n\nUso de la Información\n\nUtilizamos su información para mejorar nuestros servicios, responder a sus consultas, y enviarle comunicaciones relevantes. No compartiremos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.\n\nSeguridad de la Información\n\nTomamos medidas razonables para proteger su información personal contra accesos no autorizados, alteraciones, divulgaciones o destrucción. Sin embargo, ninguna transmisión de datos a través de Internet o sistema de almacenamiento puede ser completamente segura.\n\nCookies\n\nUtilizamos cookies para mejorar su experiencia en nuestro Sitio. Las cookies son pequeños archivos que se almacenan en su dispositivo y que permiten personalizar su experiencia. Puede ajustar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del Sitio.\n\nDerechos del Usuario\n\nUsted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, por favor contáctenos en [Tu Dirección de Correo Electrónico].\n\nCambios en la Política\n\nPodemos actualizar esta Política de Privacidad ocasionalmente. Las modificaciones serán publicadas en esta página y serán efectivas a partir de su publicación.\n\nContacto\n\nPara cualquier pregunta sobre nuestra Política de Privacidad, por favor contáctenos en [Tu Dirección de Correo Electrónico].`,
	},
	cookies: {
		title: "Política de Cookies",
		content: `Qué Son las Cookies\n\nLas cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Sirven para mejorar su experiencia en línea al recordar sus preferencias y ofrecer contenido personalizado.\n\nCookies que Utilizamos\n\nUtilizamos cookies para:\n\n- Analizar el tráfico del Sitio y mejorar su funcionalidad.\n- Recordar sus preferencias y configuraciones.\n- Proporcionar contenido y anuncios relevantes.\n\nCómo Administrar las Cookies\n\nPuede ajustar la configuración de su navegador para rechazar cookies o para recibir una notificación cuando se envíen cookies. Sin embargo, esto puede afectar la funcionalidad del Sitio y su experiencia de usuario.\n\nCookies de Terceros\n\nNuestro Sitio puede contener cookies de terceros, como servicios de análisis y publicidad. Estos terceros tienen sus propias políticas de cookies y privacidad.\n\nCambios en la Política\n\nPodemos actualizar esta Política de Cookies de vez en cuando. Las modificaciones serán publicadas en esta página y serán efectivas a partir de su publicación.\n\nContacto\n\nPara cualquier pregunta sobre nuestra Política de Cookies, por favor contáctenos en [Tu Dirección de Correo Electrónico].`,
	},
};

// Función para formatear el contenido con saltos de línea
const formatContent = (text) => {
	return text.split("\n").map((line, index) => (
		<React.Fragment key={index}>
			{line}
			<br />
		</React.Fragment>
	));
};

const LegalPage = ({type}) => {
	const content = legalContent[type] || {
		title: "Página no encontrada",
		content: "El contenido solicitado no está disponible.",
	};

	return (
		<section>
			<div className="p-8  mx:8 md:mx-36">
				<h1 className="text-2xl text-center font-bold mb-4">{content.title}</h1>
				<div>{formatContent(content.content)}</div>
			</div>
		</section>
	);
};

LegalPage.propTypes = {
	type: PropTypes.oneOf(["terms", "privacy", "cookies"]).isRequired,
};

export default LegalPage;
