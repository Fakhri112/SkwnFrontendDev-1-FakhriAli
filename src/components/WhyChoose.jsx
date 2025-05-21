import React from "react";
import { Briefcase, MagnifierWhite } from "../assets/Icon";

export const WhyChoose = () => {
	return (
		<section className="bg-primary text-white py-16 px-10 md:px-20">
			<p className="font-light text-center md:text-start">WHY CHOOSE US?</p>
			<p className="mt-5 text-center md:text-start text-3xl md:text-6xl font-bold">
				We care about details and the quality of our products
			</p>
			<div className="mt-12 flex flex-col md:flex-row justify-between font-bold md:items-center">
				<div className="flex gap-6 md:gap-2 md:p-1 md:self-start items-center md:w-64">
					<div className="bg-slate-400 p-4 md:p-2 rounded-md">
						<MagnifierWhite />
					</div>
					<p>MANUFACTURED WITH QUALITY MATERIALS</p>
				</div>
				<div className="md:self-start flex gap-6 md:gap-2 items-center md:w-64 ">
					<p className="bg-slate-400 md:text-sm md:my-0 my-5 text-xl p-5 py-3 md:px-3 md:py-2 rounded-md">
						5
					</p>
					<p>5 YEARS OF WARRANTY FOR EACH PROFUCT</p>
				</div>
				<div className="md:self-center flex gap-6 md:gap-x-2 md:p-1 items-center md:w-64">
					<div className="bg-slate-400 p-4 md:p-2 rounded-md">
						<Briefcase />
					</div>
					<p>20 YEARS OF EXPERTISE</p>
				</div>
			</div>
		</section>
	);
};
