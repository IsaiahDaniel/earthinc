import React from 'react'
import {artCard, artCard1, artCard2} from '../../assets/home';

import ValueImgOne from "../../assets/home/art_card_1.png";
import ValueImgTwo from "../../assets/home/art_card_2.png";
import ValueImgThree from "../../assets/home/art_card_3.png";


type Props = {}

const Values = (props: Props) => {
  return (
    <div className='my-5'>
        <h2 className='text-[32px] md:text-[64px] font-semibold text-center pb-10'>We value</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 w-[70%] mx-auto gap-3 md:gap-10'>
            <img src={ValueImgOne} alt=""  />
            <img src={ValueImgTwo} alt="" />
            <img src={ValueImgThree} alt="" />
        </div>
    </div>
  )
}

export default Values