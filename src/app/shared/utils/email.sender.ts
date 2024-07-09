"use server";
// import { useUser } from "@clerk/nextjs";
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
  adminMail: string;
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-north-1",
});

AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack);
  }
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// const { user } = useUser();
// const adminMail = user?.emailAddresses[0].emailAddress; //this needs to be dynamic "shikhar0895@gmail.com"
// console.log(user?.emailAddresses[0].emailAddress);
// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendEmail = async ({
  adminMail,
  userEmail,
  subject,
  content,
}: Props) => {
  try {
    // console.log("adminMail ------->>>", adminMail);
    const response = await transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject: subject,
      html: content,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
