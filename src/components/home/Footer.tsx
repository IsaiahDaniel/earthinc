import React from 'react'
import Button from '../global/Button'
import { Link } from 'react-router-dom'
import { footerLogo } from '../../assets/home'
import FooterSocials from './FooterSocials'

const socials = [
  {name: 'Twitter', link: 'https://twitter.com'},
  {name: 'Discord', link: 'https://twitter.com'},
  {name: 'Facebook', link: 'https://facebook.com'},
  {name: 'Youtube', link: 'https://youtube.com'},
  {name: 'Instagram', link: 'https://instagram.com'},
  {name: 'Tiktok', link: 'https://tiktok.com'},
]
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={`flex flex-col relative pt-36 md:pt-48 text-[#fff] bg-mobileFooterBgImg lg:bg-footerBgImg h-[966px] md:h-[1366px] bg-contain bg-no-repeat w-full px-5 lg:px-10`}>
        <div className='w-[90%] md:my-20 mx-auto'>
            <div className="flex flex-col leading-none w-full lg:w-[60%]">
              <h1 className='text-[32px] lg:text-6xl font-medium '>Did someone</h1>
              <h1 className='text-[32px] lg:text-6xl font-medium self-end mr-10 lg:mr-20'>say fun mail?</h1>
              <p className='lg:ml-16 text-xs lg:text-lg font-["Roboto"] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <form className='flex flex-col md:flex-row justify-between gap-2 md:gap-8 my-5 md:my-16'>
                <input type="text" placeholder='First name' className='bg-[#FAF9FF] rounded-xl lg:w-[480px] p-4' />
                <input type="email" placeholder='Email' className='bg-[#FAF9FF] rounded-xl lg:w-[480px] p-4'/>
                <Button buttonType='submit' text='SUBMIT'/>
            </form>
        </div>
        {/* <div className='w-[90%] rounded-3xl p-16' style={{background: 'linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)'}}> */}
        <FooterSocials/>
    </div>
  )
}

export default Footer