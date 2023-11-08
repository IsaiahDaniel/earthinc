import Marquee from "react-fast-marquee";
import { circledImg } from "../../assets/home";
import Button from "../global/Button";

import Why1 from "../../assets/home/why-1.png";
import Why2 from "../../assets/home/why-2.png";
import Why3 from "../../assets/home/why-3.png";
import Why4 from "../../assets/home/why-4.png";

type Props = {};

const reasons = [
	{
		title: "Find your tribe",
		description:
			"Connect with like-minded individuals who share your passion for art and creativity. As an Earthling, you'll be part of a global community that celebrates diversity, collaboration, and artistic expression",
		image: Why1,
	},
	{
		title: "Empower your creativity",
		description:
			"Earth provides a supportive and nurturing environment for artists to unleash their creative potential. Gain access to resources, workshops, and mentorship opportunities designed to help you grow as an artist and reach your full potential.",
		image: Why2,
	},
	{
		title: "Make a Difference",
		description:
			"By joining Earth, you're not just becoming a part of an art community; you're also contributing to a movement that seeks to transform the art world for the better. Be a hero and help shape the future of art.",
		image: Why3,
	},
	{
		title: "A World of Possibilities",
		description:
			"Earth harnesses the power of technology to create a seamless and stress-free experience for both artists and buyers. Stay ahead of the curve and embrace the future of art with Earth.",
		image: Why4,
	},
];

const Why = (props: Props) => {
	return (
		<div className="mt-12 lg:my-10">
			<div className="flex">
				<div
					className="w-[100px] h-[50px] lg:w-[303px] lg:h-[90px]"
					style={{
						background:
							"linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)",
					}}></div>
				<Marquee speed={100}>
					<h1
						className="text-[31px] lg:text-[54px] bg-clip-text text-transparent"
						style={{
							background:
								"linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
						}}>
						&nbsp; LOVE SHARE EXPRESS LOVE SHARE EXPRESS{" "}
					</h1>
				</Marquee>
			</div>
			<div
				className="px-4 lg:px-20 py-10 text-[#FAF9FF] rounded-xl w-[95%] mx-auto my-20"
				style={{ background: "linear-gradient(137.47deg, #AB54FD 0%, #260742 104.69%)" }}>
				<div className="flex flex-col leading-none w-full lg:w-[60%]">
					<h1 className="text-[32px] lg:text-6xl font-medium ">Why become</h1>
					<h1 className="text-[32px] lg:text-6xl font-medium self-end mr-12 lg:mr-32">an Earthling?</h1>
					{/* <p className='lg:ml-16 text-xs lg:text-xl font-["Roboto"] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20">
					{reasons.map((reason, index) => (
						<div
							key={index}
							className="p-[3px]"
							style={{
								background: "linear-gradient(#EA6EE7 100%, #FD68E3 100%, #B66FFA 100%, #7668FD 100%, #7D2AE7 100% )",
							}}>
							<div
								className="flex flex-col gap-4 lg:gap-10 py-10 px-10 lg:px-20 lg:h-full"
								style={{ background: "linear-gradient(137.47deg, #AB54FD 0%, #260742 104.69%)" }}>
								<img src={reason.image} alt="" className="w-[20%] h-[20%] self-end" />
								<h4 className="lg:text-4xl font-medium w-30">{reason.title}</h4>
								<p className='font-["Roboto"] lg:text-2xl lg:font-light'>{reason.description}</p>
							</div>
						</div>
					))}
				</div>
				<Button buttonType="button" text="Join Community" classNames="block mx-auto" />
			</div>
		</div>
	);
};

export default Why;
