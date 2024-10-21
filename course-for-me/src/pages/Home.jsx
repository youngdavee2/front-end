import React, {useState} from 'react'
import BgImage from '../assets/Background'
import { motion } from 'framer-motion'
import HtmlImage from '../assets/html'
import CssImage from '../assets/css'
import JavaImage from '../assets/Js'
import NodeImage from '../assets/node'
import HeroImage from '../assets/hero'
import Hero2Img from '../assets/SecHero'
import { Link } from 'react-router-dom'



const Home = () => {
    const [ChangeImg, setChangeImg] = useState(false)
    const [viewMore, setViewMore] = useState(false)
    const ToggleImg = () =>{
        setChangeImg(true)
    }
  return (
    <div>
      <section>
        <div className='relative w-full h-[100vh] flex items-center'>
          <img src={BgImage} alt="Background" className='absolute inset-0 h-full w-full object-cover' />
          <motion.div 
            className='relative z-10 bg-black/65 flex items-center justify-center flex-col gap-8 w-full h-full'
          >
            <div className='flex gap-4'>
              <img src={HtmlImage} alt="HTML" className='h-[70px] md:h-[90px]' />
              <img src={CssImage} alt="CSS" className='h-[70px] md:h-[90px]' />
              <img src={JavaImage} alt="JavaScript" className='h-[70px] md:h-[90px]' />
              <img src={NodeImage} alt="Node.js" className='h-[70px] md:h-[90px]' />
            </div>
            <span className='text-white text-3xl lg:text-5xl font-bold text-center px-4'>
              Join Our Front-End Web Development Course!
            </span>
            <span className='text-white p-2 text-center flex flex-col gap-3 lg:w-[700px] text-xl'>
              Are you ready to build beautiful, responsive websites from scratch? Our Front-End Web Development Course is designed for beginners and those looking to enhance their skills. You'll learn the essentials of HTML,
              <br /> CSS, and JavaScript, and dive into modern frameworks like React.js.
            </span>
          <Link to="/Payment"><button 
            className='border-2 border-white text-white p-3 hover:bg-white hover:text-black transition-colors duration-300 lg:w-[500px]'>
              Start Learning
            </button></Link>
            <div className='flex gap-4'>
              <img src={CssImage} alt="CSS" className='h-[70px] md:h-[90px]' />
              <img src={HtmlImage} alt="HTML" className='h-[70px] md:h-[90px]' />
            </div>
          </motion.div>
        </div>
      </section>
            <section>
<div class="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
     
    <div class="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div class="flex flex-col items-center justify-between lg:flex-row py-16">
            <div class=" relative ">
                <div class=" absolute top-0 -left-48 z-0  opacity-50 ">
                    <img src="https://popai-file.s3.ap-southeast-1.amazonaws.com/dalle3/f1e09610-e6d6-47d4-82b9-206bcf7a4417/03ec3d54-d406-4e86-bb0c-ad9a0673983b/tplImg698d809301d243ca8b5aea7a7d643af9" class="w-36 z-0  h-full    object-fill fill-y text-y"/>
                </div>
                <div class="lg:max-w-xl lg:pr-5 relative z-40">
                    <p class="flex text-sm uppercase text-g1  ">
                         
                        About Us
                    </p>
                    <h2 class="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                        We make you look
                        <span class="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">different</span>
                    </h2>
                    <p class="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque it. <br /> {viewMore && <span><strong>Why Our Course Stands Out</strong><br />

                    <strong>Expert Guidance:</strong>
                    - Learn directly from a seasoned web developer with years of experience. You get insider tips and real-world insights that you won't find in free tutorials.
                    <br />

                    <strong>Hands-On Projects:</strong>
                    - Instead of just reading or watching videos, you'll actually build websites. These projects help you practice and see your progress in real-time.
                    <br />
                    <strong>Structured Learning:</strong>
                    - No more guessing what to learn next. Our course takes you step-by-step, from the basics to advanced topics, ensuring you don't miss anything important.
                    <br />
                    <strong>Personal Support:</strong>
                    - Have questions or need help? Get direct support from the instructor and join a community of fellow learners who are there to help each other out.
                    <br />
                    <strong>Career Boost:</strong>
                    - Web development skills are in high demand. This course prepares you for job opportunities or to create your own projects, giving you a clear path to success.

                    <span className='text-orange-600 font-bold text-xl'>In short, our course provides expert guidance, practical experience, and personal support to help you become a skilled web developer quickly and effectively.</span></span> }</p>
                        {viewMore && <button
                        className='mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto'
                        onClick={()=>setViewMore(false)}
                        >show less</button>}
                        
                    <div class="mt-10 flex flex-col items-center md:flex-row">
                        {!viewMore && <button
                        onClick={()=>setViewMore(true)}
                        class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                            View More</button>}
                        <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-g1">Watch how
                            it works
                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
               
            </div>
            <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div class="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                     <img src="https://popai-file.s3.ap-southeast-1.amazonaws.com/dalle3/f1e09610-e6d6-47d4-82b9-206bcf7a4417/03ec3d54-d406-4e86-bb0c-ad9a0673983b/tplImg698d809301d243ca8b5aea7a7d643af9"/>
                </div>
            </div>
        </div>
    </div> 
    <div class="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
        About Us
    </div>
    <div class=" absolute -bottom-24 left-10 z-0  opacity-10 "> 
        <svg width="800px" height="800px" viewBox="0 0 24 24" class="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"></path>
        </svg>
    </div>
     
    <div class=" absolute -bottom-0 left-3/4 z-0  opacity-10 "> 
        <svg width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300">
            <path d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999" fill-rule="evenodd"></path>
        </svg>
    </div> 
    <div class=" absolute top-10 left-3/4 z-0  opacity-10 "> 
         
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300">
            <path d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z" fill-rule="evenodd"></path>
        </svg>
    </div> 
 
</div>




            </section>
      {/* ABOUT THE COURSE SECTION */}
<header class="bg-white dark:bg-gray-800">

    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class={`${ChangeImg ? 'bg-gray-300' : 'bg-blue-500' } w-3 h-3 mx-2 rounded-full md:mx-0 focus:outline-none`}
                onClick={()=>setChangeImg(false)}
                ></button>
                <button class={`${ChangeImg ? 'bg-blue-500': 'bg-gray-300'} w-3 h-3 mx-2  rounded-full md:mx-0 focus:outline-none hover:bg-blue-500`}
                onClick={ToggleImg}
                ></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                {ChangeImg ? <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                    The best front-end developer course</h1>: <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">We make you stand out in every way</h1>}

                {ChangeImg ? (<motion.p 
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration : 1.5}}
                class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</motion.p>) :(
                    <motion.p
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                transition={{duration : 1.5}}
                    >Unlock variety of computer skills that can instantly give you your dream Job</motion.p>
                ) }
                <div class="mt-6">
                </div>
            </div>
        </div>

        <motion.div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src={ChangeImg ? Hero2Img : HeroImage} alt="apple watch photo"/>
        </motion.div>
    </div>
</header>
    </div>
  )
}

export default Home
