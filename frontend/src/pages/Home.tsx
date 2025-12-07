import { Link } from 'react-router-dom'
import rocket1 from '../assets/img/swag-jobs-2.svg';
import rocket2 from '../assets/img/swag-jobs-3.svg';
import rocket3 from '../assets/img/swag-jobs-4.svg';
import essen2 from '../assets/img/essen2.svg'
import essen1 from '../assets/img/essen1.svg'
import essen3 from '../assets/img/essen3.svg'
import alumni1 from '../assets/img/alum1.png'
import alumni2 from '../assets/img/alum2.png'
import alumni3 from '../assets/img/alum3.png'
import alumni4 from '../assets/img/alum4.png'
import figma from '../assets/img/Figma.svg.png'
import reactimg from '../assets/img/react.png'
import master1 from '../assets/img/Master1.svg'
import master2 from '../assets/img/Master2.svg'
import master3 from '../assets/img/Master3.svg'
import masterimg from '../assets/img/Masterimg.png'
import courseicon from '../assets/img/right-arrow.png'
import icondetail from '../assets/img/icon-course.svg'
import certimg from '../assets/img/cert.png'
import ability1 from '../assets/img/boost1.svg'
import ability2 from '../assets/img/boost2.svg'
import ability3 from '../assets/img/boost3.svg'
import heroimg from '../assets/img/heroimg.png'
import heroicon1 from '../assets/img/heroicon.svg'
import heroicon2 from '../assets/img/heroicon2.svg'
import heroicon3 from '../assets/img/heroicon3.svg'
import line from '../assets/img/line.png'

