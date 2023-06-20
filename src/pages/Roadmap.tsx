import React from 'react'
import { Navbar } from '../components/home'
import { RoadmapHeader, RoadmapMain } from '../components/roadmap'

type Props = {}

const Roadmap = (props: Props) => {
  return (
    <>
        <RoadmapHeader/>
        <RoadmapMain/>
    </>
  )
}

export default Roadmap