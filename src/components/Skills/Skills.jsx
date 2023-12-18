import React from "react";
import { styles, progressBarsData } from "../../data";
import ProgressBar from "./ProgressBar";
import Heading from "../Heading";
import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "@react-spring/web";

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(progressBarsData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  return (
    <section
      ref={ref}
      className={`${styles.body} flex flex-col space-y-8 bg-secondary py-14`}
      id="skills"
    >
      <Heading name={`My`} name2={`Skills`} />
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          <ProgressBar
            label={progressBarsData[index].label}
            percentage={progressBarsData[index].percentage}
          />
        </animated.div>
      ))}
    </section>
  );
}
