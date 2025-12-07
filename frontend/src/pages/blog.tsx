import heroblog from '../assets/img/blogimg.png'
import designing from '../assets/img/designin.png'
import twitter from '../assets/img/twitter.png'
import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mail.png'
import news1 from '../assets/img/lastestnew.jpg'
import arrowd from '../assets/img/arrowd.png'
import news2 from '../assets/img/latestnew2.jpg'
import news3 from '../assets/img/latestnew3.jpg'
import news4 from '../assets/img/latestnew4.jpg'
import news5 from '../assets/img/latestnew5.png'
import news6 from '../assets/img/latestnew6.jpg'

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

       {/* News Sections */}
     <section className='md:max-w-[1550px] mx-auto px-5 md:px-0 mt-10 bg-black rounded-lg mb-10'>
               <div className='md:p-15 p-5'>
                    <h2 className='text-white text-[25px] font-[500]'>LATEST IN TECH</h2>

                    {/* News Grids */}
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 mb-10'>
                          {/* card 1 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news1} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>5 Things You Need to Know about the First-Ever OpenAI DevDay 2023</h3>
                                     <p className='font-[390]'>November 8, 2023</p>
                                     <p className='font-[390]'>From building your own GPT, to GPT store, GPT-4 Turbo and assistants API. Here’s 
                                      everything you need to know about the OpenAI DevDay 2023.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
                                      </div>
                                 </div>
                              </div>
                          </div>
                          {/* card 2 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news2} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>How does AI work in Photoshop?</h3>
                                     <p className='font-[390]'>September 5, 2023</p>
                                     <p className='font-[390]'>Let’s take a look at the latest trend in graphic design—Photoshop’s AI generative fill. 
                                      This powerful function lets you easily fill, edit, and erase image elements with a mere few clicks.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
                                      </div>
                                 </div>
                              </div>
                          </div>
                          {/* card 3 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news3} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>Meta Monopoly: A New Era of Social Media Dominance</h3>
                                     <p className='font-[390]'>July 17, 2023</p>
                                     <p className='font-[390]'>Meta’s monopoly in social media raises concerns about data privacy, 
                                      user choice, innovation, and competition, emphasizing the need for regulatory measures and user 
                                      empowerment to ensure a balanced and diverse digital environment.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
                                      </div>
                                 </div>
                              </div>
                          </div>
                          {/* card 4 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news4} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>Have you heard of Ai-Da, the first robot artist in the world?</h3>
                                     <p className='font-[390]'>August 5, 2022</p>
                                     <p className='font-[390]'>Ai-Da has quickly become a “fashionable artist” whose paintings are 
                                      snatched up on the markets and are shown in some of the largest galleries in the world. But Ai-Da is not human, it’s a tasty mix of A.I. and robotics.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
                                      </div>
                                 </div>
                              </div>
                          </div>
                          {/* card 5 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news5} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>Satoshi Island: The new land of Blockchain?</h3>
                                     <p className='font-[390]'>August 4, 2022</p>
                                     <p className='font-[390]'>Satoshi Island will be the 1st real case study where an entire economy will be based on the blockchain. 
                                      All economic transactions will use cryptocurrency and even the property certificates will be NFTs.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
                                      </div>
                                 </div>
                              </div>
                          </div>
                          {/* card 6 */}
                          <div className='bg-[#13171B] rounded-lg text-white font-poppins'>
                              <div className='p-3'>
                                 <div className='w-full h-auto'>
                                     <img src={news6} alt='image' className='w-full h-auto rounded-lg object-cover'/>
                                 </div>
                                 <div className='flex flex-col gap-4 mt-5'>
                                     <h3 className='text-ssm font-[490]'>Quel avenir pour la blokchain en Tunisie?</h3>
                                     <p className='font-[390]'>May 12, 2021</p>
                                     <p className='font-[390]'>Il y a une semaine, un jeune tunisien de 17 ans a été arrêté pour avoir utilisé de la cryptomonnaie dans le cadre d’une activité en ligne et a été accusé de 
                                      blanchiment d’argent. Cette affaire pose sérieusement la question de l’avenir de la Blockchain en Tunisie.</p>

                                      <div className='flex flex-row gap-2 items-center mt-3 cursor-pointer mb-5 underline '>
                                        <p className='font-[420]'>READ MORE</p>
                                        <span>
                                          <img src={arrowd} alt='arrow' className='w-3 h-3 mt-1 invert' />
                                        </span>
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

export default blog