/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { styles, projects } from "../../data";
import { Btn } from "../../components";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function PortfolioPage({ projectType }) {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  const pageHeading = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 6 },
  });

  const navigate = useNavigate();

  const filteredProjects = projects.filter(
    (project) => project.type === projectType
  );

  if (filteredProjects.length === 0) {
    // Redirect to the landing page if the project type is not found
    alert("No projects are currently linked to the chosen project type.");
    navigate("/"); // Redirect to the landing page
    return null; // You can also render null or a loading state while redirecting
  }

  const detailedProject = filteredProjects[0]; // You may choose a specific project as detailed

  const otherProjects = filteredProjects.slice(1);

  return (
    <div className={`${styles.body} bg-secondary w-full h-auto pb-14`}>
      <animated.div ref={ref} style={pageHeading}>
        <Container className="space-y-4 max-w-[650px] w-full min-[480px]:translate-y-[100%] translate-y-[50%] text-white text-center">
          <Text className="min-[480px]:text-[48px] uppercase font-extrabold text-[38px]">
            {projectType} Projects
          </Text>
          <Text>
            Peruse a curated compilation of {projectType} projects exemplifying
            my adept data analysis skills and commitment to delivering
            insightful solutions
          </Text>
        </Container>
      </animated.div>

      <Container
        className="bg-white text-black mt-[140%] min-[480px]:mt-[46%]"
        p={0}
      >
        <Container className="bg-accent w-full h-[50px]" px={0}>
          <Text className="bg-white w-[100px] h-full flex justify-center items-center font-semibold">
            Projects
          </Text>
        </Container>
        <Container p={0} className="flex flex-col items-center text-center">
          <Container px={28} py={120}>
            <Container p={0} className="max-w-[500px] flex flex-col space-y-6">
              <Text className="min-[480px]:text-[48px] uppercase font-extrabold text-[30px]">
                {detailedProject.title}
              </Text>
              <Text>{detailedProject.description}</Text>
            </Container>
            <Container
              p={0}
              my={50}
              className="w-full h-[400px] overflow-hidden"
            >
              <Image
                src={detailedProject.image}
                alt={`Project Image`}
                className="w-full h-full transition duration-300 hover:scale-110 object-cover"
              />
            </Container>
            <a
              href={detailedProject.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Btn
                text="View Project"
                style={`text-black border-2 hover:border-accent hover:bg-accent hover:text-white border-solid font-semibold `}
              />
            </a>
          </Container>

          <SimpleGrid
            p={0}
            m={0}
            cols={{ base: 1, sm: 2 }}
            className="border border-b-0 border-solid border-gray-300 w-full"
          >
            {otherProjects.map((project) => (
              <Container
                className="justify-start min-[480px]:border-r border-b border-solid border-gray-300 w-full min-[480px]:p-10 p-5 flex flex-col space-y-4"
                key={project.id}
              >
                <Text className="text-center min-[480px]:text-[22px] uppercase font-extrabold text-[17px]">
                  {project.title}
                </Text>
                <Container p={0} className="w-full h-[200px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.type} Project Image ${project.id}`}
                    className="w-full h-full transition duration-300 hover:scale-110 object-cover"
                  />
                </Container>
                <Text className="text-[14px] lg:text-[16px]">
                  {project.description}
                </Text>
                <Container p={0} m={0} className="flex justify-center">
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Btn
                      text="View Project"
                      style={`text-black border-2 hover:border-accent hover:bg-accent hover:text-white border-solid font-semibold text-[14px] lg:text-[16px] h-9`}
                      xl="xl"
                    />
                  </a>
                </Container>
              </Container>
            ))}
          </SimpleGrid>
        </Container>
      </Container>
    </div>
  );
}
