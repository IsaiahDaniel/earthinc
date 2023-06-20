import React from 'react'
import frame1 from '../../assets/roadmap/frame1.svg'
import frame2 from '../../assets/roadmap/frame2.svg'
import frame3 from '../../assets/roadmap/frame3.svg'
import frame4 from '../../assets/roadmap/frame4.svg'
import frame5 from '../../assets/roadmap/frame5.svg'
import FooterSocials from '../home/FooterSocials'
type Props = {}

const RoadmapMain = (props: Props) => {
  return (
    <div className={`md:bg-roadmapBgImg bg-cover relative md:h-[4450px] -mt-96 bg-no-repeat w-full px-5 lg:px-10 pt-96`}>
        <div className='w-full bg-white grid grid-cols-1 md:grid-cols-2 py-14'>
            
            {/* Phase 01 */}
            {/* <div className='py-10 px-20 border-r-2 border-[#1E0734]'> */}
              <img src={frame1} alt="" className='pt-8 pb-16 md:px-20' />
            {/* </div> */}
            <div className='flex flex-col gap-3 py-8 md:px-20 md:border-l-2 border-[#1E0734]'>
              <h3 className='text-3xl font-semibold'>Phase 01 - We're here!</h3>
              <h2 className='text-5xl font-semibold'>The Ideation</h2>
              <h4 className='text-2xl font-medium'>Ideate. Design. Community-Building.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* Phase 02 */}
            <div className='flex flex-col gap-3 py-8 md:px-20 '>
              <h3 className='text-3xl font-semibold'>Phase 02</h3>
              <h2 className='text-5xl font-semibold'>The Ideation</h2>
              <h4 className='text-2xl font-medium'>Ideate. Design. Community-Building.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img src={frame2} alt="" className='pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734]' />

            {/* Phase 03 */}
            <img src={frame3} alt="" className='pt-8 pb-16 md:px-20' />
            <div className='flex flex-col gap-3 py-8 md:px-20 md:border-l-2 border-[#1E0734]'>
              <h3 className='text-3xl font-semibold'>Phase 03</h3>
              <h2 className='text-5xl font-semibold'>The Ideation</h2>
              <h4 className='text-2xl font-medium'>Ideate. Design. Community-Building.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* Phase 04 */}
            <div className='flex flex-col gap-3 py-8 md:px-20'>
              <h3 className='text-3xl font-semibold'>Phase 04</h3>
              <h2 className='text-5xl font-semibold'>The Ideation</h2>
              <h4 className='text-2xl font-medium'>Ideate. Design. Community-Building.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img src={frame4} alt="" className='pt-8 pb-16 md:px-20 md:border-l-2 border-[#1E0734]' />
            
            {/* Phase 05 */}
            <img src={frame5} alt="" className='pt-8 pb-16 md:px-20' />
            <div className='flex flex-col gap-3 py-8 md:px-20 md:border-l-2 border-[#1E0734]'>
              <h3 className='text-3xl font-semibold'>Phase 05</h3>
              <h2 className='text-5xl font-semibold'>The Ideation</h2>
              <h4 className='text-2xl font-medium'>Ideate. Design. Community-Building.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <FooterSocials/>

    </div>
  )
}

export default RoadmapMain