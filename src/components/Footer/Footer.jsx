import { Text } from "@mantine/core";
import { styles, footerContent } from "../../data";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.4, 
    triggerOnce: true,
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
        <Text size="sm" className="text-center">
          {footerContent.text}
        </Text>
      </animated.div>
    </footer>
  );
}
