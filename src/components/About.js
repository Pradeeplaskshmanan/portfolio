import AboutImg from '../assets/about.png';

export default function About (){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-4'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-3'>Hi Im pradeep I am a software Engineer. I build Machine Learning and Deep Learning Applicatons.</p>
                <p className='pb-3'>I completed my Masters at Vellore Institute of Technology</p>
                <p className='pb-3'>I am Proficinet in the Below Listed Technology
                    <oll>
                        <li>Java Game Development</li>
                        <li>Python</li>
                        <li>Machine Learning </li>
                        <li>Deep Learning </li>
                        <li>Frontend Technology like react,Tailwindcss</li>
                        <li>Data Analytics</li>
                        <li>Mysql</li>
                        
                        
                    </oll>
                </p>
            </div>
        </div>
    </section>
}