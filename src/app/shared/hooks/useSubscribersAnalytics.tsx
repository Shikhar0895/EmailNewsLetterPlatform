"use client";
import { subscribersAnalytics } from "@/actions/subscribers.analytics";
import React, { useEffect, useState } from "react";

const useSubscribersAnalytics = () => {
  const [subscribersData, setSubscriberData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const SubscriberAnalytics = async () => {
    await subscribersAnalytics().then((res: any) => {
      setSubscriberData(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    SubscriberAnalytics();
  }, []);

  return { subscribersData, loading };
};

export default useSubscribersAnalytics;
