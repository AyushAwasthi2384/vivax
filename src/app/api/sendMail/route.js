
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../../utils/mailer";


export async function POST(request) {
  try {
    const reqBody = await request.json();

    const { name, email, phone, projectType, projectDetails } = reqBody;

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: "vivaxmarketers@gmail.com", // replace with recipient email
      subject: 'New Project Query',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Project Query</h2>
          <p>Dear Team,</p>
          <p>We have received a new project inquiry with the following details:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Project Details:</strong> ${projectDetails}</p>
          <p>The client is interested in discussing their project further and is looking forward to our prompt response. They have mentioned the importance of timely delivery and high-quality service in their requirements. Please get in touch with them at your earliest convenience to provide more details and discuss the next steps.</p>
          <p>Thank you,</p>
          <p>Vivax</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);


    return NextResponse.json({
      message:"Mail sent successfully.",
      status:200
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Error sending mail",
      error: err.message,
    }, { status: 500 });
  }
}
