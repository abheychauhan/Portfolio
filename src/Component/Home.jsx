import React from 'react'
import hi from '../../public/icon.png'
import abhey from '../../public/abhey.png'


function Home() {
  return (
    <div id='home' className=' main w-full pt-40  '>

     <div className='home-content border-b-2 border-zinc-400 pt-20 pb-20 grid w-full grid-cols-2  md:grid-cols-3'>
            <div className="icons flex h-full sm:gap-[2vw] gap-4 lg:gap-[3vw]  justify-center flex-col w-fit text-2xl lg:text-3xl  ">
                <a href="https://github.com/abheychauhan" target='_blank'><i className="ri-github-fill"></i></a>
                <a href="https://www.linkedin.com/in/abhey-singh-993993320/" target='_blank'><i className="ri-linkedin-line"></i></a>
                <a href="https://www.instagram.com/_abhey_chauhan_/" target='_blank'><i className="ri-instagram-line"></i></a>
            </div>
            <div className="img w-[200px] md:w-[25vw] lg:w-[250px] lg:h-[250px] ml-[-8vw] flex justify-center  md:ml-0  order-0 lg:order-1  bg-zinc-300 ">
                <img className=' object-cover  ' src={abhey} alt="" />
            </div>        
            <div className="mydata flex flex-col justify-center md:mt-10 lg:ml-[-10vw] md:mt-0 mt-10 col-span-2 lg:col-span-1  w-fit md:w-[100vw]  lg:w-fit gap-5 ">
              
                <h1 className='name  flex items-end text-[#5B5BF5] text-5xl font-semibold gap-2'>Abhey Singh  <img className='w-[50px]' src={hi} alt="" />  </h1>
                <h2 className='title font-semibold text-xl'>Web Developer</h2>
                <div className="description text-lg w-[80%]">
                  <p>Designing and developing websites, ensuring a visually appealing and user-friendly interface</p>
                </div>
                <a href='#contact' className='say border-2 w-fit transition ease-linear duration-100 hover:text-zinc-600   hover:bg-zinc-200 border-[#5B5BF5] block  rounded-[50px] bg-[#5B5BF5] px-5 py-3 text-white'><span className=' block z-[1]'>say Hello</span></a>
                
            </div>

     </div>
    </div>
  )
}

export default Home