// import React, { useState, useEffect } from "react";
// import { Title, Text, Grid, Image } from "@mantine/core";
// import classes from "./Header.module.css";
// import styles from "../../constants";
// import { NavBar } from "../NavBar";
// import Btn from "../Button";
// import { ImageCollection } from "../../assets/images";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";


// export default function Header() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const images = Array.from({ length: 4 }, (_, index) => (
//     <Image
//       src={ImageCollection.Home}
//       className={`relative z-[150] max-w-[800px]`}
//       key={index}
//     />
//   ));

//   return (
//     <div className={`${styles.body} lg:h-screen  bg-secondary`}>
//       <NavBar />
//       <Grid gutter={60} className="font-sans">
//         <Grid.Col
//           span={{ base: 12, md: 5 }}
//           className="flex flex-col space-y-4 items-start"
//         >
//           <Title className={classes.title} order={2}>
//             Welcome to{" "}
//             <span className="font-extrabold ">BMD Solutions Concept </span>
//             <span className="text-accent font-extrabold">.</span>
//           </Title>
//           <Title className={classes.title} order={5}>
//             Your Ultimate Destination for High-Quality Broadcast and Video
//             Production Media Equipment.
//           </Title>
//           <Text c="dimmed">
//             Explore a world of cutting-edge solutions at our hub, where
//             precision meets creativity. Elevate your projects with our premier
//             selection of top-tier broadcast and video production equipment,
//             setting the stage for unparalleled excellence
//           </Text>

//           <Btn
//             text="Discover Our Store"
//             style={`bg-accent hover:bg-transparent hover:border-2 hover:border-accent hover:border-solid hover:text-black`}
//           />
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, md: 7 }} className="relative">
//           <div className="absolute bg-gradient-to-b from-yellow-500 to-transparent overflow-hidden w-[100%] h-[80%] z-10 opacity-[0.25] blur-lg"></div>
//           <Carousel
//             showArrows={false}
//             showStatus={false}
//             showThumbs={false}
//             selectedItem={currentSlide}
//             onChange={(index) => setCurrentSlide(index)}
//             interval={3000}
//             transitionTime={1500}
//             showIndicators={false}
//           >
//             {images}
//           </Carousel>
//         </Grid.Col>
//       </Grid>
//     </div>
//   );
// }


import React from 'react'

export default function Header() {
  return (
    <div>Header</div>
  )
}
