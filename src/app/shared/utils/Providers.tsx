"use client";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import DashboardSidebar from "@/app/shared/widgets/dashboard/sidebar/dashboard.sidebar";
import Dashboard from "@/app/modules/dashboard";
import { Toaster } from "react-hot-toast";
import { addStripe } from "@/actions/add.stripe";
import { useEffect } from "react";
interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();

  const { isLoaded, user } = useUser();

  const isStripeCustomerIdHas = async () => {
    await addStripe();
  };

  useEffect(() => {
    if (isLoaded && user) {
      isStripeCustomerIdHas();
    }
  }, [isLoaded, user]);

  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      !pathname.includes("/sign-up") &&
      pathname.startsWith("/sign-in") &&
      pathname !== "/success" &&
      pathname !== "/error" &&
      pathname !== "/subscribe" &&
      pathname !== "/upgradePlan" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll overflow-x-clip">
            <DashboardSidebar />
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
