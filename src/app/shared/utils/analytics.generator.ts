import Subscriber from "@/models/subscriber.model";
import { currentUser } from "@clerk/nextjs/server";
import { Document, Model } from "mongoose";

interface MonthData {
  month: string;
  count: number;
}

export async function generateAnalyticsData<T extends Document>(
  model: Model<T>
): Promise<{ last7Months: MonthData[] }> {
  const last7Months: MonthData[] = [];

  const user = await currentUser();
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 6; i >= 0; i--) {
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - i * 28
    );
    const startDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 28
    );

    const monthYear = endDate.toLocaleDateString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const count = await Subscriber.find({
      newsLetterOwnerId: user?.id,
    }).countDocuments({
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    last7Months.push({ month: monthYear, count });
  }

  return { last7Months };
}
