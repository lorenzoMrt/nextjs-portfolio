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
        👋 Hi! My names Lorenzo. I have been a software engineer over the last 4
        years, with high proficiency in backend and frontend and some knowledge
        on DevOps. I love video games, sports, and learning new things everyday.{" "}
        <br /> Lets connect 👇
      </Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="https://www.linkedin.com/in/lorenzo-miret/" target="_blank">
          <Icon color="black" as={FaLinkedin} />
        </Link>
        <Link href="https://github.com/lorenzoMrt" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
        <Link href="/cv.pdf" target="_blank">
          <Icon color="black" as={FaFilePdf}></Icon>
        </Link>
      </HStack>
    </VStack>
  );
}
