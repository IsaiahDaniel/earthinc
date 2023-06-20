import React from 'react'
import {artCard, artCard1, artCard2} from '../../assets/home'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"


type Props = {}

const Team = (props: Props) => {
  return (
    <div className='w-full md:w-[80%] mx-auto my-20'>
        <div className="flex flex-col leading-none w-[80%] md:w-[60%] mx-auto">
              <h1 className='text-[32px] lg:text-6xl font-medium '>Meet our</h1>
              <h1 className='text-[32px] lg:text-6xl font-medium self-end mr-36 lg:mr-72'>team</h1>
              <p className='lg:ml-16 text-xs lg:text-lg font-["Roboto"] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* <div className='grid grid-cols-2 md:grid-cols-3 w-[90%] mx-auto my-16 gap-3 md:gap-10'>
            <div className='bg-teamImg1 bg-contain bg-no-repeat h-[370px] bg-black'>
              <h1>Hello world</h1>
            </div>
            <div className='bg-teamImg1 bg-contain bg-no-repeat'>
              <h1>Hello world</h1>
            </div>
            <div className='bg-teamImg1 bg-contain bg-no-repeat'>
              <h1>Hello world</h1>
            </div>
        </div> */}
         <div className="px-1 md:px-20 mx-auto my-16">
            <Carousel
              className="rounded-xl"
              transition={{ duration: 2 }}
              loop={true}
              // autoplay={true}
              navigation={() => null}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 -translate-y-2/4 left-4 border border-[#EA6EE7]"
                >
                  <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-[#FD68E3]" />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 -translate-y-2/4 !right-4 border border-[#EA6EE7]"
                >
                  <ArrowRightIcon strokeWidth={2} className="w-6 h-6 text-[#FD68E3]" />
                </IconButton>
              )}
            >
                <div className='bg-teamImg1 bg-contain relative bg-no-repeat h-[250px] md:h-[370px] w-[50%] md:w-[290px] object-cover mx-auto bg-black'>
                  <div className='text-right absolute bottom-5 right-5 md:bottom-10 md:right-10 text-[#FAF9FF]'>
                    <h2 className='font-semibold md:text-3xl'>Liz Ona</h2>
                    <h3 className='md:text-2xl font-extralight'>Brand Designer</h3>
                  </div>
                </div>
                <div className='bg-teamImg1 bg-contain relative bg-no-repeat h-[250px] md:h-[370px] w-[50%] md:w-[290px] object-cover mx-auto bg-black'>
                  <div className='text-right absolute bottom-5 right-5 md:bottom-10 md:right-10 text-[#FAF9FF]'>
                    <h2 className='font-semibold md:text-3xl'>Liz Ona</h2>
                    <h3 className='md:text-2xl font-extralight'>Brand Designer</h3>
                  </div>
                </div>
                <div className='bg-teamImg1 bg-contain relative bg-no-repeat h-[250px] md:h-[370px] w-[50%] md:w-[290px] object-cover mx-auto bg-black'>
                  <div className='text-right absolute bottom-5 right-5 md:bottom-10 md:right-10 text-[#FAF9FF]'>
                    <h2 className='font-semibold md:text-3xl'>Liz Ona</h2>
                    <h3 className='md:text-2xl font-extralight'>Brand Designer</h3>
                  </div>
                </div>
              
            </Carousel>  
    </div>
    </div>
  )
}

export default Team