'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import { toast } from 'react-toastify';

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
];

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for button

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm('service_ny2amna', 'template_ku2uc7l', form.current, 'oiK72QBsDA5cTM45w', {
      })
      .then(
        () => {
          toast.success('Your message has been sent to PixelVans!');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setService('');
          setMessage('');
          setLoading(false); // Stop loading
        },
        (error) => {
          toast.error('Failed to send your message. Please try again later.');
          console.log('FAILED...', error.text);
          setLoading(false); // Stop loading
        },
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: easeIn } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form} onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Whether you have a project in mind or need some advice,
                I'm here to help bring your ideas to life.
                Let's create something amazing together!
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='text' placeholder='First name' value={firstName} name='first_name' onChange={(e) => setFirstName(e.target.value)} />
                <Input type='text' placeholder='Last name' value={lastName} name='last_name' onChange={(e) => setLastName(e.target.value)} />
                <Input type='email' placeholder='Email address' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                <Input type='tel' placeholder='Phone number' value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} />
              </div>

              {/* select */}
              <Select name='service' value={service} onValueChange={setService}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem name='web' value='Web Development'>Web Development</SelectItem>
                    <SelectItem name='logo' value='Logo Design'>Logo Design</SelectItem>
                    <SelectItem name='blog' value='Blogging services'>Blogging services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea className='h-[200px]' placeholder='Type your message here' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />

              {/* submit button */}
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
