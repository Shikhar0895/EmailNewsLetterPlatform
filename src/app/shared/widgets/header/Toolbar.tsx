"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Toolbar = () => {
  const user = useUser();
  // console.log(user);
  return (
    <>
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      {user.user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.user?.imageUrl as string}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link href={"/sign-up"}>Login</Link>
      )}
    </>
  );
};

export default Toolbar;
