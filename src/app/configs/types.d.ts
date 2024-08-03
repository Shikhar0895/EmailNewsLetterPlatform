type NavItems = {
  title: String;
};
type PartnersTypes = {
  url: string;
};

type PlanType = {
  title: string;
};

type DashboardSideBarTypes = {
  title: string;
  url: string;
  icon: any;
};

type subscribersDataTypes = {
  _id?: string;
  id: string;
  email: string;
  createdAt: string | Date;
  source: string;
  status?: string;
};

type PlanInfo = {
  cardTitle: string;
  priceMonthly: string;
  priceYearly: string;
  priceMonthlyStripeId?: string;
  priceYearlyStripeId?: string;
  whatsIncluded: PlanType[];
};
