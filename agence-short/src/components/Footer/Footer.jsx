import Instagram from "@/icons/instagram";
import Linkedin from "@/icons/linkedin";
import Image from "next/image";

export default function Footer() {

	const menuItems = [
		{
			label: "Accueil",
			href: "#"
		},
		{
			label: "Étude de cas",
			href: "#"
		},
		{
			label: "Portfolio",
			href: "#"
		},
		{
			label: "Nos Clients",
			href: "#"
		},
		{
			label: "FAQ",
			href: "#"
		},
		{
			label: "Prendre un RDV",
			href: "#"
		},
	];

	return(
		<div className="relative  bg-primary flex flex-col items-center py-[70px] px-[14px] md:px-[100px] overflow-hidden">
			<span
				className="absolute bottom-20 md:bottom-35 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-[112px] md:text-[280px] text-white/10 select-none pointer-events-none whitespace-nowrap max-w-full"
				style={{
					WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskPosition: "bottom",
					WebkitMaskSize: "100% 100%",
					maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
					maskRepeat: "no-repeat",
					maskPosition: "bottom",
					maskSize: "100% 100%",
				}}
				>
        SHORT.
      </span>
			<div className="mb-[71px]">
				<Image src={"/images/logoWhite.svg"} alt="logo" width={150} height={62}/>
			</div>
			<div className="flex flex-col gap-[47px] items-center">
				<div className="text-[14px] flex flex-col md:flex-row items-center gap-3.5 md:gap-7">
					{menuItems.map((item) => (
						<a key={item.label} href={item.href} className="text-white font-normal hover:underline transition-all duration-300 ease-in-out">
							{item.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-3.5 md:gap-7">
					<a href="#" className="text-white text-[14px] hover:underline">Nous contacter</a>
					<div className="bg-white p-[5px] rounded-lg cursor-pointer">
						<Linkedin/>
					</div>
					<div className="bg-white p-[5px] rounded-lg cursor-pointer">
						<Instagram/>
					</div>
				</div>
				<div className="text-[#FFFEFC]/45 text-[11px] flex flex-col md:flex-row items-center gap-3.5 md:gap-7">
					<p>© 2025 Agence Short. Tous droits réservés.</p>
					<a href="#" className="hover:underline">CGV</a>
					<a href="#" className="hover:underline">Mentions légales</a>
					<a href="#" className="hover:underline">Politique de confidentialité</a>
				</div>
			</div>
		</div>
	)
}