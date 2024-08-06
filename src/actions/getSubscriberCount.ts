"use server";
import { connectDb } from "@/app/shared/libs/db";
import Subscriber from "@/models/subscriber.model";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const getSubscriberCount = async () => {
  const user = await currentUser();
  console.log("🚀 ~ getSubscriberCount ~ user:", user);

  try {
    await connectDb();
    const subscribers = await Subscriber.find({
      newsLetterOwnerId: user?.id,
    });
    console.log("🚀 ~ getSubscriberCount ~ subscribers:", subscribers);

    const count = await Subscriber.find({
      newsLetterOwnerId: user?.id,
    }).countDocuments({
      createdAt: {
        $gte: "2024-07-10T18:30:00.000Z",
        $lt: "2024-08-07T18:30:00.000Z",
      },
    });
    console.log(`No of subscribers:${count}`);
    return count;
  } catch (error) {
    console.log(error);
  }
};
export default getSubscriberCount;
