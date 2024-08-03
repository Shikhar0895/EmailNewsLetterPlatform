import { ICONS } from "@/app/shared/utils/icons";
import { atom } from "jotai";

export const navItems: NavItems[] = [
  {
    title: "Features",
  },
  {
    title: "Pricing",
  },
  {
    title: "Resources",
  },
  {
    title: "Docs",
  },
];

export const partners: PartnersTypes[] = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
];

export const freePlan: PlanType[] = [
  {
    title: "Up to 2,500 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

export const GrowPlan: PlanType[] = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

export const scalePlan: PlanType[] = [
  {
    title: "Up to 100,000 subscribers",
  },
  {
    title: "Referal program",
  },
  {
    title: "AI support",
  },
  {
    title: "Advanced support system",
  },
  {
    title: "Ad Network",
  },
];

export const CardInfo = [
  {
    cardTitle: "LAUNCH",
    priceMonthly: "0",
    priceYearly: "0",
    priceMonthlyStripeId: "No Id",
    priceYearlyStripeId: "No Id",
    whatsIncluded: [
      {
        title: "Up to 2,500 subscribers",
      },
      {
        title: "Unlimited sends",
      },
      {
        title: "Custom newsletter",
      },
      {
        title: "Newsletter analytics",
      },
    ],
  },
  {
    cardTitle: "GROW",
    priceMonthly: "1200",
    priceYearly: "800",
    priceMonthlyStripeId: "price_1PSeynRoGUmdP5c1psVk1Er9",
    priceYearlyStripeId: "price_1PUrByRoGUmdP5c1fmD6LQJ5",
    whatsIncluded: [
      {
        title: "Up to 10,000 subscribers",
      },
      {
        title: "Custom domains",
      },
      {
        title: "API access",
      },
      {
        title: "Newsletter community",
      },
    ],
  },
  {
    cardTitle: "SCALE",
    priceMonthly: "1500",
    priceYearly: "1000",
    priceMonthlyStripeId: "price_1PUoq6RoGUmdP5c1pAeayoQp",
    priceYearlyStripeId: "price_1PUrAiRoGUmdP5c1WFYB8tkU",
    whatsIncluded: [
      {
        title: "Up to 100,000 subscribers",
      },
      {
        title: "Referal program",
      },
      {
        title: "AI support",
      },
      {
        title: "Advanced support system",
      },
      {
        title: "Ad Network",
      },
    ],
  },
];

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Customize Profile");

export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashboardSideBarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

export const stripePaymentLinkUrlMonthly = [
  {
    plan: "growMonthly",
    link: "https://buy.stripe.com/test_7sIaIf0ZJ5DSaiY7ss",
  },
  {
    plan: "scaleMonthly",
    link: "https://buy.stripe.com/test_14k5nVaAjaYcdva6oq",
  },
];

export const stripePaymentLinkUrlYearly = [
  {
    plan: "growYearly",
    link: "https://buy.stripe.com/test_6oE3fN23Nd6k4YE8wx",
  },
  {
    plan: "scaleYearly",
    link: "https://buy.stripe.com/test_3cs2bJ5fZ3vKdva147",
  },
];
