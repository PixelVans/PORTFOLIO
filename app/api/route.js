// // app/api/route.js
// import nodemailer from 'nodemailer';
// import 'dotenv/config';

// export async function POST(request) {
//   const { firstName, lastName, email, phone, service, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'evansmemba333@gmail.com',
//     subject: 'Contact Form Submission',
//     text: `
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Email: ${email}
//       Phone: ${phone}
//       Service: ${service}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response('Message sent successfully', { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response('Failed to send message', { status: 500 });
//   }
// }





