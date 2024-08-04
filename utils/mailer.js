<<<<<<< HEAD
"use server";
=======

>>>>>>> 46ea95dbeb363031bcbe2dda7b107310979ee4da
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  },
});
console.log(transporter);

<<<<<<< HEAD
export { transporter };
=======
// console.log(transporter);

export { transporter }
>>>>>>> 46ea95dbeb363031bcbe2dda7b107310979ee4da
