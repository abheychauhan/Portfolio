import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


  const [menu, setmenu] = useState(false);

 
  return (
    
    <div className='header z-[2] fixed h-fit left-0 top-0 bg-zinc-200 rounded-b-3xl px-10 lg:px-40 md:px-20 sm:px-10  w-full border-zinc-500 items-center  flex justify-between py-5'>
        <div className='n sm:block hidden'>
           {/* <h1 className='name font-bold text-2xl text-[#5B5BF5]'>Abhey</h1> */}
        </div>
     <div className='nav-container w-fit'>

        <nav className={`nav ${ menu ? ' nav-show' :'nav' }`}>
          <ul className={`nav-list text-lg font-semibold flex gap-10`}>
            <li>
               <a onClick={()=>{setmenu(!menu)}}   className='cursor-pointer' href='#home' >Home</a>
            </li>
            <li> 
               <a  className='cursor-pointer' onClick={()=>{setmenu(!menu)}}  href='#about'>About</a>
            </li>
            <li >
              <a onClick={()=>{setmenu(!menu)}}  className='cursor-pointer'  href='#skill'>Skills</a>
            </li>
            <li> 
              <a  onClick={()=>{setmenu(!menu)}}  className='cursor-pointer'href='#contact' >Contact</a>
            </li>
            
          </ul>
        
        </nav>
        </div>
        <div className='menu hidden text-[#1717fe]'>
          {menu ?<i onClick={()=>{setmenu(!menu)}} className='open  text-xl ri-close-circle-line cursor-pointer' ></i> :  <i onClick={()=>{setmenu(!menu)}} className="close ri-menu-line text-xl cursor-pointer"></i>}
        </div>
        
    </div>
  )
}

export default Header