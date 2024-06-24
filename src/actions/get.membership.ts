"use server";

import { connectDb } from "@/app/shared/libs/db";
import Membership from "@/models/membership.model";
import { currentUser } from "@clerk/nextjs/server";

export const getMembership = async () => {
  try {
    await connectDb();
    const user = await currentUser();
    const membershipData = await Membership.find({ user: user?.id });
    console.log(membershipData);
    return membershipData;
  } catch (error) {
    console.log(error);
  }
};
