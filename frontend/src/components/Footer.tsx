import fb from '../assets/social/facebook.png'
import twitter from '../assets/social/xx.png'
import linkedin from '../assets/social/linked.png'

const Footer = () => {
  return (
    <section className='w-full bg-[#FFFAF3] font-poppins my-10'>
     <div className='bg-[#0F0F0F] px-10 py-10 md:py-15 flex flex-col   text-white md:max-w-[1600px] mx-auto md:rounded-lg'>
       <div className='flex md:flex-row flex-col justify-between gap-5 md:items-center pb-15 md:pb-25 border-b border-[#FFFAF3]'>
        {/* left-side */}
        <div className='flex flex-col md:items-center md:items-start gap-2'>
          <h1 className='mdtext-[15px] text-[14px] font-[500]'>WED DEVELOPER</h1>
          <p className='text-sm mt-2'>+234 902 849 5703</p>
          <p className='text-sm mt-2'>getlitgotlit@gmail.com</p>
       </div>

        {/* center */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-[15px] font-[500]'>QUICK LINKS</h1>
           <a href='/hackerspace' > <p className='text-sm mt-2'>hackerspace</p> </a> 
            <a href='/blog' > <p className='text-sm mt-2'>blog</p> </a>   
        </div>
        {/* right-side */}
         <div className='flex flex-col gap-2'>
          <h1 className='text-[15px] font-[500]'>About</h1>
           <p className='text-sm mt-2'>Careers</p>
           <p className='text-sm mt-2'>Privacy Policy</p>
         </div>
       </div>
       {/*  socials */}
       <div className='mt-5  flex flex-row gap-5'>
     <a href=''> <img src={fb} alt='facebook' className='w-6 h-6 cursor-pointer' /> </a>
        <a href='https://twitter.com/kingdrake0'> <img src={twitter} alt='twitter' className='w-6 h-6 cursor-pointer' /> </a>
       
        <a href='https://linkedin.com/in/your-profile'> <img src={linkedin} alt='linkedin' className='w-6 h-6 cursor-pointer' /> </a>
        <a href="https://github.com/agent-0070" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
       </div>
       <div className='mt-10 '>
        <p className='md:text-[16px] text-[13px] font-[550]'>&copy; 2025 WED DEVELOPER. All rights reserved.</p>
       </div>
     </div>
    </section>
  )
}

export default Footer