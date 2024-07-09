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

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-04-10",
    });
    const membership = await Membership.findOne({ user: user?.id! });
    const stripeCustomerList = await stripe.customers.list({ limit: 100 });

    const stripeCustomer = stripeCustomerList.data.find(
      (cust) =>
        cust.name === user?.username &&
        cust.email === user?.emailAddresses[0].emailAddress
    );

    if (user === null || stripeCustomer !== undefined) return;
    else {
      await stripe.customers
        .create({
          email: user?.emailAddresses[0].emailAddress,
          name: user?.username!,
        })
        .then(async (customer) => {
          if (membership) return;
          await Membership.create({
            user: user?.id, //clerk user id
            email: user?.emailAddresses[0].emailAddress,
            stripeCustomerId: customer.id,
            plan: "LAUNCH",
          });
        });
    }
  } catch (error) {
    console.log("error from addStripe", error);
  }
};
