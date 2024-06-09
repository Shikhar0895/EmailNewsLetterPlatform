"use server";

import { connectDb } from "@/app/shared/libs/db";
import Email from "@/models/email.model";

export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({ title, newsLetterOwnerId }).lean();
    console.log(typeof email);
    return email;
  } catch (error) {
    console.log(error);
  }
};
