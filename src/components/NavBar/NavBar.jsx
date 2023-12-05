import {
  HoverCard,
  Group,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Image,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavBar.module.css";
import { IconImports } from "../../assets/IconImports";
import styles from "../../constants";
import { ImageCollection } from "../../assets/images";

const explore = [
  {
    title: "Features",
  },
  {
    title: "Top-Rated",
  },
  {
    title: "Shop All",
  },
];

const connect = [
  {
    title: "MessageUs",
  },
  {
    title: "Testimonials",
  },
];

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [linksOpened2, { toggle: toggleLinks2 }] = useDisclosure(false);

  const explores = explore.map((item) => (
    <a
      className={`font-sans py-2 text-center transition duration-300 hover:bg-secondary hover:text-accent ${classes.subLink}`}
      key={item.title}
      href="#"
    >
      <Text size="sm" fw={500}>
        {item.title}
      </Text>
    </a>
  ));

  const connects = connect.map((item) => (
    <a
      className={`font-sans py-2 text-center transition duration-300 hover:bg-secondary hover:text-accent ${classes.subLink}`}
      key={item.title}
      href="#"
    >
      <Text size="sm" fw={500}>
        {item.title}
      </Text>
    </a>
  ));

  return (
    <Box pb={80}>
      <header className={`${classes.header} bg-primary`}>
        <Group justify="space-between" h="100%">
          <a href="#">
            {/* <Image
              src={ImageCollection.Logo}
              className="max-w-[120px] object-cover mt-2"
            /> */}
          </a>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a
              href="#"
              className={`hover:border-b-2 border-accent ${classes.link}`}
            >
              Home
            </a>
            <HoverCard
              width={500}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
              className={`font-sans`}
            >
              <HoverCard.Target>
                <a
                  href="#"
                  className={`hover:border-b-2 border-accent ${classes.link}`}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Explore
                    </Box>
                    {/* <IconImports.IoIosArrowDown /> */}
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid cols={3} spacing={0}>
                  {explores}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a
              href="#"
              className={`hover:border-b-2 border-accent ${classes.link}`}
            >
              About
            </a>
            <HoverCard
              width={300}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a
                  href="#"
                  className={`hover:border-b-2 border-accent ${classes.link}`}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Connect
                    </Box>
                    {/* <IconImports.IoIosArrowDown /> */}
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid cols={2} spacing={0}>
                  {connects}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a
              href="#"
              className={`hover:border-b-2 border-accent ${classes.link}`}
            >
              Contact
            </a>
          </Group>

          {/* <Group visibleFrom="sm">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-white transition duration-300 hover:bg-accent hover:text-white"
            >
              <IconImports.MdOutlineImageSearch className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-white transition duration-300 hover:bg-accent hover:text-white"
            >
              <IconImports.FaUser />
            </a>
          </Group> */}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={`font-sans ${classes.link}`}>
            Home
          </a>
          <a
            className={`font-sans ${classes.link}`}
            onClick={toggleLinks}
            href="#"
          >
            <Center inline>
              <Box component="span" mr={5}>
                Explore
              </Box>
              <IconImports.IoIosArrowDown />
            </Center>
          </a>

          <Collapse in={linksOpened} className="flex justify-start ml-4">
            {explores}
          </Collapse>
          <a href="#" className={`font-sans ${classes.link}`}>
            About
          </a>
          <a
            className={`font-sans ${classes.link}`}
            onClick={toggleLinks2}
            href="#"
          >
            <Center inline>
              <Box component="span" mr={5}>
                Connect
              </Box>
              <IconImports.IoIosArrowDown />
            </Center>
          </a>

          <Collapse in={linksOpened2} className="flex justify-start ml-4">
            {connects}
          </Collapse>
          <a href="#" className={`font-sans ${classes.link}`}>
            Contact
          </a>

          <Divider my="sm" />

          {/* <Group className="ml-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-white transition duration-300 hover:bg-accent hover:text-white"
            >
              <IconImports.MdOutlineImageSearch className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-white transition duration-300 hover:bg-accent hover:text-white"
            >
              <IconImports.FaUser />
            </a>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
