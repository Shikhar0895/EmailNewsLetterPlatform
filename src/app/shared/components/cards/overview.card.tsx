import React, { useEffect } from "react";
import { ICONS } from "../../utils/icons";
import useSubscribersAnalytics from "../../hooks/useSubscribersAnalytics";
import getSubscriberCount from "@/actions/getSubscriberCount";

const OverviewCard = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();
  // console.log(
  //   "🚀 ~ OverviewCard ~ subscribersData, loading:",
  //   subscribersData,
  //   loading
  // );

  const lastMonthSubscribers =
    !loading &&
    subscribersData?.last7Months[subscribersData?.last7Months?.length - 1];

  const previousLastMonthSubscribers =
    !loading &&
    subscribersData?.last7Months[subscribersData?.last7Months?.length - 2];

  let comparePercentage = 0;

  if (previousLastMonthSubscribers?.count > 0) {
    comparePercentage =
      ((lastMonthSubscribers - previousLastMonthSubscribers) /
        previousLastMonthSubscribers) *
      100;
  } else {
    comparePercentage = 100;
  }

  useEffect(() => {
    (async () => {
      await getSubscriberCount();
    })();
  }, []);

  return (
    <div className="w-full xl:py-4 flex bg-white border rounded">
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Subscribers</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">
            {loading ? "..." : lastMonthSubscribers?.count}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">{ICONS.topArrow}</span>
            <span className="text-sm pl-1">{comparePercentage}</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Open Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Open Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Click Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Click Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
    </div>
  );
};

export default OverviewCard;
