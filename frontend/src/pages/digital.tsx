import aicon from '../assets/courses/aicon.svg'
import whatsapp from '../assets/courses/whatsapp.png'
import digitalheropic from '../assets/courses/digitalheropic.png'
import group from '../assets/courses/groupq.svg'
import group2 from '../assets/courses/group2.svg'
import group3 from '../assets/courses/group3.svg'
import group4 from '../assets/courses/group4.svg'
import aitech from '../assets/courses/AItech.svg'
import spons from '../assets/courses/sponsors.png'
import meta from '../assets/courses/meta.png'
import download from '../assets/courses/download.png'
import frame from '../assets/courses/frame.svg'
import alumni1 from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import calendar from '../assets/courses/date.svg'
import mark from '../assets/courses/mark.svg'
import check from '../assets/courses/check.svg'
import check2 from '../assets/courses/check2.svg'
import check3 from '../assets/courses/check3.svg'
import onlineimage from '../assets/courses/online.png'

import unleash from '../assets/courses/unleash.svg'
import unleash2 from '../assets/courses/unleash2.svg'
import unleash3 from '../assets/courses/unleash3.svg'
import unleash4 from '../assets/courses/unleash4.svg'


const fullstack = () => {
     const scrollToForm = () => {
          const form = document.getElementById('brochure-form')
          form?.scrollIntoView({ behavior: 'smooth' })
     }
     const openWhatsApp = () => {
          window.open('https://wa.me/2349028495703', '_blank')
     }

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
                                 <h1 className='md:text-4xl text-2xl font-[550] mb-8'>Digital Marketing Bootcamp</h1>
                            </div>
                             <h2 className='text-[#0D663C] text-4xl font-[650] mb-3'>450,000 NGN</h2>
                             <p className='font-[400]'>This 16-week course teaches key digital marketing skills, including SEO, SEM, UX/UI design,
                                 influencer marketing, and content creation. Learn to optimize your online presence and 
                                track performance using tools like Google Ads and Meta, preparing you to run effective marketing campaigns.</p>
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
                                         <p className='font-[500]'>Schedule: 12 hours/week</p>
                                    </div>
                                    {/* 3rd */}
                                    <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group3} alt='icon' className='w-5 h-auto object-cover ' />
                                        </span>
                                         <p className='font-[500]'>Format: Available in-person and online</p>
                                    </div>
                                    {/* 4th */}
                                    <div className='flex flex-row gap-5 items-center'>
                                        <span>
                                            <img src={group4} alt='icon' className='w-5 h-5 object-cover ' />
                                        </span>
                                         <p className='font-[500]'>Options: Evening classes available</p>
                                    </div>
                                </div>
                      </div>
                   </div>
                     {/* Right Side - image */}
                     <div className='md:max-w-[500px] hidden md:flex flex-col items-center justify-center'>
                         <div className='w-full h-full md:ml-40'>
                            <img src={digitalheropic} alt='Hero Image' className='w-110 h-129' />
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
                         <h2 className='font-[500] md:text-[40px] text-[24px]'>New! AI-Powered Software Development Course</h2>

                         <div className='grid md:grid-cols-6 grid-cols-2 gap-5 mt-10'>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>ChatGPT</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Gemini</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Ryter</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Runway</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Lovable</h1>
                            <h1 className='bg-[#762AFF] px-7 py-2.5 font-[500] rounded-full'>Writesonic</h1>
                         </div>
                         <div className='md:max-w-[900px] mx-auto mt-15'>
                             <p className='font-[380] text-[16px]'>Become a marketing strategist and learn how Artificial Intelligence can optimize campaigns, 
                                analyze data instantly, and help you deliver more targeted, creative, and profitable results.</p>
                         </div>
                    </div>
                </div>

        </section>

        {/* Sponsorship company Section */}
        <section className='md:max-w-6xl mx-auto font-poppins mt-20 bg-white rounded-2xl'>
                 <div className='flex flex-col justify-center items-center mt-5 md:px-0 px-6'>
                     <h2 className='md:text-3xl text-2xl text-center font-[450] mt-7'>Best companies recruit our alumni</h2>
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

                         {/* Full-Stack Developer Library */}
                         <div className='bg-black text-white rounded-3xl mt-10'>
                                <div className='md:py-15 py-10 md:px-10 px-5 items-center justify-center flex flex-col'>
                                        <div className='md:max-w-[700px] text-center '>
                                             <h2 className='md:text-3xl text-3xl font-[400] mb-4 text-center'>Master the Tools, Become a Professional Digital Marketer</h2>
                                        </div>
                                    <p className='mb-15 font-[400] text-center'>Discover the key platforms and tools that shape modern digital marketing.</p>
                              <div className='w-full h-full flex justify-center items-center'>
                                   <img src={meta} alt='logo' className='w-170 h-auto object-cover ' />
                              </div>
                                </div>
                         </div>
        </section>

        {/*  */}
        <section className='md:max-w-7xl mx-auto mt-30 mb-20 bg-[#0D663C] font-poppins md:rounded-3xl'>
               <div className='flex flex-col md:flex-row md:px-15 gap-15 px-5 md:py-15 py-10'>
                          <div className='md:max-w-[] text-white  '>
                              <div className='flex flex-col gap-5'>
                                 <div className='md:max-w-[700px]'>
                                    <h2 className='font-[420] text-3xl'>Why Learn Digital Marketing with MYCODE?</h2>
                                 </div>
                                 <div className='md:max-w-[400px]'>
                                   <p className='font-[350]'>Join GOMYCODE, the leader in digital training in Africa, and join a dynamic community of learners.</p>
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
                       <div className='md:max-w-[800px] text-center mb-5 md:px-0 px-5'>
                        <h2 className='md:text-4xl text-2xl font-[550]'>What Our Alumni Think of Our Training</h2>
                       </div>
                       <p className='md:text-[28px] text-[18px] font-[390]'>Why they chose MYCODE.</p>
                   </div>

                   {/* alumni grid */}
                   <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10  md:px-0 px-10'>
                        {/* 1st */}
                        <div className='bg-white rounded-xl '>
                              <div className='p-7 flex flex-col gap-7'>
                                  <div className='mb-5'>
                                     <img src={frame} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
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
                                     <img src={frame} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div className='mb-10'>
                                   <p>MYCODE has been an absolute game-changer for me. The instructor is very knowledgeable and 
                                        supportive and the hands-on projects really helped me apply what I
                                         learned. I’ve leveled up my skills and unlocked a whole new world of possibilities.</p>
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
                                  <div className='mb-5'>
                                     <img src={frame} alt='alumni1' className='w-20.5 h-14.5 object-cover' />
                                  </div>
                                  <div className='mb-35'>
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
                      <h2 className='md:text-[45px] text-[24px] font-[550]'>Next 3 Sessions</h2>

                     
                </div>
                  {/* Grid */}
                      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#0D663C] '>
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
                            <div className='bg-[#0D663C] '>
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
                            <div className='bg-[#0D663C] '>
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
             <div className='bg-[#0D663C] md:rounded-2xl text-white'>
                     <div className='flex flex-col items-center justify-center py-10 md:px-0 px-5 '>
                             <div className='md:max-w-[700px] text-center px-5 mb-4'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550]'>Want to join our Digital Marketing training?</h2>
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
                         <button className='bg-[#0D663C] text-white py-2.5  font-[380] rounded-md mb-20'>Submit</button>
                     </form>
             </div>
        </section>


 {/* UNLEASH SECTION */}
         <section className='md:max-w-6xl mx-auto font-poppins  mb-30'>
             
                        <div className='flex flex-col justify-center items-center pt-20 md:px-0 px-10 '>
                            <div className='flex flex-col gap-4 text-center items-center '>
                              <div className='md:max-w-[1000px]'>
                                  <h2 className='md:text-5xl text-3xl font-[550] text-[#0D663C]'>Experience a New Way to Learn</h2>
                              </div>
                                <div className='md:max-w-[700px] flex '>
                                    <p className='font-[390]'>Discover the benefits of our unique approach:</p>
                                </div>
                            </div>

                            {/* grids */}
                            <div className='md:max-w-7xl'>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-15 mb'>
                             {/* 1st */}
                             <div className='bg-white rounded-lg'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>An interactive and collaborative learning platform</h2>
                                    <p className='font-[390] text-sm'>Work on concrete projects, share your ideas, and progress as a team.</p>
                                </div>
                             </div>
                                {/* 2nd */}
                                <div className='bg-white rounded-lg'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash2} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>Dynamic and captivating courses</h2>
                                    <p className='font-[390] text-sm'>Learn by doing, through stimulating exercises and challenges that will keep you motivated.</p>
                                </div>
                             </div>
                                {/* 3rd */}
                                <div className='bg-white rounded-lg'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash3} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>A rich and stimulating learning environment</h2>
                                    <p className='font-[390] text-sm'>Participate in exclusive events and workshops, meet industry professionals, 
                                        and develop your interpersonal skills.</p>
                                </div>
                             </div>
                             {/* 4th */}
                             <div className='bg-white rounded-lg'>
                                <div className='px-5 py-10 flex-col flex gap-10'>
                                    <div className='w-full h-full'>
                                      <img src={unleash4} alt='icon' className='w-10 h-10' />  
                                    </div>
                                    <h2 className='text-xl font-[500]'>Total flexibility for personalized learning</h2>
                                    <p className='font-[390] text-sm'> Choose between face-to-face lessons and online learning, adapt your pace, and optimize your time.</p>
                                </div>
                             </div>
                            </div>
                            </div>
                        </div>
         </section>
        

        {/* Integrate the Job Market */}
        <section className='md:max-w-7xl mx-auto font-poppins mt-20 bg-white md:rounded-2xl mb-20'>
                   <div className='flex flex-col items-center justify-center py-6 md:px-0 px-5 '>
                      <h2 className='mb-4 text-4xl font-[550] text-[#0D663C]'>Integrate the Job Market with Confidence</h2>
                      <p className='text-ssm font-[395] text-[#0D663C] mb-4'>Our team dedicated to professional integration supports you
                          in your job search.</p>

                          <div className='md:max-w-4xl mt-10 text-white'>
                                <div className='flex md:flex-row flex-col gap-4'>
                                   {/* 1st */}
                                   <div className='flex-1 bg-[#0D663C] rounded-2xl'>
                                        <div className='p-5 flex flex-col gap-20'>
                                             <img src={check} alt='icon' className='w-14 h-14 object-cover' />
                                             <h2 className='font-[390] text-[20px]'>Personalized advice to find the opportunity that suits you.</h2>
                                        </div>
                                   </div>
                                   {/* 2nd */}
                                   <div className='flex-1 bg-[#0D663C] rounded-2xl'>
                                        <div className='p-5 flex flex-col gap-20'>
                                             <img src={check2} alt='icon' className='w-14 h-14 object-cover' />
                                             <h2 className='font-[390] text-[20px]'>Personalized advice to find the opportunity that suits you.</h2>
                                        </div>
                                   </div>
                                   {/* 3rd */}
                                   <div className='flex-1 bg-[#0D663C] rounded-2xl'>
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
                              <h2 className='text-2xl font-[500] text-center'>You can follow our digital marketing training 100% online</h2>
                              <p className='md:text-[21px] text-[15px] font-[395] text-center'>If that suits you better, join the online training to learn digital marketing from home using our digital platform.</p>
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
                                <div className='bg-[#0D663C] text-white py-2.5 px-10 rounded-md font-[380] cursor-pointer'>Download the brochure</div>
                          </div>
                        </div>
                        
               </div>
        </section>

       
    </section>
  )
}

export default fullstack