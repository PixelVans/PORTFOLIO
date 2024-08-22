'use client'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
 } from "@/components/ui/select"


import {
  FaPhoneAlt,
   FaEnvelope,
  FaMapMarkerAlt,
   
} from "react-icons/fa"
  


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+254) 101 897 909'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'vanscrew39@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Nairobi 254'
  },

]

import {easeIn, motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: easeIn}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p
                className="text-white/60">Whether you have a project in mind or need some advice,
                I'm here to help bring your ideas to life.
                Let's create something amazing together!
              </p>
              
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder='First name'/>
                <Input type='lastname' placeholder='Last name'/>
                <Input type='email' placeholder='Email address'/>
                <Input type='phone' placeholder='Phone number'/>
              </div>
           
            {/* select */}
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a service'/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value='wd'>Web Development</SelectItem>
                  <SelectItem value='lgd'>Logo Design</SelectItem>
                  <SelectItem value='blg'>Blogging services</SelectItem>
                 
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* textarea */}
            <Textarea className='h-[200px]'
            placeholder='Type your message here'/>
           
              {/* form */}
              <Button>Send Message</Button>

            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 
          xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{ item.title}</p>
                      <h3 className="text-xl">{ item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
           </div>
          </div>
      </div>
    </motion.section>
  ) 
}

export default Contact 