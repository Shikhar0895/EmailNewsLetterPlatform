"use server";
import { connectDb } from "@/app/shared/libs/db";
import { stripe } from "@/app/shared/utils/helperFunc";
import Membership from "@/models/membership.model";
import { currentUser } from "@clerk/nextjs/server";

export default async function upgradeSubscription() {
  const user = await currentUser();

  const customer = await stripe.customers.search({
    query: `email:"${user?.emailAddresses[0].emailAddress}"`,
  });
  const paymentIntent = await stripe.subscriptions.list({
    customer: customer?.data[0].id,
  });
  try {
    await connectDb();
    //to be run only if transaction is successfull
    // console.log("stripeCustomerId:", customer.data[0].id);
    const membershipToUpdate = await Membership.find({
      user: user?.id,
      stripeCustomerId: customer?.data[0].id,
    });
    console.log("paymentIntent:", paymentIntent);
  } catch (error) {
    console.error("error from upgradeSubscription", error);
  }
}
