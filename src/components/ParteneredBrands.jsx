import React from "react";

export const ParteneredBrands = () => {
	return (
		<section className="flex flex-col md:flex-row items-center justify-around p-10 my-14 md:my-20">
			<div className="text-center md:text-start mb-10">
				<p className="text-6xl font-bold text-primary">25+</p>
				<p className="font-light text-sm text-primary">PARTNERED BRANDS</p>
			</div>
			<img src="companylogos.png" alt="" />
		</section>
	);
};
