import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import { innerBg } from "../../assets/home";

const faq = [
  {
    id: 1,
    question: "What is the Earth Community?",
    answer:
      "The Earth community is made up of individuals who deeply value the influence and significance of art and visual creativity. This vibrant ecosystem includes artists, collectors, art enthusiasts, and art advisors, among others.",
  },
  {
    id: 2,
    question: "How does Earth democratize the art world?",
    answer:
      "We are achieving this by creating a disruptive platform that takes advantage of blockchain technology to increase accessibility, supporting emerging artists, eliminate elitism and exclusivity. ",
  },
  {
    id: 3,
    question: "What resources and opportunities does Earth provide for artists?",
    answer:
      "Earth Inc offers artists a unique opportunity to foster a community around their work. Additionally, we provide valuable information and resources that aid in expanding an artist's market reach. Our platform also allows for online exhibitions and access to collectors, creating a comprehensive network for artists to thrive.",
  },
  {
    id: 4,
    question: "Where can I sell my art?",
    answer:
      "The Earth app offers a user-friendly interface that incorporates creativity, community engagement, and blockchain technology. Be sure to stay connected for further updates regarding the upcoming launch of our app.",
  },
];

type Props = {};

const Faq = (props: Props) => {
  const [open, setOpen] = useState<number>();

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const customAnimation = { mount: { scale: 1 }, unmount: { scale: 0.9 } };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-20 relative">
      <h2 className='text-[32px] md:text-[64px] font-semibold pb-10 font-["Roboto"]'>FAQ</h2>
      <div className="w-full md:w-[90%] mx-auto">
        {faq.map((item, i) => (
          <Accordion
            open={open === item.id}
            key={i}
            icon={item.id === open ? <FaRegWindowMinimize /> : <FaPlus />}
            animate={customAnimation}
          >
            <AccordionHeader
              onClick={() => handleOpen(item.id)}
              className="bg-[#9D5FED] text-[#fff] text-sm md:text-base px-4 py-4 md:px-12 md:py-8"
            >
              {item.question}
            </AccordionHeader>
            <AccordionBody className="text-sm md:text-base px-4 py-4 md:px-12 md:py-8">
              {item.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
      <img src={innerBg} alt="" className="absolute bottom-0 top-5 -z-10 hidden md:block" />
    </div>
  );
};

export default Faq;
