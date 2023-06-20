import React from 'react'
import { Link } from 'react-router-dom'
import { footerLogo } from '../../assets/home'

const socials = [
  {name: 'Twitter', link: 'https://twitter.com'},
  {name: 'Discord', link: 'https://twitter.com'},
  {name: 'Facebook', link: 'https://facebook.com'},
  {name: 'Youtube', link: 'https://youtube.com'},
  {name: 'Instagram', link: 'https://instagram.com'},
  {name: 'Tiktok', link: 'https://tiktok.com'},
]

type Props = {}

const FooterSocials = (props: Props) => {
  return (
        <div className='w-[90%] rounded-3xl p-5 md:p-16 absolute bottom-0 right-[25%] left-[50%] -ml-[45%]' style={{background: 'linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)'}}>
            <div className="flex flex-col leading-none w-full lg:w-[62%]">
              <h1 className='text-[32px] lg:text-6xl font-medium '>Be part of</h1>
              <h1 className='text-[32px] lg:text-6xl font-medium self-end mr-10 lg:mr-0'>the community</h1>
            </div>
            <div className='flex flex-wrap justify-between w-[80%] md:w-[70%] mx-auto my-8 md:my-16'>
              {socials.map((social) => (
                  <Link to={social.link} key={social.name} className='rounded-[10px] shadow-2xl p-4 text-[#FAF9FF] font-semibold bg-transparent border-2 border-[#FD68E3]'>{social.name}</Link>
              ))}
            </div>
            <h4 className='text-[#FAF9FF] md:text-3xl font-medium md:w-[70%] mx-auto '>You can email us at hello@earthinc.com</h4>
            <div className='flex justify-between items-center md:mt-20'>
              <span className='text-[10px] md:text-base'>© 2023 All Rights Reserved, earthinc ltd <br /> Term & condition</span>
              <img src={footerLogo} alt="" />
            </div>
        </div>  )
}

export default FooterSocials