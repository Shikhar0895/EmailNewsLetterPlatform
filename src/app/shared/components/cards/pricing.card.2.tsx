import React from "react";
import { ICONS } from "../../utils/icons";
import { Button } from "@nextui-org/react";
import { stripeSubscribe } from "@/actions/stripe.subscribe";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Pricingcard = ({
  PlanInfo,
  active,
}: {
  PlanInfo: PlanInfo;
  active: "Monthly" | "Yearly";
}) => {
  const { user } = useUser();
  console.log(user);
  const history = useRouter();

  const handleSubscription = async ({
    priceId,
    plan,
  }: {
    priceId: string;
    plan: string;
  }) => {
    await stripeSubscribe({
      priceId: priceId,
      userId: user?.id!,
    }).then((res: any) => {
      console.log(res);
      history.push(res);
    });
  };

  return (
    <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
      {ICONS.pricingCardSvg}
      <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
        {PlanInfo.cardTitle}
      </h5>
      <br />
      <div className="border pb-8 border-[#000] ">
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
          ${active === "Monthly" ? PlanInfo.priceMonthly : PlanInfo.priceYearly}
        </h5>
        <p className="text-lg">No commitment</p>
      </div>
      <div className="pt-5">
        <p className="text-xl">What&apos;s included...</p>
      </div>
      {PlanInfo.whatsIncluded.map((i: PlanType, index: number) => (
        <div key={index} className="flex w-full items-center py-4">
          <span className="text-xl">{ICONS.right}</span>
          <p className="pl-2 text-lg">{i.title}</p>
        </div>
      ))}
      <br />
      <Button
        color="primary"
        className="w-full text-xl !py-6"
        onClick={() => {
          if (PlanInfo.cardTitle === "LAUNCH") return;
          else {
            handleSubscription({
              priceId:
                active === "Monthly"
                  ? PlanInfo.priceMonthlyStripeId!
                  : PlanInfo.priceYearlyStripeId!,
              plan: PlanInfo.cardTitle,
            });
          }
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Pricingcard;
