import { Button } from "@nextui-org/react";
import React from "react";

const CustomButton = ({
  icon,
  text,
  type,
  style,
  clickHandler,
}: {
  icon?: React.ReactNode;
  text: string;
  type?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  style: string;
  clickHandler?: () => void;
}) => {
  return (
    <Button className={style} variant={type}>
      <span className="mr-1 ml-[-5px]">{icon}</span>
      {text}
    </Button>
  );
};

export default CustomButton;
