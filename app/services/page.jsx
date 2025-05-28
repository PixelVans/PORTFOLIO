
'use client';


import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link'


const services = [
  { 
    num: '01',
    title: 'Web Development',
    description: 'Crafting modern and responsive websites tailored to your business needs.',
    href: ''
  },
  {
    num: '02',
    title: 'Data Entry/Extraction',
    description: 'Scraping websites and mining valuable data to empower your business with actionable insights.',
    href: ''
  },
  
  {
    num: '03',
    title: 'Automation',
    description: 'Developing intelligent bots and automation tools to streamline tasks, boost efficiency, and reduce manual work.',
    href: ''
  },
  
  {
    num: '04',
    title: 'Database Management',
    description: 'Designing, organizing, and maintaining efficient databases to ensure secure and reliable data storage and access.',
    href: ''
  }
  
];





const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1 ,
            transition: { delay:2.4, duration: 0.4, ease: 'easeIn'}
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col 
              justify-center gap-6 group'>

                {/* top */}
                <div className='w-full flex justify-between items-center'>

                  <div className='text-4xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}</div>
                  <Link
                    className='w-[45px] h-[45px]  bg-white 
                    group-hover:bg-accent transition-all duration-500 flex 
                    justify-center items-center hover:-rotate-45 rounded-full'
                    href={service.href}>
                    <BsArrowDownRight
                      className='text-primary text-3xl' />
                  </Link>
                </div>

                {/* title */}
                <h2 className='text-[37px] font-bold leading-none text-white 
                 group-hover:text-accent transition-all duration-500'>
                  {service.title}</h2>
                
                {/* description */}
                <p className='text-white/60'>
                  {service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>

              </div> 
            )
          })}
          
         </motion.div>
      </div>
    </section>
  )
}

export default Services 