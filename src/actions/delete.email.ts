"use server";

import { connectDb } from "@/app/shared/libs/db";
import Email from "@/models/email.model";

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
  try {
    await connectDb();
    await Email.findByIdAndDelete(emailId);
    return { message: "Email deleted successfully" };
  } catch (error) {
    return { error: "An error occured while saving the email" };
  }
};
