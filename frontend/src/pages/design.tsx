import aicon from '../assets/courses/aicon.svg'
import whatsapp from '../assets/courses/whatsapp.png'
import grapheropic from '../assets/courses/grapheropic.png'
import group from '../assets/courses/groupq.svg'
import group2 from '../assets/courses/group2.svg'
import group3 from '../assets/courses/group3.svg'
import group4 from '../assets/courses/group4.svg'
import aitech from '../assets/courses/AItech.svg'
import spons from '../assets/courses/sponsors.png'
import adobe from '../assets/courses/adobe.svg'
import download from '../assets/courses/download.png'
import frameblue from '../assets/courses/frameblue.svg'
import alumni1 from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import calendar from '../assets/courses/date.svg'
import mark from '../assets/courses/mark.svg'
import check from '../assets/courses/check.svg'
import check2 from '../assets/courses/check2.svg'
import check3 from '../assets/courses/check3.svg'
import onlineimage from '../assets/courses/online.png'
import { useState } from 'react'
import unleash from '../assets/courses/unleash.svg'
import unleash2 from '../assets/courses/unleash2.svg'
import unleash3 from '../assets/courses/unleash3.svg'
import unleash4 from '../assets/courses/unleash4.svg'



const fullstack = () => {
     const [openIndex, setOpenIndex] = useState<number | null>(null)
     const scrollToForm = () => {
          const form = document.getElementById('brochure-form')
          form?.scrollIntoView({ behavior: 'smooth' })
     }
     const openWhatsApp = () => {
          window.open('https://wa.me/2349028495703', '_blank')
     }
  const faqs = [
    { q: 'What is the objective of the Graphic Designer - Adobe Certified training?', a: ' The objective of this training is to provide students with the necessary graphic design skills, including mastery of Adobe Illustrator and Photoshop software, to create professional visual communication projects. You will learn to design visual identities, various communication materials, and to develop a consistent style guide.' },
    { q: "What are the main topics covered in this training?", a: 'The basics and advanced techniques of Adobe Illustrator.,Image manipulation and digital creation techniques with Adobe Photoshop.,Creating and managing visual identities.' },
    { q: 'Who can benefit from this training?', a: 'This training is ideal for:,Beginners wishing to get started in graphic design.,Professionals looking to improve their graphic design skills.' },
    { q: 'What are the prerequisites for enrolling in this training?', a: 'It is recommended to have basic computer knowledge and a creative mind. No design prerequisites are required.' },
    { q: 'What is the duration and format of the training?', a: 'Javascript, React, Node.js, The training lasts 16 weeks, at a rate of 4 hours per week. It is available in person in our hackerspaces or online via our 24/7 learning platform.' },
  ]

  return (
    <section className='w-full bg-[#FFFAF3]'>
        <section className='md:max-w-[1500px] mx-auto font-poppins '>
              <div className='flex flex-col md:flex-row md:gap-30 gap-10 items-center justify-between py-3 px-5'>
                   {/* Left Side */}
                   <div className='md:max-w-[650px]'>
                      <div className='flex flex-col '>
                         <div className='flex flex-row gap-3 items-center justify-center
                          bg-gradient-to-r from-[#AF3DEF] to-[#EE57D0] px-7 py-2 w-60 rounded-full mb-5 '>
                            <span>
                                <img src={aicon} alt='icon' className='w-4 h-4 object-cover ' />
                            </span>
                            <h2 className='font-[500] text-white'>with AI Skills</h2>
                         </div>
                            <div className='md:max-w-[500px]'>
                                 <h1 className='md:text-4xl text-2xl font-[550] mb-8'>Graphic Design Course - Adobe Certified</h1>
                            </div>
                             <h2 className='text-[#0D663C] text-4xl font-[650] mb-3'>420,000 NGN</h2>
                             <p className='font-[400]'>Unleash your inner designer and master the art of visual communication with our 
                                comprehensive 16-week course. Learn to handle professional tools, 
                                compose impactful visuals, and build a portfolio that will set you apart.</p>
                                 {/* social to enroll */}
                                <div className='flex md:flex-row flex-col gap-5 mt-5'>
                                    <button
                                      type='button'
                                      onClick={openWhatsApp}
                                      className='flex flex-row gap-3 items-center cursor-pointer bg-[#27D366] rounded md:px-15 px-10 py-2.5'
                                    >
                                         <h2 className='text-ssm'>Let's Talk</h2>
                                         <span>
                                            <img src={whatsapp} alt='arrow' className='w-5 h-5 mt- ' />
                                         </span>
                                    </button>

                                    {/* Brochure */}
                                    <button
                                      type='button'
                                      onClick={scrollToForm}
                                      className='border border-black flex flex-row gap-3 items-center md:px-15 px-10 py-2 rounded cursor-pointer'
                                    >
                                         <h2 className='text-ssm'>Download Brochure</h2>
                                         
                                    </button>
                                </div>
                                {/* Durations */}
                                <div className='flex flex-col gap-3 mt-5'>
                                    <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group} alt='icon' className='w-5 h-5 object-cover ' />
                                        </span>
                                         <p className='font-[500]'>Duration: 16 weeks</p>
                                    </div>
                                    {/* 2nd */}
                                 <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group2} alt='icon' className='w-5 h-5 object-cover ' />
                                        </span>
                                         <p className='font-[500]'>4 hours/week</p>
                                    </div>
                                    {/* 3rd */}
                                    <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group3} alt='icon' className='w-5 h-auto object-cover ' />
                                        </span>
                                         <p className='font-[500]'>Available in-person and online</p>
                                    </div>
                                    {/* 4th */}
                                    <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group4} alt='icon' className='w-5 h-5 object-cover ' />
                                        </span>
                                         <p className='font-[500]'>Evening classes available</p>
                                    </div>
                                </div>
                      </div>
                   </div>
                     {/* Right Side - image */}
                     <div className='md:max-w-[500px] hidden md:flex flex-col items-center justify-center'>
                         <div className='w-full h-full md:ml-0'>
                            <img src={grapheropic} alt='Hero Image' className='w-130 h-149' />
                         </div>
                     </div>
              </div>
        </section>

        {/* NEW AI section */}
        <section className='md:max-w-7xl mx-auto font-poppins bg-gradient-to-r from-[#893FFC] via-[#B572F6] to-[#EAACF1] md:rounded-2xl mt-30'>
                <div className='md:px-10 px-5 text-white items-center justify-center text-center flex py-15'>
                    <div className='flex flex-col'>
                         <div className='w-full h-full mb-5 flex items-center justify-center'>
                               <img src={aitech} alt='AI Technology' className='w-15 h-15 object-cover' />
                         </div>
                         <h2 className='font-[500] md:text-[40px] text-[20px]'>New! AI-Powered Graphic Design Course</h2>

                         <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-10'>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Claude</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Adobe Firefly</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>ChatGPT</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>DALL·E 2</h1>
                         </div>
                         <div className='md:max-w-[900px] mx-auto mt-15'>
                             <p className='font-[380] text-[16px]'>Unleash your creativity and learn how Artificial Intelligence can generate concepts, speed up
                                 design processes, and help you produce stunning visuals with ease.</p>
                         </div>
                    </div>
                </div>

        </section>

        {/* Sponsorship company Section */}
        <section className='md:max-w-6xl mx-auto font-poppins mt-20 bg-white rounded-2xl'>
                 <div className='flex flex-col justify-center items-center mt-5 md:px-0 px-6'>
                     <h2 className='md:text-3xl text-[15px] font-[450] mt-7'>Best companies recruit our alumni</h2>
                     <div className='w-full h-full md:px-50'>
                          <img src={spons} alt='sponsorship logos' className='w-full h-110 mt-10 mb-10' />
                     </div>
                 </div>
        </section>

        <section className='md:max-w-7xl mx-auto font-poppins my-10 px-5'>
            {/* Download Brochure */}
                                                             <div className='flex items-center justify-center'>
                                                                      <button
                                                                           type='button'
                                                                           onClick={scrollToForm}
                                                                           className='text-white bg-black py-1.5 md:px-15 px-10 font-[395] rounded'
                                                                      >
                                                                           Download the brochure
                                                                      </button>

                                                             </div>

                          {/* NEW AI section */}
        <section className='md:max-w-7xl mx-auto font-poppins bg-[#5349FF] md:rounded-2xl mt-30 text-white'>
               <div className='flex flex-col md:flex-row justify-between gap-10 py-13 px-10'>
                        {/* Left Side */}
                        
                           <div className='md:max-w-[650px]'>
                             <div className='flex flex-col gap-10'>
                                 <div className='md:max-w-[600px]'>
                                    <h2 className='font-[500] md:text-[35px] text-[20px]'>Unleash Your Creative Potential, Become a Design Expert</h2>
                                 </div>
                                 <p className='font-[390] text-ssm'>Become a master of visual communication and open the door to new career opportunities.
                                     Our training offers you progressive learning and 
                                    concrete simulations to prepare you to obtain the Adobe certification.</p>
                            </div>
                          

                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[500px] md:mt-5'>
                           <div className=''>
                               <img src={adobe} alt='Adobe logo' className='w-full h-auto object-contain' />
                           </div>
                        </div>
               </div>
        </section>
        </section>

        {/*  */}
        <section className='md:max-w-7xl mx-auto mt-30 mb-20 bg-[#5349FF] font-poppins md:rounded-3xl'>
               <div className='flex flex-col md:flex-row md:px-15 gap-15 px-5 md:py-15 py-10'>
                          <div className='md:max-w-[] text-white  '>
                              <div className='flex flex-col gap-5'>
                                 <div className='md:max-w-[700px]'>
                                    <h2 className='font-[420] text-3xl'>Why Choose GOMYCODE for Graphic Design Training?</h2>
                                 </div>
                                 <div className='md:max-w-[400px]'>
                                   <p className='font-[350]'>Join the leader in digital education in Africa and become a visual creation expert.</p>
                                 </div>
                                                                                 <button
                                                                                      type='button'
                                                                                      onClick={scrollToForm}
                                                                                      className='flex flex-row gap-2 bg-white text-black w-80 px-5 py-2.5 rounded cursor-pointer mt-5 justify-center'
                                                                                 >
                                                                                          <p>Download the brochure</p>
                                                                                          <span>
                                                                                                    <img src={download} alt='icon' className='w-5 h-5 object-cover mt-0.5' />
                                                                                          </span>
                                                                                 </button>
                              </div>
                          </div>
                          {/* Right Side */}
                          <div className='md:max-w-[] text-white'>
                               <div className='grid md:grid-cols-2 grid-cols-1 gap-15 md:px-0 px-5'>
                                 <div className='flex flex-col gap-6 max-w-[250px]'>
                                      <h2 className='font-[420] text-3xl'>#1</h2>
                                      <p className='font-[380]'>Digital Tech Educator in Africa and also best in Nigeria</p>
                                 </div>
                                {/* 2nd */}
                                <div className='flex flex-col gap-6 max-w-[250px]'>
                                      <h2 className='font-[420] text-3xl'>40 000</h2>
                                      <p className='font-[380]'>Alumni trained in tech professions in 9 Countries</p>
                                 </div>
                                 {/* 3rd */}
                                 <div className='flex flex-col gap-6 max-w-[250px]'>
                                      <h2 className='font-[420] text-3xl'>70%</h2>
                                      <p className='font-[380]'>Employment rate upon completion of a MYCODE bootcamp</p>
                                 </div>
                                    {/* 4th */}
                                    <div className='flex flex-col gap-6 max-w-[250px]'>
                                      <h2 className='font-[420] text-3xl'>9.3/10</h2>
                                      <p className='font-[380]'>Average rating of our expert instructors</p>
                                 </div>
                               </div>
                          </div>
               </div>
        </section>

        {/* Alumni Section */}
        <section className='md:max-w-7xl mx-auto font-poppins mt-30 text-black'>
                   <div className='flex flex-col items-center justify-center'>
                       <div className='md:max-w-[700px] text-center mb-5 md:px-0 px-5'>
                        <h2 className='md:text-4xl text-[20px] font-[550]'>What Our Alumni Think of Our Graphic Design Training</h2>
                       </div>
                       <p className='md:text-[28px] text-[15px] font-[390]'>Why they chose MYCODE.</p>
                   </div>

                   {/* alumni grid */}
                   <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10  md:px-0 px-10'>
                        {/* 1st */}
                        <div className='bg-white rounded-xl '>
                              <div className='p-7 flex flex-col gap-7'>
                                  <div className='mb-5'>
                                     <img src={frameblue} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div>
                                    <p>MYCODE exceeded my expectations as a tech institution. The instructors demonstrate deep knowledge, 
                                        the curriculum was comprehensive, and the hands-on projects were challenging yet rewarding. The supportive 
                                        learning environment and career guidance added immense value to my educational journey. A solid four stars!</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-5'>
                                       <div>
                                        <img src={alumni1} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Thompson Taverho</h2>
                                       </div>
                                  </div>
                              </div>
                        </div>
                        {/* 2nd */}
                         <div className='bg-white rounded-xl '>
                              <div className='p-7 flex flex-col gap-7'>
                                  <div className='mb-5'>
                                     <img src={frameblue} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div className='mb-10'>
                                   <p>MYCODE has been an absolute game-changer for me. The instructor is very knowledgeable and supportive and the hands-on projects really helped
                                     me apply what I learned. I’ve leveled up my skills and unlocked a whole new world of possibilities.</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-5'>
                                       <div>
                                        <img src={alumni2} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Modupe Obamuyi</h2>
                                       </div>
                                  </div>
                              </div>
                        </div>
                        {/* 3rd */}
                         <div className='bg-white rounded-xl '>
                              <div className='p-7 flex flex-col gap-7'>
                                  <div className='mb-35'>
                                     <img src={frameblue} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div className='mb-5'>
                                    <p>With no local schools in my area, I chose GOMYCODE to train. Best decision of my life!</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-5'>
                                       <div>
                                        <img src={alumni3} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Talla Seydi</h2>
                                       </div>
                                  </div>
                              </div>
                        </div>
                   </div>
        </section>

        {/* Next section for programs */}
        <section className='md:max-w-6xl mx-auto font-poppins mt-20 text-black'>
                <div className='flex items-center justify-center'>
                      <h2 className='md:text-[45px] text-[20px] font-[550]'>Next 3 Sessions</h2>

                     
                </div>
                  {/* Grid */}
                      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#5349FF] '>
                                 <div className='bg-white mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='md:text-[25px] text-[15px] font-[550] '>November 2025</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-5 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-6 h-6 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, November 8, 2025</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 2nd */}
                            <div className='bg-[#5349FF] '>
                                 <div className='bg-white mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='tmd:text-[25px] text-[15px] font-[550] '>December 2025</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-5 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-6 h-6 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, December 6, 2025</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 3rd */}
                            <div className='bg-[#5349FF] '>
                                 <div className='bg-white mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='md:text-[25px] text-[15px] font-[550] '>January 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-5 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-6 h-6 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, January 10, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                      </div>
        </section>

        {/* Join web dev registration section */}

        <section className='md:max-w-7xl mx-auto font-poppins my-20 bg-white'>
             <div className='bg-[#5349FF] md:rounded-2xl text-white'>
                     <div className='flex flex-col items-center justify-center py-10 md:px-0 px-5 '>
                             <div className='md:max-w-[700px] text-center px-5 mb-8'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550] text-center'>Convinced? Request the full program of our training and become a Graphic Designer!</h2>
                             </div>
                             <div className='flex flex-col md:flex-row md:gap-40 gap-5 mt-'>
                                    <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-0.5' />
                                          </span>
                                          <p>Receive program details</p>
                                    </div>
                                    {/* 2 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-0.5' />
                                          </span>
                                          <p>Discover our methodology</p>
                                    </div>
                                    {/* 3 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-0.5' />
                                          </span>
                                          <p>Progress in your learning project</p>
                                    </div>
                             </div>
                     </div>
             </div>
             {/* form */}
             <div className='md:max-w-2xl mx-auto mt-20 font-poppins' id='brochure-form'>
                     <div className='md:max-w-[450px] mx-auto text-center'>
                            <h2 className='text-2xl font-[500]'>Fill out the form to receive the full program</h2>
                     </div>
                     {/* Form fields */}
                     <form className='flex flex-col gap-10 mt-10 mb-20 md:px-0 px-8'>
                         <div className='flex md:flex-row flex-col gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>First Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>Last Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Phone*</label>
                              <input type='number' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>How did you hear about GOMYCODE? *</label>
                              <select className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select an option</option>
                                   <option>Social Media</option>
                                   <option>Friend or Family</option>
                                   <option>Online Search</option>
                                   <option>Advertisement</option>
                                   <option>Other</option>
                              </select>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Hackerspaces *</label>
                              <select className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select an option</option>
                                   <option>Lagos</option>
                                   <option>Abuja</option>
                                   <option>Online</option>
                                   <option>Ibadan</option>
                                   <option>Port Harcourt</option>
                              </select>
                         </div>
                         <button className='bg-[#5349FF] text-white py-2.5 w-60 font-[380] rounded-md mb-20'>Submit</button>
                     </form>
             </div>
        </section>


           {/* */}
          <section className='md:max-w-6xl mx-auto font-poppins  mb-30'>
             
                        <div className='flex flex-col justify-center items-center pt-20 md:px-0 px-6 '>
                            <div className='flex flex-col gap-4 text-center items-center '>
                              <div className='md:max-w-[1000px]'>
                                  <h2 className='md:text-5xl text-2xl font-[550] text-[#5349ff]'>Immerse Yourself in a World of Innovative Learning</h2>
                              </div>
                                <div className='md:max-w-[700px] flex '>
                                    <p className='font-[390] text-center'>With GOMYCODE, forget traditional training and discover a revolutionary approach that will allow you to quickly acquire the key skills of graphic design.</p>
                                </div>
                            </div>

                            {/* grids */}
                            <div className='md:max-w-7xl'>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-15 mb'>
                             {/* 1st */}
                             <div className='bg-white rounded-lg'>
                                <div className='px-6 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>A collaborative and stimulating learning space</h2>
                                    <p className='font-[390] text-sm'>Join a community of passionate learners and share your experience with people who share your ambitions.</p>
                                </div>
                             </div>
                                {/* 2nd */}
                                <div className='bg-white rounded-lg'>
                                <div className='px-6 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash2} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>An intuitive and powerful learning platform</h2>
                                    <p className='font-[390] text-sm'>Explore a unique platform, designed to allow you to experiment and familiarize yourself with concrete projects, from the start of your training.</p>
                                </div>
                             </div>
                                {/* 3rd */}
                                <div className='bg-white rounded-lg'>
                                <div className='px-6 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash3} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>A rich and inspiring learning environment</h2>
                                    <p className='font-[390] text-sm'>Participate in exclusive events, meet design professionals, and develop valuable skills for your future career.</p>
                                </div>
                             </div>
                             {/* 4th */}
                             <div className='bg-white rounded-lg'>
                                <div className='px-6 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash4} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>Total flexibility for optimal
