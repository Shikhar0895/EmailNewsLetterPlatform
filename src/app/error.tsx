"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col p-4 items-center gap-4">
      Error
      <div className="flex gap-4">
        <Button color="secondary" onClick={reset}>
          Try Again
        </Button>
        <Link href="/">
          <Button color="default">Go Back To Homepage</Button>
        </Link>
      </div>
      Error Name:{error.name}
      <br />
      Error Message: {error.message}
      <br />
      Error Stack: {error.stack}
    </div>
  );
};

export default error;
