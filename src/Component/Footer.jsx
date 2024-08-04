import React from 'react'

function Footer() {
  return (
    <div className='w-full flex flex-wrap sm:flex-nowrap sm:gap-2 gap-5 justify-center flex-col items-center h-full bg-zinc-200 p-4 bg-zinc-300'>
      <h1 className='text-2xl font-bold'>Abhey</h1>
      <div className='text-2xl gap-5 flex'>
        <a href=""><i className="p-2 block border-2 rounded-xl border-zinc-400 hover:scale-125 transition ease-in-out duration-300 ri-linkedin-line"></i></a>
        <a href=""><i className="p-2 block border-2 rounded-xl border-zinc-400 hover:scale-125 transition ease-in-out duration-300 ri-github-line"></i></a>
        <a href=""> <i className="p-2 block border-2 rounded-xl border-zinc-400 hover:scale-125 transition ease-in-out duration-300 ri-instagram-line"></i></a>
      </div>
      <div className='flex gap-5'>
      <h1>Gmail - abheys172@gmail.com</h1>
      <h1>Contact no.- 9306634564</h1>
      </div>
    </div>
  )
}

export default Footer