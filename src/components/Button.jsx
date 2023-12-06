/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@mantine/core";

export default function Btn({text, style} ) {
  return (
    <Button
      variant="gradient"
      size="md"
      radius="md"
      mt="xl"
      className={`font-normal text-[16px] transition duration-300 ${style}`}
    >
      {text}
    </Button>
  );
}
