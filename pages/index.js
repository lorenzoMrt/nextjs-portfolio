// /pages/index.js

/*

	Make sure you swap out my information with your own! 
	We want to be ready to ship by the end of the workshop 👀

	- Name
	- Title
	- Image (if you'd like) -> put this in the public folder
	- Bio 
	- Twitter link (if you have one)
	- Github link

*/

import {
  Avatar,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <VStack align="center" gap="32px" justify="center">
      <Avatar src="/Lorenzo.png" size="2xl" />
      <VStack>
        <Heading as="h1">Lorenzo Miret</Heading>
        <Heading size="md" as="h3">
          Software Engineer
        </Heading>
      </VStack>
      <Text textAlign="center">
        👋 Hi! My names Lorenzo. As a seasoned full stack developer with over 4
        years of experience, I have honed my skills in Java, Springboot, React,
        TypeScript and AWS services. My work in startups and medium companies
        has provided me with a diverse range of experience and the ability to
        work effectively in fast-paced environments. I am a self-starter with a
        passion for developing scalable and efficient solutions, and I am eager
        to bring my expertise to a new challenge as a full stack developer.
        <br /> Lets connect 👇
      </Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="https://www.linkedin.com/in/lorenzo-miret/" target="_blank">
          <Icon color="black" as={FaLinkedin} />
        </Link>
        <Link href="https://github.com/lorenzoMrt" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
        <Link href="/cv-2023.pdf" target="_blank">
          <Icon color="black" as={FaFilePdf}></Icon>
        </Link>
      </HStack>
    </VStack>
  );
}
