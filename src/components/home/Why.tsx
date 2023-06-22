import Marquee from "react-fast-marquee";
import {circledImg} from '../../assets/home'
import Button from '../global/Button';


type Props = {}

const reasons = [
  {title : 'Reason one goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {title : 'Reason two goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {title : 'Reason three goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {title : 'Reason four goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
]

const Why = (props: Props) => {
  return (
    <div className='mt-96 lg:my-10'>
      <div className='flex'>
        <div className='w-[100px] h-[50px] lg:w-[303px] lg:h-[90px]' style={{background: 'linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)'}}></div>
        <Marquee speed={100}>
          <h1 className='text-[31px] lg:text-[54px] bg-clip-text text-transparent' style={{background: 'linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>&nbsp; LOVE SHARE EXPRESS LOVE SHARE EXPRESS </h1>
        </Marquee>
      </div>
      <div className='px-4 lg:px-20 py-10 text-[#FAF9FF] rounded-xl w-[95%] mx-auto my-20' style={{background:'linear-gradient(137.47deg, #AB54FD 0%, #260742 104.69%)'}}>
          <div className="flex flex-col leading-none w-full lg:w-[60%]">
              <h1 className='text-[32px] lg:text-6xl font-medium '>Why become</h1>
              <h1 className='text-[32px] lg:text-6xl font-medium self-end mr-12 lg:mr-32'>an Earthling?</h1>
              <p className='lg:ml-16 text-xs lg:text-xl font-["Roboto"] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-20'>
            {reasons.map((reason, index) => (
              <div key={index} className='p-[3px]' style={{background:'linear-gradient(#EA6EE7 100%, #FD68E3 100%, #B66FFA 100%, #7668FD 100%, #7D2AE7 100% )'}}>
                <div className='flex flex-col gap-4 lg:gap-10 py-10 px-10 lg:px-20' style={{background:'linear-gradient(137.47deg, #AB54FD 0%, #260742 104.69%)'}}>
                  <img src={circledImg} alt="" className='w-[20%] h-[20%] self-end' />
                  <h4 className='lg:text-4xl font-medium'>{reason.title}</h4>
                  <p className='font-["Roboto"] lg:text-2xl'>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button buttonType='button' text='Join Community' classNames='block mx-auto'/>
      </div>
    </div>
  )
}

export default Why