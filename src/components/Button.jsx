/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mantine/core';

export default function Btn({ text, style, click }) {
  const handleButtonClick = () => {
    // Check if the click prop is provided and apply the timeout
    if (click) {
      setTimeout(() => {
        click();
      }, 1000); // Adjust the timeout duration as needed
    }
  };

  return (
    <Button
      variant="gradient"
      size="md"
      mt="xl"
      className={`font-normal text-[16px] transition duration-300 ${style}`}
      onClick={handleButtonClick}
    >
      {text}
    </Button>
  );
}