const Home = () => {
  return (
    <section className='w-full font-poppins bg-[#FFFAF3]'>
        {/* Hero Section */}
        <div className='w-full '>
            <div className='md:max-w-7xl mx-auto md:px-0 px-5 py-20 '>
              <div className='flex flex-col md:flex-row gap-10 bg-[#27AAFF] px-5 pt-10 md:px-10 rounded-3xl items-center justify-center '>
                {/* Left side */}
                <div className='flex flex-col'>
                   <div className='md:max-w-[600px] mb-10'>
                   <h2 className='md:text-5xl text-3xl font-bold font-sora'>Become a Tech Professional and Expert</h2>
                       </div>
                                                 
                     {/* abilities */}
                   <div className='flex flex-row gap-8 mt-5'>
                  <div className='flex flex-col md:max-w-[300px] text-center items-center justify-center gap-4'>
                   <img src={heroicon1} alt='ability' className='w-7 h-9 object-cover' />
                     <h2 className='md:text-ssm text-[14px] font-semibold mt-2'>400+ hours program</h2>
                         </div>
                     {/* 2 */}
                        <div className='flex flex-col md:max-w-[200px] text-center items-center justify-center gap-4 '>
                        <img src={heroicon2} alt='ability' className='w-8 h-8 object-cover' />
                       <h2 className='md:text-ssm text-[14px] font-semibold mt-2'>Strong Portfolio</h2>
                       </div>
                          {/* 3 */}
                         <div className='flex flex-col md:max-w-[200px] text-center items-center justify-center gap-4 mt-'>
                          <img src={heroicon3} alt='ability' className='w-8 h-8 object-cover' />
                            <h2 className='md:text-ssm text-[14px] font-semibold mt-2'>Career Mentorship</h2>
                           </div>

                          </div>
                        </div>
                {/* Right side */}
                <div className='flex-1 md:max-w-[500px] items-center justify-center '>
                     <img src={heroimg} alt='image' className='w-full h-auto object-cover flex items-center ' />

              </div>
</div>
            </div>
        </div>
            
            {/* after hero section */}

        <section className='md:max-w-5xl mx-auto md:px-0 px-5 md:pt-10 pt-5'>
              <div className='bg-white rounded-2xl '>
                    <div className='flex flex-col md:flex-row md:gap-30 gap-10 md:px-16 md:py-25 p-6 items-center'>
                        {/* left side */}
                        <div className='md:max-w-[400px]'>
                              <h2 className='md:text-3xl text-xl font-semibold font-poppins text-center md:text-left'>
                                MyCode, the leading education technology start-up and training provider in Africa and soon to the world
                              </h2>
                        </div>
                        {/* right side */}
                        <div className='md:max-w-[600px] flex flex-row gap-4 items-center justify-center'>
                          <div className='flex flex-col gap-4'>
                            <h2 className='md:text-2xl  text-[1.1rem] font-semibold fancy-underline' style={{ fontFamily: " Arial, sans-serif" }}>12 Students</h2>
                            <span>
                              <img src={line} alt='icon' className='w-14 h-7 object-cover mt-2' />
                            </span>
                            <p className='md:text-2xl text-[1.1rem] font-semibold font-poppins'>Per class</p>
                          </div>
                          <div className='flex flex-col gap-4'>
                            <h2 className='md:text-2xl text-[1.1rem] font-semibold fancy-underline font-poppins'>Space</h2>
                            <span>
                              <img src={line} alt='icon' className='w-14 h-7 object-cover mt-2' />
                            </span>
                            <p className='md:text-2xl text-[1.1rem] font-semibold font-poppins'>Physical/Online</p>
                          </div>
                            
                        </div>
                    </div>
              </div>
        </section>

    {/* Why Zplus section */}
    <section className='w-full bg-[#FFFAF3]'>
       <div className='md:max-w-7xl mx-auto md:px-0 px-5 py-20 '>
                 <div className='text-center items-center justify-center mx-auto py-'>
                          <div className='flex flex-row gap-3 justify-center mb-2'>
                             <h2 className='text-[1rem] font-[550] tracking-tight md:text-[3rem] font-poppins'>Boost your </h2>
                             <span>
                              <img src={figma} alt='' className='md:w-8 md:h-7 w-4 h-4 md:mt-7' />
                             </span>
                             <h2 className='text-[1rem] font-[550] tracking-tight md:text-[3rem] font-poppins'>tech skills</h2>
                          </div>
                          <div className='flex flex-row gap-3 justify-center mb-3'>
                             <h2 className='text-[1rem] font-[550] tracking-tight md:text-[3rem] font-poppins'>Build Your </h2>
                             <span>
                              <img src={reactimg} alt='' className='md:w-8 md:h-7 w-5 h-5 md:mt-6' />
                             </span>
                             <h2 className='text-[1rem] font-[550] tracking-tight md:text-[3rem] font-poppins'>Career And Portfolio</h2>
                          </div>
                          {/* Courses */}
                    <div className=' mx-auto text-center items-center justify-center'>
                      <div className='grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 mt-10 justify-center font-poppins'>
                            
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>Cybersecurity</h2>
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>UI/UX Design</h2>
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>Web Development</h2>
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>Data Analysis</h2>
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>AI Prompting</h2>
                              <h2 className='border border-black rounded-full py-2 px-4 md:text-sm text-[12px] font-semibold'>Graphic Design</h2>
                           
                           
                              
                      </div>
                       <div className='mt-10'>
                        <Link to='/' className=' bg-[#0F0F0F] py-3 px-6 text-white rounded text-sm text-white font-bold font-poppins'>Commence</Link>
                       </div>
                    </div>
                 </div>
       </div>
         
  

    </section>

   {/* How it works section */}
      <section className='relative mb-36 flex w-full flex-col items-center justify-center px-container-base lg:px-container-lg xl:px-container-xl md:px-0 px-15'>
      <div className='sticky top-[35vh] text-center md:px-0 px-5'>
        <div className='opacity-90 flex-col flex gap-3 mt-10'>
          <div>
           
          </div>
            <h2 className='items-center justify-center text-[3rem] font-[700] tracking-tight md:text-[6rem] font-poppins'>How It works</h2>
        </div>

      </div>

      <div className='sticky top-[25vh] flex w-full justify-center'>
  <div className='flex min-h-[400px] max-w-sm flex-col justify-between rounded-[20px] bg-[#74E9DB] p-5 ' style={{ opacity: 1, transform: 'rotate(-15deg)' }}>
         <img src={rocket2} alt='join cohort' className='loading-lazy w-50 h-50 bg-transparent' />
         <p className='md:text-[1.7em] text-[16px] font-[700] tracking-tight md:text-[2.2em]'>We don't just teach tech — we prepare Africa's youth to lead innovation.</p>
        </div>

      </div>
      <div className='sticky top-[25vh] flex w-full justify-center'>
        <div className='flex min-h-[400px] max-w-sm flex-col justify-between rounded-[20px] bg-[#BAE3F4] p-5 ' style={{ opacity: 1, transform: 'rotate(-10deg)' }}>
         <img src={rocket1} alt='join cohort' className='loading-lazy w-50 h-50 bg-transparent' />
         <p className='md:text-[1.7em] text-[16px] font-[700] tracking-tight md:text-[2.2em]'>Fill the Application form</p>
        </div>

      </div>
      <div className='sticky top-[25vh] flex w-full justify-center'>
        <div className='flex min-h-[400px] max-w-sm flex-col justify-between rounded-[20px] bg-[#F8F2FC] p-5 
        ' style={{ opacity: 1, transform: 'rotate(-5deg)' }}>
         <img src={rocket3} alt='join cohort' className='loading-lazy w-50 h-50 bg-transparent' />
         <p className='md:text-[1.7em] text-[16px] font-[700] tracking-tight md:text-[2.2em]'>Select the track you want to learn</p>
        </div>

      </div>
</section>


        {/* WWhy choose Us section */}
        <section className='w-full bg-[#FFFAF3] '>
            <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-10 pb-10'>
                   <div className='text-center items-center justify-center mx-auto'>
                  
                    <p className='font-Sora text-3xl md:text-[50px] mb-4 font-semibold'>We have programs for everyone</p>
                   </div>
                   {/* Program Cards */}
                     <div className='md:max-w-4xl mx-auto md:px-0 px-5 pt-10 pb-10'>
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-6  '>
                        {/* Card 1 */}
                        <div className='bg-white  px-6 py-4 rounded-xl'>
                              <div className='flex flex-col max-w-[200px] '>
                                  <img src={essen1} alt='program' className='w-12 h-12 object-cover rounded mb-45' />
                                  <h2 className='md:text-4xl text-[20px] font-bold font-poppins'>Master the Essentials </h2>

                              </div>
                        </div>
                        {/* Card 2 */}
                        <div className='bg-white px-6 py-4 rounded-xl'>
                              <div className='flex flex-col max-w-[200px] '>
                                  <img src={essen2} alt='program' className='w-12 h-12 object-cover rounded mb-45' />
                                  <h2 className='md:text-4xl text-[20px] font-bold font-poppins'>Build your Tech Skills </h2>

                              </div>
                        </div>
                        {/* Card 3 */}
                        <div className='bg-white  px-6 py-4 rounded-xl'>
                              <div className='flex flex-col max-w-[200px] '>
                                  <img src={essen3} alt='program' className='w-12 h-12 object-cover rounded mb-45' />
                                  <h2 className='md:text-4xl text-[20px] font-bold font-poppins'>Become a Tech Pro </h2>

                              </div>
                        </div>
                     </div>
                     </div>
                 
                 {/* Master the Essentials */}
                    <div className='md:max-w-7xl mx-auto md:px-0 px-5 py-7  bg-[#EEE8DF] rounded-2xl my-15'>
                             <div className='px-10 py-10 bg-[#FADC32] rounded-2xl max-w-[1300px] mx-auto'>
                                 <div className='flex flex-col md:flex-row gap-6'>
                                  {/* left side */}
                                       <div className='flex-1 flex-col md:max-w-[800px]'>
                                            <h2 className='text-4xl font-bold font-sora'>Master the Essentials</h2>
                                            <div className='flex flex-col md:flex-row gap-6 mt-12'>
                                                    <div className='flex md:flex-col flex-row gap-4 md:max-w-[200px] text-center items-center'>
                                                         <img src={master1} alt='icon' className='w-10 h-8 object-cover '/>
                                                        <h2 className='text-sm font-semibold'>Zero tech competency needed</h2>      
                                                    </div>
                                                    {/* 2 */}
                                                     <div className='flex md:flex-col flex-row gap-4 md:max-w-[200px] text-center items-center'>
                                                         <img src={master2} alt='icon' className='w-8 h-8 object-cover '/>
                                                        <h2 className='text-sm font-semibold'>48 hours with your instructor</h2>      
                                                    </div>
                                                    {/* 3 */}
                                                      <div className='flex md:flex-col flex-row gap-4 md:max-w-[150px] text-center items-center'>
                                                         <img src={master3} alt='icon' className='w-6 h-8 object-cover '/>
                                                        <h2 className='text-sm font-bold'>12 Students max per group</h2>      
                                                    </div>
                                            </div>
                                            <div className='bg-black text-white rounded px-8 py-2 mt-5 w-50 text-center '>
                                              <h2 className='text-[16px] font-semibold'>View all Courses</h2>
                                            </div>
                                       </div>
                                        {/* right side */}
                                        <div className='flex-1 md:max-w-[400px] items-center justify-center '>
                                             <img src={masterimg} alt='image' className='md:w-full md:h-70 object-cover' />
                                        </div>
                                 </div>
                             </div>
                             {/* Courses Details section */}
                             <div className='md:max-w-3xl mx-auto md:px-0 px-8 py-10 '>
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-6  '>
                        {/* Card 1 */}
                        <Link to="/social">
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                          <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Social Media Marketing Essentials</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div>

                        </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to='/python'>
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                          <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Python Essentials</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div> 

                        </div>
                        </Link>
                        {/* Card 3 */}
                         <Link to="/fullstack"> 
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                          <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Web Development Essentials</h2>
                                {/* Course Link */}
                            
                           <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          
                          </div>

                        </div>
                         </Link>
                             </div>
                    </div>
                  
                        {/*  Boost your tech career */}
                          <div className='md:max-w-7xl mx-auto md:px-0 px-5 py-7  bg-[#EEE8DF] rounded-2xl mt-15'>
                             <div className='px-10 py-10 bg-[#E60B14] rounded-2xl max-w-[1300px] mx-auto md:px-0 px-5'>
                                 <div className='flex flex-col text-center items-center justify-center text-white'>
                                                  <div className='md:max-w-[] mb-10'>
                                                      <h2 className='md:text-5xl text-3xl font-bold font-sora'>Boost your Skills and get certified</h2>
                                                  </div>
                                                  <div className='mb-8'>
                                                    <img src={certimg} alt='program' className='w-full h-auto object-cover'/>
                                                  </div>
                                                  {/* abilities */}
                                                  <div className='flex md:flex-row flex-col md:gap-8 gap-3 mt-5 '>
                                                    <div className='flex flex-col md:max-w-[150px] text-center items-center justify-center md:gap-4 gap-1'>
                                                      <img src={ability1} alt='ability' className='w-6 h-6 object-cover' />
                                                      <h2 className='text-sm font-light mt-2'>Up-to-date skillset</h2>
                                                    </div>
                                                    {/* 2 */}
                                                    <div className='flex flex-col md:max-w-[150px] text-center items-center justify-center md:gap-4 gap-1 md:mt-5'>
                                                      <img src={ability2} alt='ability' className='w-6 h-6 object-cover' />
                                                      <h2 className='text-sm font-light mt-2'>Professional credibility</h2>
                                                    </div>
                                                    {/* 3 */}
                                                    <div className='flex flex-col md:max-w-[150px] text-center items-center justify-center  md:gap-4 gap-1 md:mt-7'>
                                                      <img src={ability3} alt='ability' className='w-6 h-6 object-cover' />
                                                      <h2 className='text-sm font-light mt-2'>Competitive advantage in the job market</h2>
                                                    </div>

                                                  </div>
                                 </div>
     
                              </div>
                                <div className='md:max-w-5xl mx-auto md:px-0 px-8 py-10 '>
                      <div className='grid grid-cols-1 md:grid-cols-4 gap-6  '>
                        {/* Card 1 */}
                         <Link to='/cybersecurity'> 
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                     
                        <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Cybersecurity - CompTIA Security+ Certified</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div> 

                        </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to='/design'>
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                          <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Graphic Design - Adobe Certified</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div>

                        </div> </Link>
                        {/* Card 3 */}
                   <Link to='/digital'> 
                   <div className='bg-white py-10 px-6 rounded-2xl'>
                          <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Performance and Digital Marketing - Meta Certified</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div>

                        </div> </Link>
                        {/* Card 4 */}
                        <div className='bg-white  py-10 px-6 rounded-2xl'>
                    <Link to='/data'>     
                     <div className='flex flex-col gap-4 max-w-[200px]'>
                                <img src={icondetail} alt='icon' className='w-8 h-6 object-cover ' />
                                <h2 className='md:text-2xl text-[15px] font-bold'>Data Analytics - Microsoft Power BI Certified</h2>
                                {/* Course Link */}
                                <div className='flex flex-row gap-2 mt-2'>
                                    <p className='underline cursor pointer font-semibold md:text-xl text-[14px]'>Course Details</p>
                                    <span>
                                      <img src={courseicon} alt='icon' className='w-7 h-4 object-cover mt-2' />
                                    </span>
                                </div>
                          </div> </Link>

                          

                        </div>
                             </div>
                    </div>
                             </div>

            </div>
             {/* Alumni Section */}
                 <div className='w-full bg-[#FFFAF3]'>
                       <div className='md:max-w-5xl mx-auto md:px-0 px-5 pt-10 '>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                     {/* Alumni 1 */}
                     <div className='flex flex-col bg-[#FFFFFF] p-6 rounded-2xl'>
                         <div>
                          <h2 className='md:text-2xl text-[16px] font-sora font-semibold mb-2'>“The program is rewarding, very beneficial, and has clear and precise chapters.”</h2>
                          <p className='md:text-ssm text-[14px] font-[400] mb-4'>“The experience at GOMYCODE is super interesting, you learn so many game-changing techniques and 
                            methods. The program is rewarding, very beneficial, and has clear and precise chapters.”</p>
                         </div>
                         <div className='flex flex-row gap-8 mt-8'>
                          <img src={alumni1} alt='alumni' className='w-16 h-16 rounded-full' />
                          <h2 className='md:text-xl text-[14px] font-sora font-semibold mt-4 font-sora'>MAYA</h2>
                         </div>
                     </div>
                      {/* Alumni 2 */}
                      <div className='flex flex-col bg-[#FFFFFF] p-6 rounded-2xl'>
                         <div>
                          <h2 className='md:text-2xl text-[16px] font-sora font-semibold mb-2'>“I have landed many freelance contracts after my training.”</h2>
                          <p className='md:text-ssm text-[14px] font-[400] mb-4'>“I have succeded in landing many freelance contracts after my training at GOMYCODE. I am even able to lead projects with new technologies thanks to my ability
                             to be an autonomous learner.”</p>
                         </div>
                         <div className='flex flex-row gap-8 mt-8'>
                          <img src={alumni2} alt='alumni' className='w-16 h-16 rounded-full' />
                          <h2 className='md:text-xl text-[14px] font-sora font-semibold mt-4 font-sora'>ANOUAR</h2>
                         </div>
                     </div>
                      {/* Alumni 3 */}
                      <div className='flex flex-col bg-[#FFFFFF] p-6 rounded-2xl'>
                         <div>
                          <h2 className='md:text-2xl text-[16px] font-sora font-semibold mb-2'>“The training helped me strengthen my skills and boost my clothing sales project.”</h2>
                          <p className='md:text-ssm text-[14px] font-[400] mb-4'>“The training helped me strengthen my digital marketing skills and give a new impetus to my clothing sales project. Our instructor is very motivating, and understanding,
                             and we have developed a friendship while maintaining a relationship of mutual respect.”</p>
                         </div>
                         <div className='flex flex-row gap-8 mt-8'>
                          <img src={alumni3} alt='alumni' className='w-16 h-16 rounded-full' />
                          <h2 className='md:text-xl text-[14px] font-sora font-semibold mt-4 font-sora'>SELIM</h2>
                         </div>
                     </div>
                      {/* Alumni 4 */}
                      <div className='flex flex-col bg-[#FFFFFF] p-6 rounded-2xl'>
                         <div>
                          <h2 className='md:text-2xl text-[16px] font-sora font-semibold mb-2'>“I have created my startup thanks to what I learned during my training”</h2>
                          <p className='md:text-ssm text-[14px] font-[400] mb-4'>“I have been able to create a successful online platform called Boky.tn, and I have obtained the startup 
                            label for it. I am convinced that this would not have been possible without the teaching and encouragement.”</p>
                         </div>
                         <div className='flex flex-row gap-8 mt-8'>
                          <img src={alumni4} alt='alumni' className='w-16 h-16 rounded-full' />
                          <h2 className='md:text-xl text-[14px] font-sora font-semibold mt-4 font-sora'>RAZAK</h2>
                         </div>
                     </div>
                     </div>
                  </div>
                 </div>
</div>
        </section>

    </section>
  )
}

export default Home