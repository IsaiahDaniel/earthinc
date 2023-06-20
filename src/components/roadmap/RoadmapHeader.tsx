import React from 'react'
import { Navbar } from '../home'
import { footerLogo } from '../../assets/home'

type Props = {}

const RoadmapHeader = (props: Props) => {
  return (
    <div className={`bg-roadmapHeroImg h-[710px] bg-cover bg-no-repeat w-full py-2 px-5 lg:px-10`}>
      <Navbar logo={footerLogo} fontColor='#FAF9FF'/>
    </div>
  )
}

export default RoadmapHeader