import { Text, Container, Group, Image } from "@mantine/core";
import classes from "./Footer.module.css";
import {styles} from "../../constants";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.4, // Adjust this value based on your preferencz
  });

  // Animation for the left column (coming from the left)
  const footerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <footer ref={ref} className={`${styles.body} py-6 bg-primary text-white flex-1`}>
      <animated.div style={footerAnimation}>
        <Text size="sm">
          Copyright 2023 © Copy:2023 | All Rights Reserved By OA & Success
        </Text>
      </animated.div>
    </footer>
  );
}
