"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
  return () => {
    const { isSignedIn, user, isLoaded } = useUser();
    const history = useRouter();

    useEffect(() => {
      if (!isSignedIn) history.push("/");
    }, [isSignedIn, user]);

    if (isLoaded && !user) {
      return <p>Loading .....</p>;
    }
    return <WrappedComponent />;
  };
};

export default withAuth;
