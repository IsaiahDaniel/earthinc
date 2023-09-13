import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import {FaPlus, FaRegWindowMinimize} from "react-icons/fa";
import { innerBg } from '../../assets/home'

const faq = [
  {
   "id": 1,
   "question": "What are the services do you offer",
   "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?"
  },
  {
   "id": 2,
   "question": "what are our preferred method of payment",
   "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"
  },
  {
   "id": 3,
   "question": "What how does it take to upgrade a package",
   "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi."
  },
  {
   "id": 4,
   "question": "Where are your offices located around the world",
   "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi."
  }
 ]

type Props = {}

const Faq = (props: Props) => {
  const [open, setOpen] = useState();

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const customAnimation = { mount: { scale: 1 }, unmount: { scale: 0.9 }, };

  return (
    <div className='w-[90%] md:w-[80%] mx-auto my-20 relative'>
      <h2 className='text-[32px] md:text-[64px] font-semibold pb-10 font-["Roboto"]'>FAQ</h2>
      <div className='w-full md:w-[90%] mx-auto'>
        {faq.map((item, i) => (
            <Accordion open={open === item.id} key={i} icon={item.id === open ? <FaRegWindowMinimize/> : <FaPlus/>} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(item.id)} className='bg-[#9D5FED] text-[#fff] text-sm md:text-base px-4 py-4 md:px-12 md:py-8'>
                  {item.question}
              </AccordionHeader>
              <AccordionBody className="text-sm md:text-base px-4 py-4 md:px-12 md:py-8">
                  {item.answer}
              </AccordionBody>
          </Accordion>
        ))}
      </div>
      <img src={innerBg} alt="" className='absolute bottom-0 top-5 -z-10 hidden md:block' />
    </div>
  );
}

export default Faq