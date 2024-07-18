import {Link} from "react-router-dom";
import logo from "../assets/images/loguito.png";
import iconFb from "../assets/images/iconsCARD/facebook.svg";
import iconWa from "../assets/images/iconsCARD/whatsapp.svg";
import iconIg from "../assets/images/iconsCARD/instagram.svg";
import iconX from "../assets/images/iconsCARD/twitterx.svg";

const companyName = "Spartan Fitness";
const Footer = () => {
	const socialMediaTitle = "Nuestras Redes";
	const iconSocialMedia = [
		{icon: iconFb, url: "https://facebook.com"},
		{icon: iconWa, url: "https://whatsapp.com"},
		{icon: iconIg, url: "https://instagram.com"},
		{icon: iconX, url: "https://x.com"},
	];
	const companyTittles = "Nuestro emprendimiento";
	const companySection = [
		{title: "Nuestros servicios", link: "/services"},
		{title: "Quienes somos", link: "/about"},
		{title: "Contáctanos", link: "/contact"},
	];

	const legalTittle = "Legal";
	const legalSection = [
		{title: "Términos y Condiciones", link: "/terms&cond"},
		{title: "Política de Privacidad", link: "/privacypolicy"},
		{title: "Política de Cookies", link: "/cookiespolicy"},
	];

	const copyWright =
		"Copywright© 2024 Spartan Fitness | Creado por FLouit . Todos los derechos reservados.";

	return (
		<footer className="bg-neutral-500 text-neutral-300r py-8 text-sm">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="flex flex-col items-center">
					<strong>
						<h3 className="text-neutral-300 mb-2">{companyName}</h3>
					</strong>

					<Link to="/">
						<img src={logo} alt="Logo" className="h-16 w-16 mb-4" />
					</Link>
				</div>

				<div className="flex flex-col items-center">
					<strong>
						<h3 className="text-neutral-300 mb-2">{socialMediaTitle}</h3>
					</strong>
					<div className="flex space-x-4">
						{iconSocialMedia.map((icon, index) => (
							<a
								key={index}
								href={icon.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={icon.icon} alt="Icono" className="h-8 w-8" />
							</a>
						))}
					</div>
				</div>

				<div className="flex flex-col items-center">
					<strong>
						<h3 className="text-neutral-300 mb-2">{companyTittles}</h3>
					</strong>
					<ul className="list-disc text-neutral-300">
						{companySection.map((btnSection, index) => (
							<li key={index} className="mb-2">
								<Link
									to={btnSection.link}
									className="hover:underline text-neutral-300"
								>
									{btnSection.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col items-center">
					<strong>
						<h3 className="text-neutral-300 mb-2">{legalTittle}</h3>
					</strong>
					<ul className="list-disc text-neutral-300">
						{legalSection.map((btnLegal, index) => (
							<li key={index} className="mb-2">
								<Link
									to={btnLegal.link}
									className="hover:underline text-neutral-300"
								>
									{btnLegal.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="mt-8">
				<p className="italic text-neutral-300 text-xs text-right mx-4 ">
					{copyWright}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
