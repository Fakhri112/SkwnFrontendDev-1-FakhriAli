import React from "react";
import { Magnifier, Play } from "../assets/Icon";

export const Introduction = () => {
	return (
		<section className="md:grid md:grid-cols-12 flex flex-col items-center">
			<div className="col-span-8 grid place-items-center ">
				<div className="text-center md:text-start mt-20">
					<div className="md:text-6xl text-5xl font-bold">
						The kind of <p className="text-[#817253]">furniture</p> you have
						been looking for
					</div>
					<div className="flex md:flex-row flex-col gap-4 mt-6 items-center justify-center">
						<button className="bg-secondary md:py-5 md:px-6 p-5 rounded-[15px] w-[70%] md:w-full flex gap-4 items-center">
							<Magnifier />
							<p>SEARCH CATALOG</p>
						</button>
						<button className="md:py-5 md:px-6 p-5 rounded-[15px] border border-slate-500 flex w-[70%] md:w-full  gap-4 items-center">
							<Play />
							<p>WATCH VIDEOS</p>
						</button>
					</div>
				</div>
			</div>
			<div className="md:col-span-4 relative flex justify-end md:mt-0 mt-16 md:w-auto w-full md:h-auto h-72">
				<img src="sofa.png" alt="" className=" object-cover md:w-[90%] " />
				<div className="absolute bottom-10 left-12 md:left-18 p-2">
					<p className="bg-white/50 rounded-lg w-fit py-2 px-3 text-black">
						$329
					</p>
					<p className="text-white text-6xl my-2">Pösht Sofa</p>
					<button className="flex gap-4 text-white px-6 py-3 text-xs rounded-lg bg-primary">
						<p className="font-light">VIEW DETAILS</p>
						<p>❭</p>
					</button>
				</div>
			</div>
		</section>
	);
};
