/* eslint-disable react/prop-types */
import { Card, Image, Text } from "@mantine/core";
import Btn from "../Button";
import { ImageCollection } from "../../assets/images";
import { useState } from "react";

export default function ProductCard({ productImg, productDetail }) {
  const [textHovered, setTextHovered] = useState(false);

  const handleMouseEnter = () => {
    setTextHovered(true);
  };

  const handleMouseLeave = () => {
    setTextHovered(false);
  };
  return (
    <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card p={0} className={`flex flex-col font-sans h-[330px]`}>
        <Card.Section>
          <div className="w-full flex items-center justify-center bg-secondary h-[200px] rounded-lg">
            <Image
              src={productImg}
              alt="Item"
              className={`w-[60%] h-[60%] ${
                textHovered ? "scale-110" : ""
              } transition duration-300`}
            />
          </div>
        </Card.Section>
        <Text
          size="sm"
          className={`font-semibold flex-1 justify-start max-w-[260px] mt-4 transition duration-300 ${
            textHovered ? "text-accent" : ""
          }`}
        >
          {productDetail}
        </Text>
        <Btn
          text="View More"
          style={`bg-accent hover:bg-transparent hover:border-2 hover:border-accent hover:border-solid hover:text-black`}
        />
      </Card>
    </a>
  );
}
