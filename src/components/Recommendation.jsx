import React from "react";

export const Recommendation = () => {
	return (
		<section className="flex flex-col-reverse flex-reverse md:grid md:grid-cols-12 mb-20">
			<div className="col-span-6  ">
				<div className="flex gap-x-5 md:justify-start justify-center md:p-0 px-6">
					<img
						className="md:w-[20%] w-[31%] object-cover rounded-md"
						src="furniture1.jpg"
						alt=""
					/>
					<img
						className="md:w-[20%] w-[31%] object-cover rounded-md"
						src="furniture2.jpg"
						alt=""
					/>
					<img
						className="md:h-[450px] md:w-full w-[31%] rounded-md"
						src="furniture3.jpg"
						alt=""
					/>
				</div>
			</div>
			<div className="col-span-6 px-10 md:px-20">
				<p className="text-2xl mb-6 text-center md:text-start">Categories</p>
				<p className="md:text-5xl text-2xl font-bold text-primary mb-10 text-center md:text-start">
					Furniture Sets Recommendations
				</p>
				<div>
					<p className="font-bold text-primary md:mb-4 mb-7 text-xl md:text-md">
						Bedroom
					</p>
					<div className="bg-secondary md:mb-4 mb-7 p-5">
						<p className="font-bold text-primary text-xl md:text-md">
							Living Room
						</p>
						<p>
							Enjoy a great living room aesthetics with your family Designs
							created for increased comfortability
						</p>
					</div>
					<p className="font-bold text-primary md:mb-4 mb-7 text-xl md:text-md">
						Home Office
					</p>
					<p className="font-bold text-primary md:mb-4 mb-7 text-xl md:text-md">
						Gaming Room
					</p>
				</div>
			</div>
		</section>
	);
};
