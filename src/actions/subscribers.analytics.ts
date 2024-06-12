"use server";

import { generateAnalyticsData } from "@/app/shared/utils/analytics.generator";
import Subscriber from "@/models/subscriber.model";

export const subscribersAnalytics = async () => {
  try {
    const subscribers = await generateAnalyticsData(Subscriber);
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
