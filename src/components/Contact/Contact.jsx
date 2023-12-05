import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Grid,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "../../constants";
import { ImageCollection } from "../../assets/images";
import Btn from "../Button";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function MessageUs() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const [ref, inView] = useInView({
    threshold: 0.4, // Adjust this value based on your preference
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <div ref={ref} className={`w-full ${styles.body} bg-secondary`}>
      <Grid gutter={60} className={`font-sans`}>
        <Grid.Col span={{ base: 12, md: 5 }} className="flex flex-col py-20">
          <animated.div style={leftColAnimation}>
            <form onSubmit={form.onSubmit(() => {})}>
              <Title order={2} size="h1" fw={900} ta="center">
                Get in touch
              </Title>

              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  {...form.getInputProps("name")}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  {...form.getInputProps("email")}
                />
              </SimpleGrid>

              <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps("subject")}
              />
              <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps("message")}
              />

              <Group justify="center" mt="xl">
                <Btn
                  text="Send Message"
                  style={`bg-accent hover:bg-transparent hover:border-2 hover:border-accent hover:border-solid hover:text-black`}
                />
              </Group>
            </form>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }} className="">
          <animated.div style={rightColAnimation} className={`h-full`}>
            {/* <Image
              src={ImageCollection.ManWithPhone}
              className={`relative z-[150] max-w-[800px] h-full`}
            /> */}
            <div className="">Hello</div>
          </animated.div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
