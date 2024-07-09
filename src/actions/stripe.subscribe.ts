/*
invokes at : get strated button on pricing card
checks if the current user is present in membership db \n", 
"tries to create a checkout session using userId from membership record \n", 
"if checkout session is creted successfully , it returns a url"
url is then pushed to history which redirects it to checkout page

*/

"use server";

import { connectDb } from "@/app/shared/libs/db";
import Membership from "@/models/membership.model";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export const stripeSubscribe = async ({
  priceId,
  userId,
}: {
  priceId: string;
  userId: string;
}) => {
  try {
    await connectDb();
    console.log(priceId);
    const user = await Membership.findOne({ user: userId });
    console.log(user);

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: user.stripeCustomerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/success",
      cancel_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/error",
      subscription_data: {
        metadata: {
          payingUserId: userId,
        },
      },
    });

    if (!checkoutSession.url) {
      return {
        message: "Could not create checkout session!",
      };
    }
    return checkoutSession.url;
  } catch (error) {
    console.log("error from stripe subscribe", error);
  }
};