learning</h2>
                                    <p className='font-[390] text-sm'> Choose the learning format that suits you best, alternating between face-to-face lessons and online modules, for an experience perfectly adapted to your needs.</p>
                                </div>
                             </div>
                            </div>
                            </div>
                        </div>
         </section>



        {/* Integrate the Job Market */}
        <section className='md:max-w-7xl mx-auto font-poppins mt-20 bg-white md:rounded-2xl mb-20'>
                   <div className='flex flex-col items-center justify-center py-6 md:px-0 px-5 '>
                      <h2 className='mb-4 text-4xl font-[550] text-[#5349ff]'>Integrate the Job Market with Confidence</h2>
                      <p className='text-ssm font-[395] text-[#5349ff] mb-4'>Our team dedicated to professional integration supports you
                          in your job search.</p>

                          <div className='md:max-w-4xl mt-10 text-white'>
                                <div className='flex md:flex-row flex-col gap-4'>
                                   {/* 1st */}
                                   <div className='flex-1 bg-[#5349ff] rounded-2xl'>
                                        <div className='p-5 flex flex-col gap-20'>
                                             <img src={check} alt='icon' className='w-14 h-14 object-cover' />
                                             <h2 className='font-[390] text-[20px]'>Personalized advice to find the opportunity that suits you.</h2>
                                        </div>
                                   </div>
                                   {/* 2nd */}
                                   <div className='flex-1 bg-[#5349ff] rounded-2xl'>
                                        <div className='p-5 flex flex-col gap-20'>
                                             <img src={check2} alt='icon' className='w-14 h-14 object-cover' />
                                             <h2 className='font-[390] text-[20px]'>Personalized advice to find the opportunity that suits you.</h2>
                                        </div>
                                   </div>
                                   {/* 3rd */}
                                   <div className='flex-1 bg-[#5349ff] rounded-2xl'>
                                        <div className='p-5 flex flex-col gap-20'>
                                             <img src={check3} alt='icon' className='w-14 h-14 object-cover' />
                                             <h2 className='font-[390] text-[20px]'>Personalized advice to find the opportunity that suits you.</h2>
                                        </div>
                                   </div>
                                </div>
                          </div>
                   </div>
        </section>

         {/* Online Section */}
        <section className='md:max-w-7xl mx-auto font-poppins my-20 bg-white md:rounded-2xl'>
               <div className='flex flex-col items-center justify-center md:px-0 px-6 py-15'>
                        <div className='md:max-w-[900px]'>
                          <div className='flex flex-col gap-4 items-center md:px-0 px-5'>
                              <h2 className='md:text-3xl text-xl font-[520] text-center'>You can follow our graphic design training 100% online</h2>
                              <p className='md:text-[21px] text-[15px] font-[395] text-center'>If that suits you better, join the online training to learn graphic design from home using our digital platform.</p>
                         </div>
                          <div className='w-full h-full mt-15'>
                              <img src={onlineimage} alt='image' className='w-full h-full object-cover' />
                          </div>
                          <div className='flex md:flex-row flex-col md:gap-10 gap-5 mt-15 justify-center'>
                              <div className='md:border-r border-black pr-10 '>
                                   <h2 className='text-[18px] font-[500]'>A dedicated instructor</h2>
                              </div>
                              <div className='md:border-r border-black pr-10 '>
                                   <h2 className='text-[18px] font-[500]'>Flexibility</h2>
                              </div>
                              <div className=''>
                                   <h2 className='text-[18px] font-[500]'>Class recordings</h2>
                              </div>
                          </div>
                                                                 <div className='mt-15 flex justify-center'>
                                                                                <button
                                                                                     type='button'
                                                                                     onClick={scrollToForm}
                                                                                     className='bg-[#5349ff] text-white py-2.5 px-10 rounded-md font-[380] cursor-pointer'
                                                                                >
                                                                                     Download the brochure
                                                                                </button>
                                                                 </div>
                        </div>
                        
               </div>
        </section>

        {/* FAQ Section */}
        <section className='md:max-w-7xl mx-auto font-poppins my-20 bg-white md:rounded-2xl py-10 md:px-0 px-10 '>
          <div className='text-center'>
            <h2 className='md:text-4xl text-2xl font-[550]'>FAQ</h2>
          </div>
          <div className='max-w-[900px] mx-auto mt-10'>
            {faqs.map((item, idx) => (
              <div key={idx} className='flex items-start justify-between gap-4 border-b border-gray-300 py-6'>
                <div className='flex-1 pr-4'>
                  <h3
                    className='md:text-xl text-[14px] font-[500] cursor-pointer'
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    {item.q}
                  </h3>
                  {openIndex === idx && <p className='mt-4 text-gray-600 font-[395]'>{item.a}</p>}
                </div>
                <button
                  aria-expanded={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className='w-3 h-3 flex items-center justify-center rounded-full border border-gray-300 text-sm'
                >
                  {openIndex === idx ? '−' : '+'}
                </button>
              </div>
            ))}
          </div>
        </section>
    </section>
  )
}

export default fullstack