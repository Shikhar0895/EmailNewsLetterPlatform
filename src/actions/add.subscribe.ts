"use server";
import { connectDb } from "@/app/shared/libs/db";
import { validateEmail } from "@/app/shared/utils/Zerobounce.Api";
import Subscriber from "@/models/subscriber.model";
import { clerkClient } from "@clerk/nextjs/server";
import { Console, error } from "console";
export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    console.log("add Subscribe running");
    await connectDb();
    //we need to check if particular user has already subscribed to the newsletter , if not subscribed only then it can subscribe to the newsletter
    const allUsers = await clerkClient.users.getUserList();
    // now we need to find our newsletter owner
    const newsLetterOwner = allUsers.data.find((i) => i.username === username);
    if (!newsLetterOwner) {
      throw new Error("Username not valid");
    }
    //    check if subscribers already exist
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
    });
    console.log("isSubscriberExist", isSubscriberExist);
    if (isSubscriberExist) {
      return { error: "Email already exists!" };
    }
    // validate email
    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid") {
      return { error: "Email not valid!" };
    }
    // if email is valid then create a newsubscriber using model Subscriber
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
      source: "ByShikharS",
      status: "Subscribed",
    });
    console.log(subscriber);
    return JSON.stringify(subscriber);
  } catch (error) {
    console.error(error);
    return { error: "An error occured while subscribing" };
  }
};
