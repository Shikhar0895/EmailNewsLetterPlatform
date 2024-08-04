"use server";

import { connectDb } from "@/app/shared/libs/db";
import Membership from "@/models/membership.model";
import { currentUser } from "@clerk/nextjs/server";

const getMembership = async () => {
  try {
    await connectDb();
    const user = await currentUser();
    console.log(user);
    const membershipData = await Membership.find({ user: user?.id });
    console.log(membershipData);

    return JSON.parse(JSON.stringify(membershipData));
  } catch (error) {
    console.log(error);
  }
};

const getMembership2 = async (user: string) => {
  try {
    await connectDb();
    // const user = await currentUser();
    console.log(user);
    const membershipData = await Membership.find({ user: user });
    console.log(membershipData);

    return JSON.parse(JSON.stringify(membershipData));
  } catch (error) {
    console.log(error);
  }
};

export { getMembership2, getMembership };
