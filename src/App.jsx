import React, { useState } from 'react'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import gsap from 'gsap'
import Loading from './Component/Loading'
import { useGSAP } from '@gsap/react'

function App() {
  const [menu, setmenu] = useState(false);

  //  window.addEventListener('click',()=>{
  //   setmenu(!menu)
  //   console.log(menu)
  //  })
    // useGSAP(()=>{
    //   var tl = new gsap.timeline();

    //       tl.to('.portfolio', 1, {background: 'linear-gradient(to bottom, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%)', repeatDelay:1, repeat:-1, yoyo:true,duration:3})

                
    //           })
          
  return (
     <>

    <div onClick={()=>{
      menu ? setmenu(!menu) : ''
      }} className='portfolio bg-gray-100 w-full h-full  px-10 lg:px-40 md:px-20 sm:px-10'>
      <Header menu={menu} setmenu={setmenu} />
      <Loading/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>

    </div>
      <Footer/> 
     </>
  )
}

export default App