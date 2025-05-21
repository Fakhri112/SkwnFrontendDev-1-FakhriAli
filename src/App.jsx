import { BestSeller } from "./components/BestSeller";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { LimitedDeals } from "./components/LimitedDeals";
import { ParteneredBrands } from "./components/ParteneredBrands";
import { Recommendation } from "./components/Recommendation";
import { WhyChoose } from "./components/WhyChoose";

function App() {
	return (
		<>
			<div className="">
				<Header />
				<Introduction />
				<WhyChoose />
				<ParteneredBrands />
				<Recommendation />
				<BestSeller />
				<LimitedDeals />
				<Footer />
			</div>
		</>
	);
}

export default App;
