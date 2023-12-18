import { Textarea, SimpleGrid, Group, Grid, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { styles, contactInfo } from "../../data";
import Btn from "../Button";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import "./Contact.css";
import Heading from "../Heading";
import TextField from "../TextField";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState();
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
    threshold: 0.4,
    triggerOnce: true,
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

  const SendEmail = async (values) => {
   
    // If all fields are filled, use Mantine's validation
    if (!form.isValid) {
      // Show validation errors and return without sending email
      setMsg(1);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        "service_2gtd918",
        "template_iu1tbcb",
        values,
        "J3mNgEZxGKtD-N8E_",
        // Add the user's email as the recipient
        values.email
      );

      // Show success message
      // setForm({ message: "Your message has been sent successfully!" });
      setMsg(true);
      console.log("hello");
    } catch (error) {
      console.error(error);
      // Show error message
      // setForm({ message: "Oops! Something went wrong. Please try again later." });
      setMsg(false);
      console.log("he");
    }
  };

  return (
    <section
      id="hire-me"
      ref={ref}
      className={`w-full ${styles.body} bg-secondary pt-6`}
    >
      <Heading name="Contact" />
      <Grid gutter={60} className={`font-sans`} pr={`sm`}>
        <Grid.Col
          span={{ base: 12, sm: 5.5 }}
          className="flex justify-center flex-col items-center"
        >
          <animated.div
            style={rightColAnimation}
            className={`space-y-4 mt-10 md:mt-10`}
          >
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
          span={{ base: 12, sm: 6.4 }}
          className="flex flex-col py-20 text-white ml-0.5"
        >
          <animated.div style={leftColAnimation}>
            <form
             onSubmit={SendEmail}
            >
              {/* Use TextField component for each input */}
              <TextField
                placeholder="Full Name"
                name="name"
                form={form}
                md="md"
              />
              <TextField
                placeholder="Email Address"
                name="email"
                form={form}
                md="md"
              />

              <SimpleGrid cols={{ base: 1, sm: 2 }} mt={`md`}>
                <TextField
                  placeholder="Phone Number"
                  name="phone"
                  form={form}
                />
                <TextField placeholder="Subject" name="subject" form={form} />
              </SimpleGrid>

              <Textarea
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                form={form}
                mt={20}
                className=""
              />

              <Group justify="center">
                <Btn
                  text="Send Message"
                  style={`bg-[#43366a] rounded-3xl hover:border-2 hover:border-accent hover:border-solid hover:text-white`}
                  xl="xl"
                />
              </Group>

              <input type="submit" value="Send" />

              {/* Display the text if the form has been submitted successfully */}
              {msg === true && (
                <Text className="text-accent mt-2">
                  Your message has been sent successfully!
                </Text>
              )}

              {msg === 1 && (
                <Text className="text-accent mt-2">
                  Invalid form input form.
                </Text>
              )}

              {/* Display the text if the form wasnt submitted successfully */}
              {msg === false && (
                <Text className="text-accent mt-2">
                  Oops! Something went wrong. Please try again later.
                </Text>
              )}
            </form>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
