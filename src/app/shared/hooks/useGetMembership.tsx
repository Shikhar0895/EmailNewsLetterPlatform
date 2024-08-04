"use client";
import { getMembership } from "@/actions/get.membership";
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

  useEffect(() => {
    handleGetMembership();
  }, []);

  const handleGetMembership = async () => {
    await getMembership()
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
