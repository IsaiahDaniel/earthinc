import frame1 from "../../assets/roadmap/frame1.svg";
import frame2 from "../../assets/roadmap/frame2.svg";
import frame3 from "../../assets/roadmap/frame3.svg";
import frame4 from "../../assets/roadmap/frame4.svg";
import frame5 from "../../assets/roadmap/frame5.svg";
import FooterSocials from "../home/FooterSocials";
import scrollBtn from "../../assets/home/scrollBtn.svg";

type Props = {};

const RoadmapMain = (props: Props) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // You can use 'auto' for instant scrolling
		});
	};
	return (
		<div
			className={`bg-mobileRoadmapBgImg md:bg-roadmapBgImg bg-cover relative md:h-[4450px] -mt-[30rem] lg:-mt-80 bg-no-repeat w-full px-2 lg:px-10 pt-[10rem]`}>
			<div className="w-full bg-white grid grid-cols-1 md:grid-cols-2 lg:py-14">
				{/* Phase 01 */}
				{/* <div className='py-10 px-20 border-r-2 border-[#1E0734]'> */}
				<img src={frame1} alt="" className="lg:pt-8 pb-16 md:px-20" />
				{/* </div> */}
				<div className="flex flex-col gap-3 py-8 px-2 md:px-20 md:border-l-2 border-[#1E0734]">
					<h3 className="text-3xl font-semibold">Phase 01 - We're here!</h3>
					<h2 className="text-5xl font-semibold">Ideation</h2>
					<h4 className="text-2xl font-medium">Creativity Takes Flight</h4>
					<p>
						<p> We've set out on a quest to transform the art experience in this initial phase.</p>
						<br />
						<p>
							Our team has considered the approaches and frameworks necessary to realize our vision of a platform where
							creativity knows no limitations.
						</p>
					</p>
				</div>

				{/* Phase 02 */}
				<img src={frame2} alt="" className="pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734] block lg:hidden" />

				<div className="flex flex-col gap-3 py-8 px-2 md:px-20 ">
					<h3 className="text-3xl font-semibold">Phase 02</h3>
					<h2 className="text-5xl font-semibold">Community Building</h2>
					<h4 className="text-2xl font-medium">Connecting Art Lovers Worldwide</h4>

					<p>
						<p>A thriving and encouraging community is necessary for art to flourish.</p>
						<br />
						<p>We concentrate on fostering connections throughout this stage.</p>
						<br />
						<p>
							In order to create a diverse and welcoming environment where ideas can freely flow, we reached out to artists,
							collectors, and enthusiasts from all over the world.
						</p>
						<br />
						<p> We're creating a community that values art in all of its forms together.</p>
					</p>
				</div>
				<img src={frame2} alt="" className="pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734] hidden lg:block" />

				{/* Phase 03 */}
				<img src={frame3} alt="" className="pt-8 pb-16 px-2 md:px-20" />
				<div className="flex flex-col gap-3 py-8 md:px-20 md:border-l-2 border-[#1E0734]">
					<h3 className="text-3xl font-semibold">Phase 03</h3>
					<h2 className="text-5xl font-semibold">App Launch</h2>
					<h4 className="text-2xl font-medium">Unveiling the Canvas of Possibilities</h4>
					<p>
						<p>The moment we've all been waiting for!</p>
						<br />
						<p>
							After dedicating extensive time and effort into its development, we are proud to present a platform that
							revolutionizes the art experience.
						</p>
						<br />
						<p>
							Through meticulous attention to detail, we have created a tool that empowers artists, captivates art
							enthusiasts, and pushes the boundaries of creativity.
						</p>
						<br />
					</p>
				</div>

				{/* Phase 04 */}
				<img src={frame4} alt="" className="pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734] block lg:hidden" />

				<div className="flex flex-col gap-3 py-8 px-2 md:px-20">
					<h3 className="text-3xl font-semibold">Phase 04</h3>
					<h2 className="text-5xl font-semibold">User Adoption and Marketing</h2>
					<h4 className="text-2xl font-medium">Spreading the colors of Innovation and creativity</h4>
					<p>
						<p>Following the launch, we won't be stopping.</p>
						<br />
						<p>We'll focus on generating interest and expanding our user base throughout this phase.</p>
						<br />
						<p>
							We want to connect with art lovers all across the world through creative marketing tactics, alliances, and
							compelling campaigns.
						</p>
					</p>
				</div>
				<img src={frame4} alt="" className="pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734] hidden lg:block" />

				{/* Phase 05 */}
				<img src={frame5} alt="" className="pt-8 pb-16 px-2 md:px-20" />
				<div className="flex flex-col gap-3 pb-[40rem] lg:pb-8 md:px-20 md:border-l-2 border-[#1E0734]">
					<h3 className="text-3xl font-semibold">Phase 05</h3>
					<h2 className="text-5xl font-semibold">Scale</h2>
					<h4 className="text-2xl font-medium">Elevating Art to New Heights</h4>
					<p>
						<p>As we enter this concluding stage of our roadmap, our vision expands.</p> <br />{" "}
						<p>
							We remain dedicated to continuous enhancement by actively seeking and incorporating your valuable feedback
							while striving towards reaching new heights through the expansion of our platform.
						</p>
						<br />{" "}
						<p>
							Our ultimate objective is to establish ourselves as a global hub for artists, collectors, and art enthusiasts
							alike.
						</p>
					</p>
				</div>
				<img
					src={scrollBtn}
					alt=""
					className="absolute right-16 bottom-[550px] lg:bottom-[750px] cursor-pointer"
					onClick={scrollToTop}
				/>
			</div>
			{/* <div className=""> */}
			{/* </div> */}
			<FooterSocials />
		</div>
	);
};

export default RoadmapMain;
