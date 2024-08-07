import { manageSubscription } from "@/actions/manage.subscription";
import useGetMembership from "@/app/shared/hooks/useGetMembership";

import useSubscribersData from "@/app/shared/hooks/useSubscribersData";
import { ICONS } from "@/app/shared/utils/icons";
import { Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const UserPlan = () => {
  const { data, loading } = useSubscribersData();
  const { data: membershipData, loading: membershipLoading } =
    useGetMembership();

  const history = useRouter();

  const handleManage = async () => {
    history.push("/upgradePlan");
  };

  if (membershipLoading) {
    return (
      <div className="w-full my-3 p-3 bg-[#FDF1F8] rounded hover:shadow-xl cursor-pointer">
        <h5 className="text-lg font-medium">Loading...</h5>
      </div>
    );
  }
  if (!membershipData) {
    return <p>No membership data available</p>;
  }
  return (
    <div className="w-full my-3 p-3 bg-[#FDF1F8] rounded hover:shadow-xl cursor-pointer">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">{membershipData[0]?.plan}</h5>
        <div
          className="w-[95px] shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#E77CAE]"
          onClick={handleManage}
        >
          <span className="text-white text-xl">{ICONS.electric}</span>
          <span className="text-white text-sm">Upgrade</span>
        </div>
      </div>
      <h5 className="text-[#831743]">Total subscribers</h5>
      <Slider
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={data?.length}
        className="max-w-md"
      />
      <h6 className="text-[#831743]">
        {loading ? "..." : data?.length} of{" "}
        {membershipData[0]?.plan.includes("GROW")
          ? "2500"
          : membershipData[0]?.plan.includes("SCALE")
          ? "10,000"
          : "1,00,000"}{" "}
        added
      </h6>
    </div>
  );
};

export default UserPlan;
