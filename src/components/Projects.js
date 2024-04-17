import Anemiaimg from '../assets/Anemia.png'
import DeepFake from '../assets/DeepFake Detection .png'

export default function Projects(){
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2">
            <div className="flex justify-center">
                <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
            </div>
            
        </div>
        
        <div className="w-full">
           <div className='flex flex-col md:flex-row px-10 gap-10'>
            <div className='relative'>
                <img className='h-[300px]' src={Anemiaimg} alt=""/> 
                <div>
                    <p className='flex text-3xl'>Virtual Hue: Anemia Prognosis</p>
                    <a href='https://anemia-prediction-web-applicaition-ipablanqswbrkkkzxykrry.streamlit.app/'><button className='btn1'>Live Now</button></a>
                </div>  
            </div>
            <div>
                <img className='h-[300px]' src={DeepFake} alt=""/>
                <div>
                    <p className='flex text-3xl'>Deep Fake Detection</p>
                    <a href='https://github.com/Pradeeplaskshmanan/Deep-Fake-Detection'><button className='btn1'>Repo Link</button></a>
                </div>
            </div>
           </div>
        </div>
    </section>
}
