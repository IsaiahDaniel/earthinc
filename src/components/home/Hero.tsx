
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col lg:gap-7 w-[90%] lg:w-[830px] lg:mt-36 mx-auto text-[#1E0734]'>
        <div className="flex flex-col leading-none text-[32px] lg:text-8xl font-bold font-['Poppins'] w-[80%] lg:w-[830px] mx-auto">
            <h1>Join Our Artistic</h1>
            <h1 className='self-end'>Revolution</h1>
        </div>
        <p className='text-center text-xs lg:text-lg font-["Roboto"]'> EARTH is on a mission to transform the Art world as we know it and you’re the piece of the puzzle that makes the picture whole. Being part of Earth makes you a hero, so lookout for the signal, you’re about to save the day! </p>
    </div>
  )
}

export default Hero