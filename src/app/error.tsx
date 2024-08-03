"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const history = useRouter();
  return (
    <div className="flex flex-col p-4 items-center gap-4">
      Error
      <div className="flex gap-4">
        <Button color="secondary" onClick={reset}>
          Try Again
        </Button>
        <Button
          color="default"
          onClick={() => {
            history.push("/");
          }}
        >
          Go Back To Homepage
        </Button>
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
