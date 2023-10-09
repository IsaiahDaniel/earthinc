import { Navbar } from "../home";
import { footerLogo } from "../../assets/home";

type Props = {};

const RoadmapHeader = (props: Props) => {
	return (
		<div
			className={`bg-mobileRoadmapHeroImg lg:bg-roadmapHeroImg h-[710px] bg-cover bg-no-repeat w-full py-2 px-5 lg:px-10`}>
			<Navbar logo={footerLogo} fontColor="#FAF9FF" />
			<div className="flex flex-col lg:gap-7 w-[90%] lg:w-[858px] lg:mt-32 mx-auto text-white text-center  lg:hidden">
				<h1>Roadmap</h1>
				<p className='text-xs lg:text-lg font-["Roboto"]'>
					At Earth, our journey towards redefining the art world is built on a solid roadmap that guides our every step.
					We're excited to share our vision and progress with you. Here's a glimpse of what lies ahead.
				</p>
			</div>
		</div>
	);
};

export default RoadmapHeader;
