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
import {styles} from "../../constants";
import Btn from "../Button";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { IconImports } from "../../assets";
import "./Contact.css";
import Heading from "../Heading";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
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
    transform: inView ? "translateX(0)" : "translateX(100%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const contactInfo = [
    {
      icon: <IconImports.FaPhone className="w-6 h-6 mt-4" />,
      info: "+8801863-931220",
      info2: "+8801567-953483",
      id: 1,
    },
    {
      icon: <IconImports.IoMdMail className="w-6 h-6 mt-0.5" />,
      info: "mdriead.bd@gmail.com",
      id: 2,
    },
    {
      icon: <IconImports.FaLocationArrow className="w-6 h-6" />,
      info: "Zirabo, Ashulia, Savar, Dhaka",
      id: 3,
    },
  ];

  return (
    <div ref={ref} className={`w-full ${styles.body} bg-secondary pt-6`}>
      <Heading name="Contact" />
      <Grid gutter={60} className={`font-sans`} pr={`sm`}>
        <Grid.Col
          span={{ base: 12, sm: 5.5 }}
          className="flex justify-center flex-col"
        >
          <animated.div style={rightColAnimation} className={`space-y-4 mt-10 md:mt-10`}>
            {contactInfo.map((info) => (
              <div
                className="flex gap-5 text-white lg:text-[17px] text-14px min-[480px]:text-16px"
                key={info.id}
              >
                {info.icon}
                {info.info}
                <br />
                {info.info2}
              </div>
            ))}
          </animated.div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6.5 }}
          className="flex flex-col py-20 text-white"
        >
          <animated.div style={leftColAnimation}>
            <form onSubmit={form.onSubmit(() => {})}>
              <TextInput
                placeholder="Full Name"
                mt="md"
                name="name"
                {...form.getInputProps("name")}
              />

              <TextInput
                placeholder="Email Address"
                mt="md"
                name="email"
                {...form.getInputProps("email")}
              />

              <SimpleGrid cols={{ base: 1, sm: 2 }} mt={`md`}>
                <TextInput
                  placeholder="Phone Number"
                  name="phone"
                  {...form.getInputProps("phone")}
                />
                <TextInput
                  placeholder="Subject"
                  name="subject"
                  {...form.getInputProps("subject")}
                />
              </SimpleGrid>

              <Textarea
                mt="md"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                {...form.getInputProps("message")}
              />

              <Group justify="center">
                <Btn
                  text="Send Message"
                  style={`bg-[#43366a] rounded-3xl hover:border-2 hover:border-accent hover:border-solid hover:text-white`}
                />
              </Group>
            </form>
          </animated.div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
