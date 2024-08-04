import React from 'react'
import abhey from '../../public/abhey.png'

function About() {
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
                              <h3 className='text-sm text-zinc-500 mt-2'>2+ years</h3>
                            </div>
                            <div className="box flex items-center text-zinc-600 flex-col justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[150px]  border-2 rounded-lg border-[#5B5BF5]">
                              <i className="text-lg text-[#5B5BF5]  sm:text-xl  ri-briefcase-3-line font-semibold"></i>
                              <h1 className='text-md  sm:text-lg font-semibold'>Projects</h1>
                              <h3 className='text-sm text-zinc-500 mt-2'>10+ projects</h3>
                            </div>
                            <div className="box flex items-center text-zinc-600 flex-col justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[150px]  border-2 rounded-lg border-[#5B5BF5]">
                              <i className="text-lg text-[#5B5BF5] sm:text-2xl   ri-customer-service-2-line font-semibold"></i>
                              <h1 className='text-md sm:text-lg  font-semibold'>Support</h1>
                              <h3 className='text-sm text-zinc-500 mt-2'> online 24/7 </h3>
                            </div>
                        </div>
                        <p>A Front End Developer is a computer programmer who specializes in designing and building the user interface and user experience (UI/UX) of websites and web applications.</p>
                        <a href='/public/abhey singh.pdf' download="cv(abhey)" className='px-10 text-white hover:text-zinc-500 hover:bg-transparent border-[#5B5BF5] border-2 transition ease-in-out duration-300 block py-3 w-fit rounded-xl bg-[#5B5BF5]'>Download CV</a>
                    </div>
                </div>
    </div>
  )
}

export default About