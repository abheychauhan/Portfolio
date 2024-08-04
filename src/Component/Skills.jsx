import React from 'react'

function Skills() {

    const Fski = [
                     {skill:'html',level:'basic'},
                     {skill:'CSS',level:'intermediate'},
                     {skill:'JS',level:'intermediate'},
                     {skill:'React',level:'intermediate'},
                     {skill:'Bootstrap',level:'intermediate'},

                    ];  
    const Bski = [
                    {skill:'Node.Js',level:'basic'},
                    {skill:'ExpressJs',level:'intermediate'},
                    {skill:'mongoDB',level:'intermediate'},
                 
   
                       ]    

  return (
    <div id='skill' className=" w-full h-fit md:h-[350px] pt-20 mt-10 ">
         <h1 className='text-center text-3xl font-bold'> Skills</h1>
         <h3 className='text-center text-zinc-600 mb-10'>My Technical Level</h3>
        <div className='skills_container w-full h-full flex md:flex-row items-center justify-center flex-col gap-10'>
            <div className="frontend h-full  grid grid-cols-2 gap-6 bg-white    border-[1px] border-zinc-400  rounded-lg p-10">
                
                    {Fski.map((item,id)=>{
                        return(  <div key={id} className="skills_content  flex gap-2 ">
                        
                            <i className=" font-semibold ri-stairs-line"></i>
                            <div>
                                <h1 className='font-semibold'>{item.skill}</h1>
                                <span className="skill_level text-sm text-zinc-600">{item.level}</span>
                            </div>
                            
                        </div>)
                    })}
                        
            </div>
            <div className="backend h-full bg-white  border-[1px] border-zinc-400 grid grid-cols-2 gap-6  rounded-lg p-10">
                    {Bski.map((item,id)=>{
                                return(  <div key={id} className="skills_content flex gap-2 ">
                                    <i className="font-semibold ri-stairs-line"></i>
                                    <div>
                                        <h1 className='font-semibold'>{item.skill}</h1>
                                        <span className="skill_level text-sm text-zinc-600">{item.level}</span>
                                    </div>
                                    
                                </div>)
                            })}
                            
                   
            </div>
        </div>
    </div>
  )
}

export default Skills