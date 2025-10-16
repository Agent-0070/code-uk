import heroblog from '../assets/img/blogimg.png'
import designing from '../assets/img/designin.png'
import twitter from '../assets/img/twitter.png'
import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mail.png'

const blog = () => {
  return (
    <section className='w-full bg-[#FFFAF3]'>
            {/* first section */}
       <section className='md:max-w-[1550px] mx-auto px-5 md:px-0 bg-[#0F0F0F] md:rounded-lg'>
            <div className='flex flex-col md:flex-row items-center gap-10 md:pt-10 pt-10 md:px-15' >
              {/* left side */}
              <div className='md:max-w-[800px] text-white'>
                   <div className='flex flex-col gap-6 md:-mt-60'>
                      <div className=''>
                        <h2 className='font-poppins text-3xl md:text-7xl font-[580] mb-10'>Stay up-to-date with MYTECH!</h2>
                        <div className='md:max-w-[700px] text-ssm font-poppins'>
                          <p className='font-[390] font-poppins'>Discover the latest tech trends and join our community of innovators on GOMYTECH. From expert 
                          insights to insider stories, our blog offers a unique perspective on the fast-paced world of technology.
                           Stay current with the latest trends, 
                          learn from industry leaders, and connect with like-minded individuals who share your passion for tech.</p>
                          <div className='mt-6 w-full'>
                            <input
                              type='text'
                              placeholder='Search...'
                              className='px-4 py-3 rounded-lg font-poppins focus:outline-none text-white w-full border border-white bg-transparent'
                            />
                           
                          </div>
                        </div>

                      </div>
                   </div>
              </div>

              {/* right side */}
              <div className='md:max-w-[600px]'>
                    <div className=''>
                         <img
                           src={heroblog}
                           alt='image'
                           className='w-full md:w-[600px] md:h-[670px] h-[500px] object-cover'
                         />
                    </div>
              </div>
            </div>
       </section>

       {/* designing section */}
       <section className='md:max-w-[1550px] mx-auto px-5 md:px-0 mt-10 '>
           <div className='flex flex-col md:flex-row gap-5'>
                {/* left side */}
                <div className='md:max-w-[800px]'>
                   <div className=''>
                    <img src={designing} alt='image' className='object-cover h-auto w-full rounded-lg' />
                   </div>
                </div>

                {/* right side */}
                <div className='md:max-w-[800px] bg-[#EEE8DF] rounded-lg'>
                    <div className='flex flex-col gap-5 px-5 pt-10'>
                      <h2 className='text-2xl font-[400] font-poppins'>Designing for Print vs Designing for Digital</h2>
                      <p className='font-poppins font-[390]'>Designing for print and designing for digital require different approaches and considerations.
                         Understand the key differences between the two and learn how to create effective designs for each medium.</p>
                         <div className='flex justify-between items-center'>
                          <span className='border-2 border-black px-4 py-2 rounded-lg'>Read more</span>

                          {/* social media icons */}
                             <div className='flex flex-row gap-6'>
                              <img src={twitter} alt='twitter' className='w-6 h-6'/>
                              <img src={linkedin} alt='linkedin' className='w-6 h-6'/>
                              <img src={mail} alt='Mail' className='w-6 h-6'/>
                             </div>
                         </div>
                    </div>
                </div>
           </div>
       </section>
    </section>
  )
}

export default blog