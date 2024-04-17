import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-black'>L</span> Pradeep 
            <p className='text-2xl'> Im a Software Engineer</p>
            </h1>
            <div className='flex py-10'>
                <a href='https://www.linkedin.com/in/pradeep-lakshmanan-563977211/' className='pr-4 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href='https://github.com/Pradeeplaskshmanan' className='pr-4 hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} alt=""/>
    </section>
}
