import React from "react";
import { Logo } from "../assets/Icon";

const Footer = () => {
	return (
		<section className="flex justify-between px-10 md:px-28 flex-col md:flex-row">
			<div className=" md:w-[60%] md:text-start text-center">
				<div className="">
					<a
						href=""
						className="flex md:justify-start justify-center items-center gap-2">
						<Logo />
						<p className="font-bold text-primary text-2xl">Dekoor</p>
					</a>
				</div>
				<p className=" my-10 text-xl text-slate-500 md:w-[90%]">
					Dekoor is a furniture company created to fulfill the needs of family
					with aesthetic feeling in their furniture. Always pay attention to
					details and give clear communication for the customers. Priority of
					our design is comfortability.
				</p>
				<p className="text-xl text-slate-500">©Copyright 2022 Dekoor</p>
			</div>
			<div className="md:flex md:gap-8 grid grid-cols-2 mt-10">
				<div className="col-span-1 md:text-start text-center">
					<p className="mb-8 text-2xl">Support</p>
					<p className="mb-8 text-slate-500">FAQ</p>
					<p className="mb-8 text-slate-500">Shipping & Returns</p>
					<p className="mb-8 text-slate-500">Care guide</p>
					<p className="mb-8 text-slate-500">Redeem Warranty</p>
				</div>
				<div className="col-span-1 md:text-start text-center">
					<p className="mb-8 text-2xl">Social Media</p>
					<p className="mb-8 text-slate-500">Instagram</p>
					<p className="mb-8 text-slate-500">Facebook</p>
					<p className="mb-8 text-slate-500">Twitter</p>
					<p className="mb-8 text-slate-500">Tiktok</p>
				</div>
				<div className="col-span-2 md:text-start text-center">
					<p className="mb-8 text-2xl">About Us</p>
					<p className="mb-8 text-slate-500">Our Story</p>
					<p className="mb-8 text-slate-500">Designer</p>
					<p className="mb-8 text-slate-500">Craftmanship</p>
					<p className="mb-8 text-slate-500">Sustainability</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
