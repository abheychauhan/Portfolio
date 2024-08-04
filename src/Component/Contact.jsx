import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'react-message-popup'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    
     if(form.current.email.value ){

         emailjs
           .sendForm('service_89t7ijc', 'template_9urjihl', form.current, {
             publicKey: 'u_r1g_DH6dtUHqQhz',
           })
           .then(
             () => {
               console.log(form.current,'success');
                   e.target.reset();
                  
               
                //    setTimeout(()=>{
                //        window.location.reload();
                //    },4000)
                   message.loading('Loading...',1000).then(({ next }) => {
                       setTimeout(() => {
                         next( 'sent successfully','success')
                       }, 2000)
                     })
                   
             
             },
             (error) => {
               console.log('FAILED...', error.text);
             },
           );
     }
     else{
        message.error('please fill the form',3000).then(({ distroy }) => {
            setTimeout(() => {
              distroy()
            }, 3000)
          })
    
     }
  
    };
  return (
    <div id='contact' className='contact w-full  h-fit  md:pt-20 mt-32 pb-10'>
        <h1 className='text-center text-3xl font-bold mb-2 '> Get in touch</h1>
        <h3 className='text-center text-zinc-600'>Contact me</h3>

        <div className="contact_content w-full h-full  flex md:flex-nowrap flex-wrap gap-10 justify-evenly pt-10">
            <div className="social w-fit h-fit flex flex-col gap-5">
                <h1 className='text-xl'>Talk to me</h1>
                <div className="info grid gap-4">
                    <div className="card w-[300px]  bg-white h-fit border-black rounded-xl p-2">
                      <i className="text-lg ri-mail-send-fill"></i>
                      <h3 className='text-lg'>Email</h3>
                      <div className="flex">

                      <span className='mr-2'>abheys172@gmail.com</span>
                      <a className='text-blue-500 flex' href="mailto:abheys172@gmail.com">Write me <i className="ri-arrow-right-line"></i></a>
                      </div>
                    </div>
                     <div className="card w-[300px]  bg-white h-fit rounded-xl p-2">
                      <i className="text-lg ri-whatsapp-line"></i>
                      <h3 className='text-lg'>Whatsapp</h3>
                      <div className='flex'>
                      <span className='mr-2'>+91 9306634564</span>
                      <a   className='text-blue-500 flex ' href="https://wa.me/+919306634564" target='_blank'>Write me <i className="ri-arrow-right-line"></i></a>

                      </div>
                    </div>

                </div>
            </div>
            <div className="write_me w-fit flex flex-col gap-5 ">
                <h1 className='text-xl'>Write me your project</h1>
                <form ref={form} onSubmit={sendEmail} className='relative  border-[1px] lg:w-[400px] w-[300px] h-[400px] p-5 rounded-xl bg-white'>
                    <div className="form_div  mt-5">
                        <label className='label text-sm bg-white'>Name</label>
                        <input className=' ' type="text" placeholder='Enter your name' name='name' />
                    </div>
                    <div className="form_div ">
                        <label>Mail</label>
                        <input type="email" placeholder='enter email' name='email' />
                    </div>
                    <div className="form_div">
                        <label>Project</label>
                        <textarea className=' resize-none' name="project" id="" cols='30' rows='15' placeholder='write your project'></textarea>
                    </div>
                    <input className='button cursor-pointer' type="submit" />
                </form>
            </div>
        </div>
      

    </div>
  )
}

export default Contact