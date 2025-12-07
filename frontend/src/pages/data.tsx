import aicon from '../assets/courses/aicon.svg'
import whatsapp from '../assets/courses/whatsapp.png'
import dataheroimg from '../assets/courses/dataheropic.svg'
import group from '../assets/courses/groupq.svg'
import group2 from '../assets/courses/group2.svg'
import group3 from '../assets/courses/group3.svg'
import group4 from '../assets/courses/group4.svg'
import datapi from '../assets/courses/datapi.svg'
import spons from '../assets/courses/sponsors.png'
import download from '../assets/courses/download.png'
import frameblue from '../assets/courses/frameblue.svg'
import cyb1 from '../assets/courses/cyb1.svg'
import cyb2 from '../assets/courses/cyb2.svg'
import cyb3 from '../assets/courses/cyb3.png'
import calendar from '../assets/courses/date.svg'
import mark from '../assets/courses/mark.svg'

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
    { q: 'What is the duration of the training?', a: 'The training lasts 16 weeks with 4 hours of weekly learning.' },
    { q: "What is the content of the training?", a: 'The training covers data analysis, SQL, Power Query, DAX operations, and creating interactive dashboards. Participants will learn to extract, transform, and visualize data to provide meaningful insights.' },

    { q: 'What skills will I acquire?', a: ' Skills acquired include data cleansing, data modeling, using Power BI to create visualizations and interactive dashboards, and advanced data analysis. Participants will develop a thorough understanding of Business Intelligence concepts and become capable of transforming raw data into actionable information.' },
    { q: 'What are the prerequisites for this training?', a: 'Basic computer skills and analytical thinking abilities are required. Prior knowledge of databases or data analysis is beneficial but not mandatory.' },
    { q: 'What certification is obtained at the end of the training?', a: ' Participants receive the globally recognized Microsoft Power BI Data Analyst Associate certification, demonstrating their data management and analysis skills.' },
  ]

  return (
    <section className='w-full bg-[#FFFAF3]'>
        <section className='md:max-w-[1650px] mx-auto font-poppins '>
              <div className='flex flex-col md:flex-row md:gap-20 gap-10 items-center justify-center py-3 px-5'>
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
                                 <h1 className='md:text-4xl text-2xl font-[550] mb-8'>Data Analyst Course - Microsoft Power BI Certified</h1>
                            </div>
                             <h2 className='text-[#5349FF] text-4xl font-[650] mb-3'>490,000 NGN</h2>
                             <p className='font-[400]'>Unlock your analytical potential and become a sought-after data processing expert. 
                                Our intensive training propels you to the heart of the Data Analytics universe,
                                 giving you complete mastery of Microsoft Power BI, an essential tool for excelling in this field.</p>
                                 {/* social to enroll */}
                               <div className='flex md:flex-row flex-col gap-5 mt-5'>
                                    <button
                                      type='button'
                                      onClick={openWhatsApp}
                                      className='flex flex-row gap-3 items-center cursor-pointer bg-[#27D366] rounded md:px-22 px-10 py-3'
                                    >
                                         <h2 className='text-[17px]'>Let's Talk</h2>
                                         <span>
                                            <img src={whatsapp} alt='arrow' className='w-5 h-5 mt- ' />
                                         </span>
                                    </button>

                                    {/* Brochure */}
                                     <button
                                       type='button'
                                       onClick={scrollToForm}
                                       className='border border-black flex flex-row gap-3 items-center md:px-22 px-10 py-3 rounded cursor-pointer'
                                     >
                                       <h2 className='text-[17px]'>Download Brochure</h2>
                                         
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
                                         <p className='font-[500]'> 4 hours/week</p>
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
                         <div className='w-full h-full md:ml-10'>
                            <img src={dataheroimg} alt='Hero Image' className='w-140 h-134' />
                         </div>
                     </div>
              </div>
        </section>

        {/* NEW AI section */}
        <section className='md:max-w-7xl mx-auto font-poppins bg-[#5349FF] md:rounded-2xl mt-30 text-white'>
               <div className='flex flex-col md:flex-row justify-between gap-10 py-10 px-10'>
                        {/* Left Side */}
                        
                           <div className='md:max-w-[650px] mt-15'>
                             <div className='flex flex-col gap-10'>
                                 <div className='md:max-w-[600px]'>
                                    <h2 className='font-[500] md:text-[35px] text-[20px]'>Get Your Certification and Dominate the World of Data</h2>
                                 </div>
                                 <p className='font-[390] text-ssm'>This program provides an optimized path to earning your Microsoft Power BI certification. Exam simulations
                                     and a proven pedagogical approach guarantee you'll be well-prepared for success.</p>
                            </div>
                          

                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[500px] md:mr-20'>
                           <div className='w-full h-full'>
                               <img src={datapi} alt='image' className='w-full h-full object-cover' />
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

                        {/* UNLEASH SECTION */}
                        <div className='flex flex-col justify-center items-center pt-20 md:px-0 px-6 '>
                            <div className='flex flex-col gap-4 text-center items-center '>
                              <div className='md:max-w-[1000px]'>
                                  <h2 className='md:text-5xl text-3xl font-[550] text-[#5349FF]'>Reinvent Your Learning Approach</h2>
                              </div>
                                <div className='md:max-w-[700px] flex '>
                                    <p className='font-[390] text-center'>Embrace GOMYCODE's innovative methodology and join a community of passionate learners ready to tackle new challenges.</p>
                                </div>
                            </div>

                            {/* grids */}
                            <div className='md:max-w-7xl'>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-15 mb'>
                             {/* 1st */}
                             <div className='bg-white'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>High-performance learning platform</h2>
                                    <p className='font-[390] text-sm'>Work on concrete projects and develop practical skills.</p>
                                </div>
                             </div>
                                {/* 2nd */}
                                <div className='bg-white'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash2} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>Interactive and engaging courses</h2>
                                    <p className='font-[390] text-sm'>Progress at your own pace with fun exercises and clear steps.</p>
                                </div>
                             </div>
                                {/* 3rd */}
                                <div className='bg-white rounded-lg'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash3} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>enriching experience</h2>
                                    <p className='font-[390] text-sm'>Participate in exclusive events to develop your interpersonal skills and expand your network.</p>
                                </div>
                             </div>
                             {/* 4th */}
                             <div className='bg-white'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash4} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>Flexible hybrid learning</h2>
                                    <p className='font-[390] text-sm'>The perfect blend of in-person and online learning for optimal flexibility.</p>
                                </div>
                             </div>
                            </div>
                            </div>
                        </div>
        </section>

        {/*  */}
        <section className='md:max-w-7xl mx-auto mt-30 mb-20 bg-[#5349FF] font-poppins md:rounded-3xl'>
               <div className='flex flex-col md:flex-row md:px-15 gap-15 px-5 md:py-15 py-10'>
                          <div className='md:max-w-[] text-white  '>
                              <div className='flex flex-col gap-5'>
                                 <div className='md:max-w-[700px]'>
                                    <h2 className='font-[420] text-3xl'>Why Choose GOMYCODE for Your Data Analyst Training?</h2>
                                 </div>
                                 <div className='md:max-w-[400px]'>
                                   <p className='font-[350]'>Join a leading institution in the field of digital training and become part of a dynamic
                                     community of data analysts prepared to conquer the professional world.</p>
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
                       <div className='md:max-w-[900px] text-center mb-5 md:px-0 px-5'>
                        <h2 className='md:text-5xl  text-xl font-[500]'>What Our Alumni Say About Our Data Analyst Training</h2>
                       </div>
                       <p className='md:text-[28px] text-[16px] font-[390]'>Why they chose MYCODE.</p>
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
                                    <p>GOMYCODE exceeded my expectations as a tech institution. The instructors demonstrate deep knowledge, 
                                        the curriculum was comprehensive, and the hands-on projects were challenging yet rewarding. 
                                        The supportive learning environment and career guidance added immense value to my educational journey. A solid four stars!</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-10'>
                                       <div>
                                        <img src={cyb1} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Hichem</h2>
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
                                  <div className='mb-5'>
                                   <p>GOMYCODE has been an absolute game-changer for me. The instructor is very knowledgeable and
                                     supportive and the hands-on projects really helped me apply what I learned. 
                                    I’ve leveled up my skills and unlocked a whole new world of possibilities.</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-5'>
                                       <div>
                                        <img src={cyb2} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Ali Bouadel</h2>
                                       </div>
                                  </div>
                              </div>
                        </div>
                        {/* 3rd */}
                         <div className='bg-white rounded-xl '>
                              <div className='p-7 flex flex-col gap-7'>
                                  <div className='mb-5'>
                                     <img src={frameblue} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div className='mb-30'>
                                    <p>With no local schools in my area, I chose GOMYCODE to train. Best decision of my life!</p>
                                  </div>
                                  {/* Image and Name */}
                                  <div className='flex flex-row gap-5 items-center mt-5'>
                                       <div>
                                        <img src={cyb3} alt='alumni1' className='w-15 h-15 object-cover rounded-full' />
                                       </div>
                                       <div className='max-w-[100px]'>
                                        <h2 className='font-[420] md:text-[19px] text-[14px]'>Mohamed Amine Amri</h2>
                                       </div>
                                  </div>
                              </div>
                        </div>
                   </div>
        </section>

        {/* Next section for programs */}
        <section className='md:max-w-6xl mx-auto font-poppins mt-20 text-black'>
                <div className='flex items-center justify-center'>
                      <h2 className='md:text-[45px]  text-[20px] font-[550]'>Next 3 Sessions</h2>

                     
                </div>
                  {/* Grid */}
                      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#5349FF] '>
                                 <div className='bg-white mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='md:text-[25px] text-[16px] font-[550] '>November 2025</h2>
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
                                                <h2 className='md:text-[25px] text-[16px] font-[550] '>December 2025</h2>
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
                                                <h2 className='md:text-[25px] text-[16px] font-[550] '>January 2026</h2>
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
                             <div className='md:max-w-[700px] text-center px-5 mb-4'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550]'>Want to join the web developer training?</h2>
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
             <div className='md:max-w-[550px] mx-auto mt-20 font-poppins' id='brochure-form'>
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
                         <button className='bg-black text-white py-2.5  font-[380] rounded-md mb-20'>Submit</button>
                     </form>
             </div>
        </section>

       

        {/* Online Section */}
        <section className='md:max-w-7xl mx-auto font-poppins my-20 bg-white md:rounded-2xl'>
               <div className='flex flex-col items-center justify-center md:px-0 px-6 py-15'>
                        <div className='md:max-w-[900px]'>
                          <div className='flex flex-col gap-4 items-center'>
                              <h2 className='md:text-3xl text-xl text-center font-[550]'>You Can Take Our Data Analyst Training 100% Online</h2>
                              <p className='md:text-[21px] text-sm font-[395] text-center'>If that suits you better, join the online training to learn data analysis from home using our digital platform.</p>
                         </div>
                          <div className='w-full h-full mt-15'>
                              <img src={onlineimage} alt='image' className='w-full h-full object-cover' />
                          </div>
                          <div className='flex md:flex-row flex-col md:gap-10 gap-5 mt-15 justify-center'>
                              <div className='md:border-r border-black pr-10 '>
                                   <h2 className='text-[18px] font-[500]'>A dedicated instructor</h2>
                              </div>
                              <div className='md:border-r border-black pr-10 '>
                                   <h2 className='text-[18px] font-[500]'>Training flexibility</h2>
                              </div>
                              <div className=''>
                                   <h2 className='text-[18px] font-[500]'>Course recordings</h2>
                              </div>
                          </div>
                          <div className='mt-15 flex justify-center'>
                                <button
                                  type='button'
                                  onClick={scrollToForm}
                                  className='bg-[#5349FF] text-white py-2.5 px-10 rounded-md font-[380] cursor-pointer'
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
                  className='w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-lg'
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