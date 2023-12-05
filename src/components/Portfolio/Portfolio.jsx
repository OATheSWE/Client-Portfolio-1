import React from "react";
import styles from "../../constants";
import { Image, SimpleGrid } from "@mantine/core";
import { ImageCollection } from "../../assets/images";

export default function Partners() {
  const images = [
    { img: ImageCollection.Partners1, id: 1 },
    { img: ImageCollection.Partners2, id: 2 },
    { img: ImageCollection.Partners3, id: 3 },
    { img: ImageCollection.Partners4, id: 4 },
    { img: ImageCollection.Partners5, id: 5 },
  ];

  const image = images.map((img) => (
    <Image
      src={img.img}
      className={`max-w-[150px] flex cursor-pointer opacity-60 hover:opacity-100 transition duration-300`}
      key={img.id}
    />
  ));

  return (
    <div className={`lg:mx-20 mx-9 sm:mx-14 -mt-[260px] md:-mt-[200px] lg:-mt-[120px] ${styles.body} font-sans bg-black flex justify-center py-8 lg:pl-32 absolute rounded-xl z-[200] `}>
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 6 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
        className=""
      >
        {image}
      </SimpleGrid>
    </div>
  );
}
