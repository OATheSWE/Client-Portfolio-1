import React, { useState } from 'react';
import { Title, Text, Grid, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles, headerContent, socials } from "../../data";
import Btn from "../Button";
import style from "./Header.module.css";
import "./Header.scss";

export default function Header() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [downloaded, setDownloaded] = useState(false);

  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '../../assets/resume-cv/CV.pdf';
    downloadLink.download = 'CV.pdf';
    downloadLink.click();

    // Set the state to indicate that the CV has been downloaded
    setDownloaded(true);
  };

  return (
    <section id="home"  ref={ref} className={`w-full py-10 ${styles.body} bg-primary`}>
      <Grid gutter={50} className={`font-sans mt-10`}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className="flex flex-col justify-center max-lg:items-center max-lg:text-center"
        >
          <animated.div
            style={rightColAnimation}
            className={`max-h-[360px] h-full max-lg:mt-10`}
          >
            <Title className={`text-accent font-sans`} order={4}>
              {headerContent.hi}
            </Title>

            <Title className={`font-sans ${style.title}`} order={1}>
              {headerContent.name}
            </Title>

            <Text className="text-white font-semibold">
              And I'm a <span className="text-accent placeholder"></span>
            </Text>

            <Text className="text-white mt-2">{headerContent.text}</Text>

            <div className="flex space-x-10 flex-1 max-[360px]:space-x-5 mt-8 max-lg:justify-center">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  className="p-2 rounded-full border-2 border-white transition duration-300 text-white hover:border-accent hover:text-accent cursor-pointer hover:-translate-y-1"
                  key={index}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a href="#" className="my-auto">
              <Btn
                text="Download CV"
                style={`bg-accent rounded-3xl hover:border-2 hover:border-accent hover:border-solid hover:bg-transparent`}
                xl="xl"
                click={handleDownload}
              />
            </a>

            {/* Display the text if the CV has been downloaded */}
            {downloaded && (
              <Text className="text-accent mt-2">You've downloaded my CV.</Text>
            )}
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={leftColAnimation} className={style.floating}>
            <Image
              src={headerContent.img}
              className={`max-w-[580px] max-[480px]:object-contain w-full h-[500px] object-cover mx-auto`}
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
