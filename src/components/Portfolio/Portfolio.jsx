import { Card, Image, Text, Group, SimpleGrid } from "@mantine/core";
import classes from "./Portfolio.module.css";
import Btn from "../Button";
import { styles, PPTS, projectTypes } from "../../data";
import Heading from "../Heading";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(PPTS.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const handleNavigate = (projectType) => {
    navigate(`/projects/${projectType}`);
  };

  const all = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <Card
        withBorder
        radius="md"
        className={`${classes.card} flex fex-col items-center w-full max-w-[400px] shadow-md transition duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
        mt={0}
      >
        <Card.Section className="h-[180px] w-full max-w-[400px] overflow-hidden mt-[0.15rem]">
          <Image
            src={PPTS[index].src}
            className="w-full h-full transition duration-500 hover:scale-110"
          />
        </Card.Section>

        <Text className={classes.title} fw={700}>
          {PPTS[index].project}
        </Text>

        <Text fz="sm" lineClamp={4}>
          {PPTS[index].detail}
        </Text>

        <Group justify="center" className="w-[100vw]" key={`btn-${index}`}>
          <Btn
            text="See Projects"
            style={`bg-accent max-[768px]:w-[48%] rounded-3xl hover:border-2 hover:border-accent hover:border-solid hover:bg-transparent hover:text-black`}
            click={() => handleNavigate(projectTypes[index])}
            xl="xl"
          />
        </Group>
      </Card>
    </animated.div>
  ));

  return (
    <section
      className={`${styles.body} bg-primary pb-12 pt-6 grid place-items-center xl:justify-center`}
      ref={ref}
      id="projects"
    >
      <Heading name="Porfolio" />
      <SimpleGrid mt={60} cols={{ base: 1, xs:2, sm: 3, lg: 4 }}>
        {all}
      </SimpleGrid>
    </section>
  );
}
