import { Link } from 'react-router-dom'
import { logo, menu } from '../../assets/home'
import Button from '../global/Button'

type Props = {}

const navList = [
    { name: 'About', link: '/'},
    { name: 'Roadmap', link: '/roadmap'},
    { name: 'FAQs', link: '/'},
    { name: 'NFT marketplace', link: '/'},
]

const navbar = (props: Props) => {
  return (
    <div className='flex justify-between items-center w-[90%] mx-auto my-8'>
        <div>
            <img src={logo} alt="Earth Logo" />
        </div>
        <ul className='lg:flex gap-7 text-[#1E0734] font-semibold font-["Poppins"] hidden'>
            {navList.map(nav => (
                <Link to={nav.link} key={nav.name}>{nav.name}</Link>
            ))}
        </ul>
        <div className='hidden lg:block'>
            <Button buttonType='button' text='Join Community'/>
        </div>
        <img src={menu} alt="menu" className='lg:hidden'/>
    </div>
  )
}

export default navbar