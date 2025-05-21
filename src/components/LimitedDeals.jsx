import React from "react";
import { Mail } from "../assets/Icon";

export const LimitedDeals = () => {
	return (
		<section className="py-20 md:px-32 px-10">
			<p className="text-center md:text-start text-primary text-lg">
				LIMITED DEALS
			</p>
			<p className=" text-center md:text-start text-primary text-xl md:text-6xl font-bold my-8">
				Become a member and get 10% off of your first purchase
			</p>
			<div className="flex items-center ">
				<input
					className="py-4 w-96 px-4"
					type="text"
					placeholder="Enter your email here"
				/>
				<button className="bg-secondary p-4">
					<Mail />
				</button>
			</div>
		</section>
	);
};
