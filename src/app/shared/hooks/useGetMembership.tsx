"use client";
import { getMembership, getMembership2 } from "@/actions/get.membership";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

type data = {
  _id: string;
  user: string;
  stripeCustomerId: string;
  plan: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const useGetMembership = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState<any>(true);
  const { user } = useUser();

  useEffect(() => {
    handleGetMembership(user?.id!);
  }, [user]);

  const handleGetMembership = async (user: string) => {
    await getMembership2(user)
      .then((res: any) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return { data, loading };
};

export default useGetMembership;
