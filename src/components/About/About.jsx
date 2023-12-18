import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles, aboutContent } from "../../data";
import Heading from "../Heading";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.4, 
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section id="about" ref={ref} className={`w-full py-10 ${styles.body} bg-secondary`}>
      <Heading name={`About`} name2={`Me`} />
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 5.3 }}>
          <animated.div style={leftColAnimation}>
            <Image
              src={aboutContent.img}
              className={`max-w-[500px] w-full h-[410px] object-cover object-top mx-auto rounded-xl`}
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6.7 }}>
          <animated.div
            style={rightColAnimation}
            className={`max-h-[400px] h-full`}
          >
            <Title className={classes.title} order={2}>
            {aboutContent.role}
            </Title>

            <Text className="text-white">
            {aboutContent.text1}
            </Text>

            <Text className="text-white mt-6">
            {aboutContent.text2}
            </Text>

            <Text className="text-white mt-6">
            {aboutContent.text3}
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
