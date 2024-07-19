"use server";

import { connectDb } from "@/app/shared/libs/db";
import Email from "@/models/email.model";
import { currentUser } from "@clerk/nextjs/server";

export default async function deleteAllMails() {
  try {
    const user = await currentUser();
    await connectDb();
    await Email.deleteMany({ newsLetterOwnerId: user?.id });
    return { Message: "All draft mails deleted" };
  } catch (error) {
    console.log(`Error from deleteAllMail action: ${error}`);
  }
}
