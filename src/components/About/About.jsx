// import { Title, Text, Grid, Image } from "@mantine/core";
// import classes from "./About.module.css";
// import styles from "../../constants";
// import Btn from "../Button";
// import { ImageCollection } from "../../assets/images";
// import { useInView } from "react-intersection-observer";
// import { useSpring, animated } from "@react-spring/web";

// export default function About() {


//   const [ref, inView] = useInView({
//     threshold: 0.4 // Adjust this value based on your preferencz
//   });

//   // Animation for the left column (coming from the left)
//   const leftColAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateX(0)" : "translateX(-50%)",
//     filter: inView ? "blur(0)" : "blur(4px)",
//     config: { mass: 1, tension: 80, friction: 26 },
//   });

//   // Animation for the right column (coming from the right)
//   const rightColAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateX(0)" : "translateX(50%)",
//     filter: inView ? "blur(0)" : "blur(4px)",
//     config: { mass: 1, tension: 80, friction: 26 },
//   });

//   return (
//     <div ref={ref} className={`w-full py-10 ${styles.body} bg-secondary`}>
//       <Grid gutter={60} className={`font-sans`}>
//         <Grid.Col span={{ base: 12, md: 7 }}>
//           <animated.div style={leftColAnimation}>
//             <Image
//               src={ImageCollection.ProductionGear}
//               className={`relative z-[150] max-w-[800px]`}
//             />
//           </animated.div>
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, md: 5 }}>
//           <animated.div style={rightColAnimation}>
//             <Title className={classes.title} order={2}>
//               Connecting Creativity
//             </Title>

//             <Text c="dimmed">
//               BMD Solutions Concept emerged from a small team's dream,
//               disrupting norms with innovative tools that empower creators. From
//               garages to workshops, we've tirelessly built a brand synonymous
//               with cutting-edge technology and boundless creativity. Committed
//               to excellence and innovation, we're your trusted partner,
//               supplying top-of-the-line media equipment to empower creative
//               visions.
//             </Text>

//             <Btn
//               text="Discover Our Store"
//               style={`bg-accent hover:bg-transparent hover:border-2 hover:border-accent hover:border-solid hover:text-black`}
//             />
//           </animated.div>
//         </Grid.Col>
//       </Grid>
//     </div>
//   );
// }

import React from 'react'

export default function About() {
  return (
    <div>About</div>
  )
}

