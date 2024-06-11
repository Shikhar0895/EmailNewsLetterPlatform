"use client";
import { getSubscribers } from "@/actions/get.subscribers";
import { useClerk } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const useSubscribersData = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useClerk();

  // const GetSubscribers = async() => {
  //     await getSubscribers({newsLetterOwnerId: user?.id!}).then((res:any) =>{ setData(res)})
  // }
  const GetSubscribers = async () => {
    try {
      const response = await getSubscribers({ newsLetterOwnerId: user?.id! });
      if (response?.length !== 0) {
        setData(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    GetSubscribers();
  }, [user]);
  return { data, loading };
};

export default useSubscribersData;
