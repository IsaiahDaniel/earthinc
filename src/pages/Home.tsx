import { About, Faq, Footer, Hero, Navbar, Partners, Team, Values, Why } from '../components/home'
import { logo, menu } from '../assets/home'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar logo={logo}/>
      <Hero/>
      <About/>
      <Why/>
      <Partners/>
      <Values/>
      <Team/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home