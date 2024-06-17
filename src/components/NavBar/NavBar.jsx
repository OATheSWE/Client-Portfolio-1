import React from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavBar.module.css";
import Btn from "../Button";
import { styles } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
];

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [activeSection, setActiveSection] = useState("");
  const isLandingPage = window.location.pathname === "/"; // Adjust the pathname as needed'
  const navigate = useNavigate();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      closeDrawer();
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // Adjust for header height
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="fixed w-full z-[99999] shadow-xl">
      <header
        className={`flex justify-between items-center bg-secondary md:px-8 text-white font-sans ${classes.header} ${styles.body}`}
      >
        <Group h="100%" className="flex items-center">
          <Text className="font-extrabold text-[25px] max-[480px]:text-[21px]">Eboeme</Text>
        </Group>

        <Group h="100%" gap={0} className="hidden md:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              className={`${classes.link} ${
                activeSection === link.href.substring(1) ? "text-accent" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (!isLandingPage) {
                  navigate("/");
                  setTimeout(() => {
                    smoothScroll(link.href.substring(1));
                  }, 300)
                } else {
                  smoothScroll(link.href.substring(1));
                }
              }}
              
            >
              {link.text}
            </a>
          ))}
        </Group>

        <a
          href="#hire-me"
          className="hidden md:flex"
          onClick={(e) => {
            e.preventDefault();
            if (!isLandingPage) {
              navigate("/");
              setTimeout(() => {
                smoothScroll("hire-me");
              }, 300)
            } else {
              smoothScroll("hire-me");
            }
          }}
          
        >
          <Btn
            text="Hire me"
            style={`bg-white text-black rounded-3xl border-2 hover:border-accent border-solid hover:bg-accent hover:text-white`}
          />
        </a>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size={23}
          color="white"
        />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
        className="font-sans text-white p-0 m-0"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="bg-secondary block mx-auto px-4"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              className={`${classes.link} ${
                activeSection === link.href.substring(1) ? "text-accent" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (!isLandingPage) {
                  navigate("/");
                  setTimeout(() => {
                    smoothScroll(link.href.substring(1));
                  }, 300)
                } else {
                  smoothScroll(link.href.substring(1));
                }
              }}
              
            >
              {link.text}
            </a>
          ))}

          <a
            href="#hire-me"
            className=""
            onClick={(e) => {
              e.preventDefault();
              if (!isLandingPage) {
                navigate("/");
                setTimeout(() => {
                  smoothScroll("hire-me");
                }, 300)
              } else {
                smoothScroll("hire-me");
              }
            }}
            
          >
            <Btn
              text="Hire me"
              style={`bg-white text-black w-[92vw] max-[360px]:w-[88vw] rounded-3xl border-2 hover:border-accent border-solid hover:bg-accent hover:text-white mt-8 cursor-pointer`}
            />
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
