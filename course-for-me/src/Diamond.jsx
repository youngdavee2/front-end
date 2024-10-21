import React from 'react'
import { motion } from 'framer-motion'

const Diamond = () => {
  return (
    <div className='bg-black  h-[100vh] flex items-center justify-center'>
        <div>
                <div className='flex absolute left-[150px]'>
                    <motion.div
                    initial={{scaleY: 0}}
                    animate={{scaleY: 1}}
                    transition={{delay:1.15, duration: 3.5, repeat: Infinity}}
            className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'
            ></motion.div>
            <motion.div 
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            transition={{delay:1.15, duration: 3, repeat: Infinity}}
            className='h-[80px] w-[15px] bg-green-600'></motion.div>
            
            <motion.div
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            transition={{delay:1.15, duration: 3, repeat: Infinity}}
             className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'></motion.div>
            <motion.div
            className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'></motion.div>
            <motion.div
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            transition={{delay:1.15, duration: 3, repeat: Infinity}}
            className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'></motion.div>
            <motion.div
             className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'
            ></motion.div>
            <motion.div
             className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'
            ></motion.div>
            <motion.div
             className='h-[60px] w-[60px] rounded-full border-t-4 border-green-600'
            ></motion.div>
        </div>
      <motion.div
      className=' flex gap-4'
      initial={{opacity: 0, scale: 0, y:-200}}
      whileInView={{opacity: 1, scale: 2, y: 0}}
      transition={{delay:1.15, duration: 3, repeat: Infinity}}
      >
        {/* flowers */}

        <div className='text-white text-5xl font-bold'>
            <motion.span
            initial={{textshadow: '0 0 10px #00f,%200%200%2020px%20#00f,%200%200%2030px%20#00f,%200%200%2040px%20#00f'}}
            animate ={{  
             textShadow: [
                '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f',
                '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00',
                '0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000',
                '0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff',
                '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f'
              ]
             }}
            >D</motion.span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>I</span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>A</span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>M</span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>E</span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>E</span>
        </div>
        <div className='text-white text-5xl font-bold'>
            <span>E</span>
        </div>
      </motion.div>

</div>
    </div>
  )
}

export default Diamond
