import ResumeIMG from '../assets/resume.jpg';
import PRADEEP_Resume_1 from'../components/PRADEEP_Resume_1.pdf'
export default function Resume (){
    const config={
        link:'https://drive.google.com/file/d/14LjUEoSBYh6hm6LkDaGl5MgEbEkDZZxf/view?usp=sharing'
    }
    return <section id='Resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[500px]'src={ResumeIMG}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-3'>you can view my resume <a className='btn' href={PRADEEP_Resume_1}>Download</a></p>
                
            </div>
        </div>
    </section>
    }