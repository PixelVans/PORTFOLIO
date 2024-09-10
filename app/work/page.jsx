// 'use client'

// import { motion } from 'framer-motion';
// import { useState } from 'react'

// import 'swiper/css'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip'

// import Link from 'next/link'
// import Image from 'next/image'
// import WorkSliderBtns from '@/components/WorkSliderBtns';
 
// const projects = [
//   {
//     num: '01',
//     category: 'frontend',
//     title: 'project 1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
//     stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
//     Image: '/assets/web.jpg',
//     live: 'https://vans-estate.onrender.com/',
//     github: '',
  
//   },
//   {
//     num: '02',
//     category: 'fullstack',
//     title: 'project 2',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque tenetur',
//     stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
//     Image: '/assets/real estate.jpg',
//     live: 'https://vans-estate.onrender.com/',
//     github: '',
  
//   },
// ]



// const Work = () => {
//   const [project, setProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projects[currentIndex])
//   }
  
//   return (
//     <motion.section
      
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: 'easeIn'} }}
//     className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:flex-row gap-[30px]'>
//           <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
//         xl:justify-between order-2 xl:order-none'>
          
//             <div className='flex flex-col gap-[30px] h-[50%]'>
//               <div
//                 className='text-8xl leading-none font-extrabold
//                 text-transparent text-outline'>{project.num}
//               </div>

//               {/* project category */}
//               <h2 className='text-[42px] font-bold leading-none text-white
//                group-hover:text-accent transition-all duration-500 capitalize'>
//                 {project.category} project</h2>
              
//               {/* project description */}
//               <p className='text-white/60'>{ project.description}</p>
              
//               {/* stack */}
//               <ul className='flex gap-4'>
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li
//                     className='text-xl text-accent'
//                       key={index}>
//                       {item.name}
//                       {index !== project.stack.length - 1 && ','}
//                     </li>
//                   )
//                 })}
//               </ul>

//               {/* border */}
//               <div className='border border-white/20'></div>
//               {/* buttons */}
//               <div className='flex items-center gap-4 '>

//                 {/* project live */}
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[70px] h-[70px] rounded-full
//                       bg-white/5 flex justify-center items-center group'>
                       
//                         <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                        <p>Live project</p>
//                       </TooltipContent>
//                    </Tooltip>
//                   </TooltipProvider>
//                 </Link>


//                 <Link href={project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[70px] h-[70px] rounded-full
//                       bg-white/5 flex justify-center items-center group'>
                       
//                         <BsGithub className='text-white text-3xl group-hover:text-accent'/>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                        <p>Github repository</p>
//                       </TooltipContent>
//                    </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//         </div>
//           <div className='w-full xl:w-[50%]'>
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className='xl:h-[520px] mb-12'
//             onSlideChange={handleSlideChange}>
//               {projects.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index}
//                     className='w-full'>
//                     <div className='h-[460px] relative group flex justify-center
//                     items-center bg-pink-50/20'>
//                       {/* overlay */}
//                       <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
//                       {/* image */}
//                       <div className='relative w-full h-full'>
//                         <Image
//                           alt=''
//                            fill
//                           src={project.Image} />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 )
//               })}

//               <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
//               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
//                 btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
//               h-[44px] flex justify-center items-center transition-all'/>
//             </Swiper>
//         </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// export default Work













'use client'

import { motion } from 'framer-motion';
import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Autovault1',
    description: 'A full-stack project developed using React, Vite, Tailwind CSS, Material-UI, Redux, and Node.js.'
    ,
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    Image: '/assets/autovolt.jpg',
    live: 'https://autovault1.onrender.com/',
    github: '',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'VansEstate',
    description: 'A full-stack real estate application developed using React, Redux, Vite, and Node.js. This project includes features such as dynamic property listings, user authentication, and a responsive design. It uses Redux for state management and Vite for fast builds and optimized performance.',
    stack: [{ name: 'React' }, { name: 'Redux' }, { name: 'Vite' }, { name: 'Node.js' }],
    Image: '/assets/estate.jpg',
    live: 'https://vans-estate.onrender.com/',
    github: '',
  },
  
  {
    num: '03',
    category: 'frontend',
    title: 'Pixelwear',
    description: 'E-commerce app for a clothing company',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
    Image: '/assets/pixelwear.jpg',
     live: 'https://pixelwear333.vercel.app/',
   
    github: '',
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'project 3',
    description: 'sketch project, big screens only',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
    Image: '/assets/books.jpg',
     live: 'https://vanslibrary.onrender.com/',
    github: '',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col 
        xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div
                className='text-5xl sm:text-8xl leading-none font-extrabold 
                text-transparent text-outline'>{project.num}
              </div>

              {/* project category */}
              <h2 className='text-[23px] sm:text-[42px] font-bold leading-none text-white 
               group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project</h2>
              
              {/* project description */}
              <p className='text-white/60 text-sm sm:text-lg'>{ project.description}</p>
              
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li
                      className='text-[17px] sm:text-xl text-accent'
                      key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4 '>
                {/* project live */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-xl sm:text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                   </Tooltip>
                  </TooltipProvider>
                </a>

                {/* project github */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-xl sm:text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                   </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => { 
                return (
                  <SwiperSlide key={index}
                    className='w-full'>
                    <div className='h-[250px] sm:h-[420px] sm:mt-[30px] relative group flex justify-center 
                    items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-[250px] sm:h-full'>
                        <Image
                          alt=''
                          fill
                          src={project.Image} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] 
              h-[44px] flex justify-center items-center transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
