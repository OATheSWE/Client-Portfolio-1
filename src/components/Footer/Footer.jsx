// import { Text, Container, Group, Image } from "@mantine/core";
// import classes from "./Footer.module.css";
// import { IconImports } from "../../assets/IconImports";
// import { ImageCollection } from "../../assets/images";
// import styles from "../../constants";
// import { Partners } from "../Portfolio";

// const data = [
//   {
//     title: "Quick Links",
//     links: [
//       { label: "Features", link: "#" },
//       { label: "Store", link: "#" },
//       { label: "Privacy Policy", link: "#" },
//       { label: "Shopping & Refund", link: "#" },
//     ],
//   },
//   {
//     title: "Contact",
//     links: [
//       { label: "55 Agboyi Road, Ogudu, Ori-oke, Ogudu, 105102, Ikeja, Lagos Nigeria", link: "#" },
//       { label: "+234 806 733 6920", link: "#" },
//       { label: "info@bmdsconcept.com", link: "#" },
//     ],
//   },
// ];

// const socialIcons = [
//   { icon: <IconImports.FaFacebookF className="w-5 h-5" />, id: 1 },
//   { icon: <IconImports.FaXTwitter className="w-5 h-5" />, id: 2 },
//   { icon: <IconImports.FaInstagram className="w-5 h-5" />, id: 3 },
//   { icon: <IconImports.FaLinkedinIn className="w-5 h-5" />, id: 4 },
// ];

// export default function Footer() {
//   const groups = data.map((group) => {
//     const links = group.links.map((link, index) => (
//       <a
//         key={index}
//         className={classes.link}
//         href={link.link}
//         onClick={(event) => event.preventDefault()}
//       >
//         {link.label}
//       </a>
//     ));

//     return (
//       <div className={classes.wrapper} key={group.title}>
//         <Text className={classes.title}>{group.title}</Text>
//         {links}
//       </div>
//     );
//   });

//   const socials = socialIcons.map((icon) => (
//     <a
//       href="#"
//       className="w-[35px] h-[35px] flex justify-center items-center bg-secondary rounded-full hover:bg-accent hover:text-white transition duration-300"
//       key={icon.id}
//     >
//       {icon.icon}
//     </a>
//   ));

//   return (
//     <footer className={`${classes.footer} ${styles.body} flex-1 relative z-50 items-center lg:block flex flex-col`}>
//       <Partners />
//       <Container px={0} className={classes.inner}>
//         <div className={classes.logo}>
//           <a href="#">
//             <Image
//               src={ImageCollection.Logo}
//               className="max-w-[200px] object-cover"
//             />
//           </a>
//           <Text size="lg" className={classes.description}>
//             Connecting Creativity
//           </Text>
//         </div>
//         <div className={classes.groups}>{groups}</div>
//       </Container>
//       <Container className={classes.afterFooter}>
//         <Text c="dimmed" size="sm">
//         Copyright 2023 © BMD Solutions Concept | All Rights Reserved | Designed by GWL Branding Services
//         </Text>

//         <Group
//           gap={0}
//           className={`${classes.social} flex space-x-4`}
//           justify="flex-end"
//           wrap="nowrap"
//         >
//           {socials}
//         </Group>
//       </Container>
//     </footer>
//   );
// }


import React from 'react'

export default function Footer() {
  return (
    <div>Footer</div>
  )
}
