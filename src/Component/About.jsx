import React, { useState } from 'react'
import abhey from '../../public/abhey.png'
import ProjectModal from './ProjectModel';
import insta from '../../public/insta.png'
import solar from '../../public/solar.png'
import figma from '../../public/figma.png'
import E_c from '../../public/E-c.png'





function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id='about' className='about w-full pt-32 '>

                <h1 className='text-center  text-3xl font-bold '> About Me </h1>
                <h2 className='text-center text-zinc-500'>My Introduction</h2>

                <div className="frame w-full flex flex-wrap gap-10 items-start justify-center md:flex-nowrap sm:pt-20">
                     <div className="  flex mt-10  sm:mt-0 lg:justify-left md:justify-left justify-right  sm:justify-right      ">
                      
                        <div className={`img_box bg-[url('/public/abhey.png')] bg-center bg-cover transition ease-linear duration-300 w-[200px] h-[200px] sm:w-[300px] sm:h-[250px] rounded-xl overflow-hidden`} >
                            <div className='cover w-full top-0 opacity-25  h-full bg-zinc-500 absolute '></div>
                        </div>

                     </div>
                    <div className="section  w-full lg:w-1/2   flex flex-col gap-5 ">
                        <div className="boxes flex items-center sm:flex-nowrap  flex-wrap justify-between gap-2">
                            <div className="box flex items-center text-zinc-600 flex-col justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[150px]  border-2 rounded-lg border-[#5B5BF5]">
                              <i className="text-lg text-[#5B5BF5] sm:text-2xl   ri-award-line font-semibold"></i>
                              <h1 className='text-md sm:text-lg  font-semibold'>Experience</h1>
                              <h3 className='text-sm text-zinc-500 text-center mt-2'>3+ years in hands-on projects</h3>
                            </div>
                            <div onClick={() => setIsOpen(!isOpen)} className="box flex items-center text-zinc-600 flex-col justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[150px]  border-2 rounded-lg border-[#5B5BF5]">
                              <i className="text-lg text-[#5B5BF5]  sm:text-xl  ri-briefcase-3-line font-semibold"></i>
                              <h1 className='text-md  sm:text-lg font-semibold'>Projects</h1>
                              <h3 className='text-sm text-zinc-500 mt-2'>3+ projects</h3>
                            </div>
                            <a href='#contact' className="box flex items-center text-zinc-600 flex-col justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[150px]  border-2 rounded-lg border-[#5B5BF5]">
                              <i className="text-lg text-[#5B5BF5] sm:text-2xl   ri-customer-service-2-line font-semibold"></i>
                              <h1 className='text-md sm:text-lg  font-semibold'>Support</h1>
                              <h3 className='text-sm text-zinc-500 mt-2'> online 24/7 </h3>
                            </a>
                        </div>
                        <p>As a full stack developer, I excel in building comprehensive web applications by leveraging my expertise in front-end technologies like HTML, CSS, JavaScript, ReactJS, and Bootstrap, combined with powerful back-end skills in NodeJS, ExpressJS, and MongoDB, to deliver seamless, responsive, and high-performance solutions from the user interface to the server and database architecture</p>
                        <a href='/public/abhey singh.pdf' download="cv(abhey).pdf" className='px-10 text-white hover:text-zinc-500 hover:bg-transparent border-[#5B5BF5] border-2 transition ease-in-out duration-300 block py-3 w-fit rounded-xl bg-[#5B5BF5]'>Download CV</a>
                    </div>

                    {isOpen && (
                      <ProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <div className='p-10 flex items-center max-w-1/2 flex-wrap  gap-10'>
                          <a href='https://insta-clone-nine-beta.vercel.app/' target='_blank' className='rounded-xl border-2 '>
                            <img src={insta} className='w-40 h-40 object-cover rounded-xl' alt="" srcset="" />
                            <h1 className='text-l text-center font-semibold mt-2'>Instagram Clone</h1>
                          </a>
                          <a href='https://3d-solar-model.vercel.app/' target='_blank' className='rounded-xl border-2 '>
                            <img src={solar} className='w-40 h-40 object-cover rounded-xl' alt="" srcset="" />
                            <h1 className='text-l text-center font-semibold mt-2'>3D Solar Model</h1>
                          </a>
                           <a href='https://quadb-training-ibw2mobileapp.vercel.app/' target='_blank' className='rounded-xl border-2 '>
                            <img src={figma} className='w-40 h-40 object-cover rounded-xl' alt="" srcset="" />
                            <h1 className='text-l text-center font-semibold mt-2'>Figma To Code Project</h1>
                          </a>
                          <a href='https://kifayti.vercel.app/' target='_blank' className='rounded-xl border-2 '>
                            <img src={E_c} className='w-40 h-40 object-cover rounded-xl' alt="" srcset="" />
                            <h1 className='text-l text-center font-semibold mt-2'>E-commerce</h1>
                          </a>

                        </div>
                      </ProjectModal>
                    )}
                </div>
    </div>
  )
}

export default About