import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useWindowSize } from "./hook/useWindowSize";

const bestSeller = [
	{
		name: "Und Sofa",
		price: "$800",
		pic: "1.jpg",
	},
	{
		name: "Und Chair",
		price: "$329",
		pic: "2.jpg",
	},
	{
		name: "Sofa Und",
		price: "$500",
		pic: "3.jpg",
	},
	{
		name: "Und Table",
		price: "$400",
		pic: "4.jpg",
	},
	{
		name: "Und Shelf",
		price: "$600",
		pic: "5.jpg",
	},
	{
		name: "Shof Und",
		price: "$500",
		pic: "3.jpg",
	},
];
export const BestSeller = () => {
	const [firstSlide, SetFirstSlide] = useState(1);
	const swiperRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const { width, height } = useWindowSize();

	const handleSlideChange = (swiper) => {
		const centerIndex = getCenterRealIndex(swiper);
		SetFirstSlide(centerIndex);
	};

	const getCenterRealIndex = (swiper) => {
		const activeIndex = swiper.activeIndex;
		const centerSlide =
			swiper.slides[width <= 700 ? activeIndex : activeIndex + 1];
		const realIndex = centerSlide?.getAttribute("data-swiper-slide-index");
		return Number(realIndex);
	};
	return (
		<section className="bg-primary relative md:pb-24 pb-10">
			<div className="md:px-20 mt-10 md:py-12 px-6 py-9  items-c flex justify-between">
				<div>
					<p className="text-white mb-5">OUR PRODUCTS</p>
					<p className="text-white md:text-5xl font-bold">
						This month's best seller
					</p>
				</div>
				<button className="md:py-3 py-2 px-6 bg-secondary rounded-lg self-center">
					SEE MORE
				</button>
			</div>
			<div className="relative overflow-hidden h-[74vw] md:h-[32vw] ps-4">
				<Swiper
					speed={1200}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					onSlideChange={handleSlideChange}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					loop={true}
					slidesPerView={width < 700 ? 2 : 5}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation]}
					className="mx-3 md:min-w-[120%]  md:absolute md:right-40">
					{bestSeller.map((data, idx) => (
						<SwiperSlide
							id={idx}
							className={`catalogue ${idx == firstSlide ? "shift" : ""}`}>
							<div
								className={`relative enlarge ${
									idx == firstSlide ? "open" : "close"
								}`}>
								<img
									src={`products/` + data.pic}
									alt=""
									className={`brightness-80  md:max-w-[90%] aspect-3/4 object-cover rounded-lg`}
								/>

								<div
									className={`absolute bottom-5 left-6 fade ${
										idx == firstSlide ? "in" : "out"
									}`}>
									<p className="bg-white/50 rounded-lg w-fit md:py-2 md:px-3 px-2 py-1 text-black">
										{data.price}
									</p>
									<p className="text-white md:text-6xl text-2xl my-2">
										{data.name}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="flex justify-end md:absolute md:right-0 md:bottom-1 z-99">
				<div className="flex gap-12 md:mb-16 px-20">
					<button
						ref={prevRef}
						className="absolute left-5 top-60 z-99 md:static cursor-pointer bg-secondary rounded-full py-4 px-6 text-2xl font-thin">
						❮
					</button>
					<button
						ref={nextRef}
						className="absolute right-5 top-60 z-99 md:static cursor-pointer bg-secondary rounded-full py-4 px-6 text-2xl font-thin">
						❯
					</button>
				</div>
			</div>
		</section>
	);
};
