import { CardInfo } from "@/app/configs/constants";

import Pricingcard from "./pricing.card.2";

const Pricingcards = ({ active }: { active: "Monthly" | "Yearly" }) => {
  return (
    <div className="w-full md:flex items-start justify-around py-8">
      {CardInfo.map((i) => {
        return <Pricingcard key={i.cardTitle} PlanInfo={i} active={active} />;
      })}
    </div>
  );
};

export default Pricingcards;
