"use client"

import Image from "next/image";
import {useState} from "react";

import Open from "@/icons/open";
import Close from "@/icons/close";


export default function Header() {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => setOpenMenu(prev => !prev);

	const menuItems = [
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
	];

	return(
		<div className="bg-[#FFFEFC]/24 border border-[#707070]/16 backdrop-blur-md mx-[19.5px] md:mx-[200px] px-5 md:px-[62px] py-[25px] md:py-[11px] rounded-full shadow">
			<div className="flex justify-between items-center ">
				<Image src={"/images/logo.svg"} alt="logo" width={50} height={50} className="md:w-[70px]"/>

				<button onClick={toggleMenu} className="md:hidden p-2 flex items-center justify-center transition cursor-pointer">
					{openMenu ? <Close/> : <Open/>}
				</button>
				
				<div className="hidden md:flex">
					<div className="flex gap-4 text-[14px]">
						{menuItems.map((item) => (
							<a key={item.label} href={item.href} className="hover:text-primary px-5 my-auto transition">
								{item.label}
							</a>
						))}
						<button className="bg-black px-[10px] py-[8px] text-white rounded-full text-[16px] cursor-pointer hover:bg-primary transition">
							Prendre un rendez-vous
						</button>
					</div>

				</div>
			</div>

			{openMenu && (
				<div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md mt-2 p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4">
					{menuItems.map((item) => (
						<a key={item.label} href={item.href} className="hover:text-primary transition">
							{item.label}
						</a>
					))}
					<button className="bg-black px-[10px] py-[8px] text-white rounded-full text-[16px] cursor-pointer hover:bg-primary transition">
						Prendre un rendez-vous
					</button>
				</div>
			)}
		</div>
	)
}