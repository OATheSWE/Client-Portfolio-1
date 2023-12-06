/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { ThemeIcon, Text, Container, SimpleGrid } from "@mantine/core";
import classes from "./Services.module.css";
import { IconImports } from "../../assets/IconImports";
import { useMediaQuery } from "@mantine/hooks";
import styles from "../../constants";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const MOCKDATA = [
  {
    icon: <IconImports.LuBadgeCheck className="w-6 h-6 text-accent" />,
    title: "Uncompromising Quality",
    description:
      "Curating reliable top-tier brands, we ensure professional standards through rigorous testing. Choose our equipment for outstanding performance and durability.",
  },
  {
    icon: <IconImports.LuBrainCog className="w-6 h-6  text-accent" />,
    title: "Media Mastery and Expert Guidance",
    description:
      "Expertise and excellence in broadcast and video production. Our seasoned team offers personalized guidance for professionals and beginners alike.",
  },
  {
    icon: <IconImports.FaClockRotateLeft className="w-5 h-5 text-accent" />,
    title: "Efficient Order Processing",
    description:
      "Swift order fulfillment through streamlined processes ensures timely project delivery, letting you focus on crafting exceptional content.",
  },
  {
    icon: <IconImports.FaHandshake className="w-6 h-6 text-accent" />,
    title: "Strategic Alliances with Leading Brands",
    description:
      "Forge robust partnerships with industry leaders who share our commitment to innovation. Access the latest advancements in media production for a competitive edge.",
  },
  {
    icon: <IconImports.FaScaleBalanced className="w-6 h-6 text-accent" />,
    title: "Affordable Excellence",
    description:
      "Enjoy the benefits of strategic partnerships with industry leaders who share our commitment to innovation. Our collaborations provide a competitive advantage with cutting-edge media production equipment.",
  },
];

function Feature({ index, icon, title, description, style, isVisible }) {
  return (
    <animated.div
      style={{ ...style, opacity: isVisible ? style.opacity : 0 }}
      className="flex flex-col items-center"
    >
      <ThemeIcon variant="light" size={50}>
        {icon}
      </ThemeIcon>
      <Text mt="sm" mb={7} className="text-center">
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6} className="text-center">
        {description}
      </Text>
    </animated.div>
  );
}

/**
 * Features component displays a grid of features with responsive layout adjustments.
 */
export default function Features() {
  // useInView hook to track whether the section is in view
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this value based on your preference (0.5 means 50% visibility)
  });

  // Create a trail of animated styles with individual delays
  const trail = useTrail(MOCKDATA.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: (index) => 300 * index, // Individual delay for each feature
  });

  // Map over MOCKDATA and create Feature components with animated styles
  const features = trail.map((style, index) => (
    <Feature
      {...MOCKDATA[index]}
      key={index}
      style={style}
      isVisible={inView}
    />
  ));

  // Determine screen size using useMediaQuery hook
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 992px)"
  );

  return (
    <div ref={ref} className={`${styles.body} ${classes.wrapper}`}>
      {/* Responsive grid with SimpleGrid */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
        className={``}
        px={0}
      >
        {/* Display first 5 features on small screens */}
        {isSmallScreen && features.slice(0, 5)}

        {/* Display first 4 features on medium screens */}
        {isMediumScreen && features.slice(0, 4)}

        {/* Conditionally render the last item on medium screens */}
        {isMediumScreen && features.length === 5 ? (
          <div style={{ gridColumn: "span 2" }}>{features[4]}</div>
        ) : null}

        {/* Display first 3 features on large screens */}
        {isLargeScreen && features.slice(0, 3)}

        {/* Conditionally render the last two items with custom styling on large screens */}
        {isLargeScreen && features.length === 5 ? (
          <React.Fragment>
            <div className="w-[300px] ml-[50%]">{features[3]}</div>
            <div className="w-[300px] ml-[60%]">{features[4]}</div>
          </React.Fragment>
        ) : null}
      </SimpleGrid>
    </div>
  );
}
