'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className="relative w-[290px] h-[290px] xl:w-[500px] xl:h-[500px] flex items-center justify-center"
      >
        {/* Rotating Circle */}
        <motion.svg
          className="absolute w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="230"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0 ' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>

        {/* Centered Image with Background Blending */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="absolute w-[95%] h-[95%] flex items-center justify-center mix-blend-lighten"
        >
          <Image
            src="/assets/pfp.png"
            priority
            quality={100}
            fill
            alt="profile picture"
            className="object-contain p-[20px] xl:p-[30px] ml-3 sm:ml-4 lg:ml-5  xl:mt-[-40px] md:mt-[-20px] mt-[-20px]"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
