import React, { useState } from "react";
import { Bag, HamburgerButton, Logo } from "../assets/Icon";

export const Header = () => {
	const [toggleSideNav, setToggleSideNav] = useState(false);

	return (
		<header className="flex items-center justify-between p-4 md:py-5 md:px-20">
			<SideNav
				toggleNav={toggleSideNav}
				setToggleNav={() => setToggleSideNav(false)}
			/>
			<div className="">
				<a href="" className="flex items-center gap-2">
					<Logo />
					<p className="font-bold text-primary text-2xl">Dekoor</p>
				</a>
			</div>
			<div className="gap-20 md:flex font-semibold hidden">
				<a href="">About us</a>
				<a href="">Furniture</a>
				<a href="">Partnership</a>
				<a href="">Contact</a>
			</div>
			<div className="hidden md:flex gap-2">
				<button className="py-2 px-4 text-sm bg-secondary rounded-md">
					Sign Up
				</button>
				<button className="bg-primary p-2 rounded-md">
					<Bag />
				</button>
			</div>
			<div
				className="block md:hidden"
				onClick={() => setToggleSideNav(!toggleSideNav)}>
				<HamburgerButton />
			</div>
		</header>
	);
};

export function SideNav({ toggleNav, setToggleNav }) {
	return (
		<>
			{/* Overlay */}
			{toggleNav && (
				<div
					onClick={() => setToggleNav(false)}
					className="absolute inset-0"></div>
			)}

			{/* Sidenav */}
			<div className={`sidenav ${toggleNav ? "!w-[230px]" : "!w-0"}`}>
				<button
					onClick={() => setToggleNav(false)}
					className="closebtn text-slate-500">
					✖
				</button>

				<div className="mt-16 min-w-96 text-xl flex flex-col px-10 gap-10 font-bold text-primary">
					<a href="">About us</a>
					<a href="">Furniture</a>
					<a href="">Partnership</a>
					<a href="">Contact</a>
				</div>
			</div>
		</>
	);
}
