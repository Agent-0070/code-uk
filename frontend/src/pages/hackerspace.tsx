import { Link } from 'react-router-dom';
import Layer from '../assets/img/layer.png'
import map from '../assets/img/mapmap.png'
import place1 from '../assets/img/space1.png'
import place2 from '../assets/img/space2.png'
import place3 from '../assets/img/space3.png'
import place4 from '../assets/img/space4.png'
import Signupimg from '../assets/img/spacesign.jpg'

const hackerspace = () => {
  const scrollToSignup = (e: any) => {
    e.preventDefault()
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className='w-full bg-[#FFFAF3]'>
        <section className='md:max-w-[1550px] mx-auto mt- md:px-0 px-5'>
               <div className='bg-[#EEE8DF] md:rounded-xl '>
                       <div className='flex flex-col md:flex-row justify-between items-center md:px-15 px-5 pt-10 md:pt-12 md:pb-10 gap-6'>
                                {/* Left Side - Text */}
                                <div className='flex flex-col gap-6 md:max-w-[700px]'>
                                       <h2 className='md:text-5xl text-[25px] font-poppins  font-[500] mb-2'>Connect with Africa's vibrant tech community at our hackerspaces!</h2>
                                       <p className='font-poppins md:text-[16px] text-[14px]'>Our hackerspaces are located in 40+ cities across Africa, ready to welcome you to a friendly and 
                                        collaborative environment equipped with the latest technologies.
                                         Come work on your projects, and attend exclusive events, workshops, and conferences led by industry experts.</p>

                                         <p className='font-poppins md:text-[16px] text-[14px]'>Sign up now to broaden your skills, expand your network, and advance your career.</p>
                                         
                                          {/* BUtton sign up */}
                                  <div className=''>
                                <Link to="/" onClick={scrollToSignup} className='text-white bg-[#E60B14] font-poppins md:px-9 md:py-4 px-5 py-3 rounded'>Sign Up</Link>
                                 </div>
                                </div>
                                {/* Right Side - Image */}
                                <div className='md:max-w-[500px]'>
                                  <div className='w-full h-full md:mr-25'>
                                    <img src={Layer} alt='image' className='w-full h-auto object-cover ' />
                                  </div>

                                </div>
                       </div>
               </div>
        </section>

        {/*  Place grids */}
        <section className='m-15 md:max-w-[1450px] mx-auto md:px-0 px-10'>
          <div className='mb-10'>
            <h2 className='text-3xl font-poppins font-[500]'>Explore Our Hackerspace</h2>
          </div>

          {/* Grid of places */}
          <div className='flex flex-col md:flex-row gap-30'>
            {/* large screen  */}
              <div className='md:max-w-[500px] hidden md:block'>
                  <div className='w-full h-full'>
                    <img src={map} alt='image' className='w-full h-auto object-cover ' />
                  </div>
              </div>
               {/* Left side grid on large screen */}
          <div className='md:max-w-[800px] max-w-[500px] mx-auto'>
               <div className='grid md:grid-cols-3 grid-cols-1 md:gap-15 gap-10'>
                   {/* place 1 */}
                   <div className='flex flex-col'>
                    <div>
                      <img src={place1} alt='image' className='w-full h-auto object-cover ' />
                    </div>
                    <div className='mt-6'>
                      <h2 className='font-[500]'>Ikeja Hackerspace</h2>
                    </div>
                   </div>
                    {/* place 2 */}
                     <div className='flex flex-col'>
                    <div>
                      <img src={place2} alt='image' className='w-full h-auto object-cover ' />
                    </div>
                    <div className='mt-6'>
                      <h2 className='font-[500]'>Ibadan Hackerspace</h2>
                    </div>
                   </div>
                    {/* place 3 */}
                     <div className='flex flex-col'>
                    <div>
                      <img src={place3} alt='image' className='w-full h-auto object-cover ' />
                    </div>
                    <div className='mt-6'>
                      <h2 className='font-[500]'>Port Harcourt Hackerspace</h2>
                    </div>
                   </div>
                    {/* place 4 */}
                     <div className='flex flex-col'>
                    <div>
                      <img src={place4} alt='image' className='w-full h-auto object-cover ' />
                    </div>
                    <div className='mt-6'>
                      <h2 className='font-[500]'>Abuja Hackerspace</h2>
                    </div>
                   </div>
               </div>
          </div>
          </div>
         
        </section>

             {/* Sign up section */}
              <div id="signup-section" className='w-full mt-25 '>
                    <div className='md:max-w-[1550px] mx-auto md:px-0 px-5'>
                         <div className='flex flex-col md:flex-row items-center gap-5'>
                              {/* Left Side  sign up form */}
                              <div className='bg-[#EEE8DF] rounded-xl md:max-w-[750px] w-full'>
                                   <div className='pt-10 px-4 md:pb-105 md-60' >
                                      

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
                              <div className='md:max-w-[750px] w-full'>
                                    <div className='w-full h-full '>
                                        <img src={Signupimg} alt='about' className='w-full h-auto object-contain rounded-xl' />
                                    </div>
                              </div>
                         </div>
                    </div>
              </div>
    </section>
  )
}

export default hackerspace