import { Link } from 'react-router-dom'
import aboutimg from '../assets/img/aboutimg.png'
import Learnimg from '../assets/img/learn-1.png'
import bene1 from '../assets/img/bene1.png'
import bene2 from '../assets/img/bene2.png'
import bene3 from '../assets/img/bene3.png'
import bene4 from '../assets/img/bene4.png'
import partnersimg from '../assets/img/partner.png'
import Signupimg from '../assets/img/signup.png'

const about = () => {
  const scrollToSignup = (e: any) => {
    e.preventDefault()
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className='w-full bg-[#FFFAF3]'>
     <div className=' pt-10 px-4'>
         <div className='md:max-w-[1450px]  bg-[#EEE8DF] rounded-xl mx-auto md:px-0 px-4 md:py-17 py-10 '>
         <div className='flex flex-col md:flex-row md:gap-10 gap-6 md:py-1 py-6 md:px-10 px-4'>
                {/* Left Side  */}
                <div className='flex flex-col md:max-w-[700px]'>
                    <h1 className='md:text-6xl text-3xl font-poppins font-[480] mb-4'>Building the leading Tech learning company in Africa & The Middle East</h1>
                    <div className='mt-6'>
                        <Link to="/" onClick={scrollToSignup} className='text-white bg-[#E60B14] font-poppins md:px-9 md:py-4 px-5 py-3 rounded'>Sign Up</Link>
                    </div>
                </div>
                {/* Right Side  */}
                <div className='md:max-w-[500px]'>
                    {/* Image */}
                    <div className='md:ml-5'>
                        <img src={aboutimg} alt='about' className='w-166 h-auto object-contain' />
                    </div>
                </div>
         </div>
      </div>
     </div>
                    {/* it all started with learning */}
                    <div className='md:my-30 my-15 md:max-w-6xl mx-auto md:px-0 px-5' >
                        <div className='flex flex-col md:flex-row gap-10 '>
                             {/* Left Side  */}
                             <div className='md:max-w-[600px]'>
                                   <div className=''>
                                    <h2 className='font-poppins md:text-5xl text-3xl font-[520]'>It all starts with learning!</h2>
                                   </div>
                             </div>
                                {/* Right Side  */}
                                <div className='md:max-w-[600px]'>
                                  <div>
                                    <p className='font-poppins mb-2.5 font-[390]'>Our goal is to create an environment that nurtures learning, provides opportunities for practice, 
                                        and enables you to turn your dreams into reality.</p>
                                     <p className='font-poppins font-[390]'>Since starting out in a coworking space, we have come a long way. We were honored to win the 
                                        BlooMMasters program at MIT in 2017. And over the past six years, we have successfully trained over 30,000 students and 
                                        established partnerships with more than 100 organizations across eight countries.</p>
                                  </div>
                                  {/* BUtton sign up */}
                                  <div className='mt-8'>
                                <Link to="/" onClick={scrollToSignup} className='text-white bg-[#E60B14] font-poppins md:px-9 md:py-4 px-5 py-3 rounded'>Sign Up</Link>
                                 </div>
                                </div>
                        </div>
                    </div>

            {/* Learn from Anywhere  */}
          <div className='mt-25 md:max-w-7xl mx-auto md:px-0 px-4.5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                {/* Left Side  */}
                <div className='bg-[#FEB903] rounded-xl '>
                      <div className='items-center justify-center flex py-10'>
                        <img src={Learnimg} alt='learn' className='w-80 h-80 object-contain' />
                      </div>
                </div>
                {/* Right Side  */}
                <div className='bg-[#EEE8DF] rounded-xl '>
                    <div className='flex flex-col justify-center px-7 py-7'>
                        <h1 className='md:text-5xl text-3xl font-poppins font-[480] mb-2'>Learn from Anywhere!</h1>
                        <p className='font-poppins text-sm'>Follow your courses through our online platform! Track your progress and performance, schedule meetings 
                            with your instructors, and take the various tests and checkpoints wherever you are.</p>
                    </div>
                </div>
            </div>
          </div>

         {/* unlock your benefit of  experience */}
         <div className='w-full mt-20'>
            <div className='md:max-w-[1550px] mx-auto bg-[#0F0F0F] md:rounded-xl md:px-0 px-5 '>
                   <div className='py-10 md:px-15 px-6'>
                    <div className='mb-4'>
                    <h2 className='md:text-4xl text-2xl text-white font-poppins'>Unlock the benefits of the experience</h2>
                   </div>

                   {/* Grid  */}
                   <div className='grid grid-cols-1 md:grid-cols-4 gap-5 text-white py-10 '>
                      {/* 1st  */}
                      <div className='border border-white rounded-2xl'>
                          <div className='p-5 flex flex-col '>
                            <div className='mb-10'>
                                <img src={bene1} alt='' className='w-10 h-14 object-cover' />
                            </div>
                             <div>
                                <h2 className='font-poppins font-bold mb-4.5 text-xl'>Career training</h2>
                                <p className='font-poppins font-[390] text-sm'>Advance your career with immersive, full-time programs and specific coaching.</p>
                             </div>
                          </div>
                      </div>
                        {/* 2nd  */}
                        <div className='border border-white rounded-2xl'>
                          <div className='p-5 flex flex-col '>
                            <div className='mb-10'>
                                <img src={bene2} alt='' className='w-10 h-14 object-cover' />
                            </div>
                             <div>
                                <h2 className='font-poppins font-bold mb-4.5 text-xl'>Skill training</h2>
                                <p className='font-poppins font-[390] text-sm'>Stay competitive and relevant with
focused, flexible learning, and dedicated mentors.</p>
                             </div>
                          </div>
                      </div>
                        {/* 3rd  */}
                        <div className='border border-white rounded-2xl'>
                          <div className='p-5 flex flex-col '>
                            <div className='mb-10'>
                                <img src={bene3} alt='' className='w-12 h-12 object-cover' />
                            </div>
                             <div>
                                <h2 className='font-poppins font-bold mb-4.5 text-xl'>Talks, Workshops, Gatherings</h2>
                                <p className='font-poppins font-[390] text-sm'>Engage with our vibrant community through frequent events.</p>
                             </div>
                          </div>
                      </div>
                        {/* 4th  */}
                        <div className='border border-white rounded-2xl'>
                          <div className='p-5 flex flex-col '>
                            <div className='mb-10'>
                                <img src={bene4} alt='' className='w-14 h-14 object-cover' />
                            </div>
                             <div>
                                <h2 className='font-poppins font-bold mb-4.5 text-xl'>Learn in our hackerspaces or online</h2>
                                <p className='font-poppins font-[390] text-sm'>Our students can learn both in our physical or online hackerspaces.</p>
                             </div>
                          </div>
                      </div>
                   </div>
                   {/* Button  */}
                   <div className='mt-8 items-center justify-center flex'>
                                <Link to="/" onClick={scrollToSignup} className='text-white bg-[#E60B14] font-poppins md:px-9 md:py-4 px-5 py-3 rounded'>Sign Up</Link>
                                 </div>
                   </div>
                   
            </div>
         </div>
    

    {/* Partnerships */}
               <div className='md:my-30 my-15 md:max-w-6xl mx-auto md:px-0 px-4'>
                        <div className='flex flex-col md:flex-row md:gap-25 gap-6 '>
                             {/* Left Side  */}
                             <div className='md:max-w-[600px]'>
                                   <div className=''>
                                    <h2 className='font-poppins text-4xl font-[520]'>Partners that trust us</h2>
                                   </div>
                             </div>
                                {/* Right Side  */}
                                <div className='md:max-w-[600px]'>
                                  <div>
                                    <img src={partnersimg} alt='partners' className='' />
                                  </div>
                                 
                                 
                                </div>
                        </div>
                    </div>


                {/* Journey section */}

                <div className='mt-17 w-full text-white'>
                     <div className='md:max-w-[1550px] mx-auto bg-[#1A0AB3] md:rounded-2xl md:px-0 px-5'>
                           <div className='py-10 md:px-15 px-6'>
                                 <div className='mb-10'>
                                    <h2 className='md:text-4xl text-2xl font-poppins font-[520] mb-4'>A few numbers about our journey</h2>
                                    <p className='font-poppins '>Let’s take a look at what we have achieved in 6 years</p>
                                 </div>
                                 {/* Grid  */}
                                 <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-white py-'>
                                    {/* 1st  */}
                                    <div className='border border-white rounded-2xl'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-6xl font-[390] mb-25 font-poppins'>+30 000</h2>
                                            <p className='font-[390] text-xl font-poppins'>Trained students</p>
                                      </div>

                                    </div>
                                    {/* 2nd  */}
                                     <div className='border border-white rounded-2xl'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-6xl font-[390] mb-25 font-poppins'>+1 500</h2>
                                            <p className='font-[390] text-xl font-poppins'>Active instructors</p>
                                      </div>

                                    </div>
                                      {/* 3rd  */}
                                       <div className='border border-white rounded-2xl'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-6xl font-[390] mb-25 font-poppins'>+300</h2>
                                            <p className='font-[390] text-xl font-poppins'>Employees</p>
                                      </div>

                                    </div>
                                    {/* 4th  */}
                                     <div className='border border-white rounded-2xl'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-6xl font-[390] mb-25 font-poppins'>40</h2>
                                            <p className='font-[390] text-xl font-poppins'>Physical Hackerspaces</p>
                                      </div>

                                    </div>
                                    {/* 5th  */}
                                     <div className='border border-white rounded-2xl'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-6xl font-[390] mb-25 font-poppins'>8</h2>
                                            <p className='font-[390] text-xl font-poppins'>States</p>
                                      </div>

                                    </div>
                                      {/* 6th  */}
                                       <div className='border border-white rounded-2xl bg-[#FFFAF3]'>
                                      <div className='flex flex-col p-4'>
                                            <h2 className='text-4xl font-semibold mb-25 font-poppins text-black'>Want to join the Team ?</h2>
                                            <p className='font-[390] text-xl font-poppins text-[#FF6B6B]'>Contact us</p>
                                      </div>

                                    </div>
                                 </div>
                           </div>
                     </div>
                </div>
 
                  
                  {/* Sign up section */}
              <div id="signup-section" className='w-full mt-25 '>
                    <div className='md:max-w-[1550px] mx-auto md:px-0 px-5'>
                         <div className='flex flex-col md:flex-row items-center gap-5'>
                              {/* Left Side  sign up form */}
                              <div className='bg-[#EEE8DF] rounded-xl md:max-w-[750px] w-full'>
                                   <div className='pt-6 px-4'>
                                       <h2 className='font-poppins text-4xl font-[500] mb-15'>Sign up now!</h2>

                                       {/* Form  */}
                                       <form className='flex flex-col gap- mb-6'>
                                        <label className='text-sm font-poppins font-[390]'>Name* / Nom*</label>
                                        <input type="text" placeholder="Enter your name" className="p-3 text-sm font-poppins font-[390] border-b-1
                                         border-black hover:border-b-[#1A0AB3] focus:border-b-[#1A0AB3] transition-colors outline-none focus:outline-none mb-8"/>

                                         {/* Password */}
                                       <label className='text-sm font-poppins font-[390]'>Password* / Prénom*</label>
                                       <input type="text" placeholder="Enter your password" className="p-3 text-sm font-poppins font-[390] border-b-1
                                         border-black hover:border-b-[#1A0AB3] focus:border-b-[#1A0AB3] transition-colors outline-none focus:outline-none mb-8"/>

                                         {/* Telephone */}
                                       <label className='text-sm font-poppins font-[390]'>Telephone* / Numéro de téléphone*</label>
                                       <input type="text" placeholder="Enter your telephone number" className="p-3 text-sm font-poppins font-[390] border-b-1
                                         border-black hover:border-b-[#1A0AB3] focus:border-b-[#1A0AB3] transition-colors outline-none focus:outline-none mb-8"/>

                                         {/* Email */}
                                       <label className='text-sm font-poppins font-[390]'> E-mail*</label>
                                       <input type="text" placeholder="Enter your email" className="p-3 text-sm font-poppins font-[390] border-b-1
                                         border-black hover:border-b-[#1A0AB3] focus:border-b-[#1A0AB3] transition-colors outline-none focus:outline-none mb-8"/>
                                          {/* Button  */}
                                          <button type="submit" className='text-white bg-black font-poppins font-[400] px-10 py-3 w-40 rounded'>Submit</button>

                                       </form>
                                   </div>
                              </div>
                              {/* Right Side  */}
                              <div className='md:max-w-[750px] w-full rounded-xl bg-[#E60B14]'>
                                    <div className='py-14'>
                                        <img src={Signupimg} alt='about' className='w-full h-118 object-contain rounded-xl' />
                                    </div>
                              </div>
                         </div>
                    </div>
              </div>
    </section>
  )
}

export default about