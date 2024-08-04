import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import React from 'react'

function Loading() {

  useGSAP(()=>{
    const tl = gsap.timeline()
      tl.from('.load h1',{
      y:50,
      duration:.5,
      stagger:.2,
    })
    
    tl.to('.load',{
      backgroundColor:'white',
      y:-2000,
      duration:2,
      opacity:0,
      delay:.5
      

    })

    tl.to('.load',{
      duration:1,
      display:'none'
      

    })

  })
  let i;
  const loop = ()=>{
    for(i=0 ; i<100 ; i++){
      return(<h1>{i}</h1>)
 }
  }

   




  
  return (
    <div className='load fixed top-0 left-0 z-[3] w-screen h-screen bg-[#5B5BF5]'>
      <div className="content flex items-center text-white font-bold w-full  sm:flex-row flex-col justify-center p-10 h-full gap-5">
         <span className='h-fit p-2  overflow-hidden block'><h1 className='text-3xl'>Welcome  </h1></span>
         <span className='h-fit p-2 block overflow-hidden'><h1 className='text-3xl'>To</h1></span>
         <span className='h-fit p-2 block overflow-hidden'><h1 className='text-3xl'>My Porfolio</h1></span>
      </div>
      
    </div>
  )
}

export default Loading