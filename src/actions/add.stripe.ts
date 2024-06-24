/*
Invokes at : Provider
input: nothing,
output: nothing,

contract: 
      "finds the currently logged user in membership collection \n",
      "if membership doesn't exist, it creates stripe customer \n",
      "as a response then it creates a membership record in db \n"
    );

*/

"use server";

import { connectDb } from "@/app/shared/libs/db";
import Membership from "@/models/membership.model";

import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

export const addStripe = async () => {
  try {
    await connectDb();

    const user = await currentUser();

    const membership = await Membership.findOne({ user: user?.id! });

    if (membership) {
      return;
    } else {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2024-04-10",
      });

      await stripe.customers
        .create({
          email: user?.emailAddresses[0].emailAddress,
          name: user?.username,
        })
        .then(async (customer) => {
          await Membership.create({
            user: user?.id,
            stripeCustomerId: customer.id,
            plan: "LAUNCH",
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
};
