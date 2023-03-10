import { VStack } from "@chakra-ui/react";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <ProjectCard
        image="/portfolio.png"
        name="Portfolio"
        link="https://github.com/lorenzoMrt/nextjs-portfolio"
      />
      <ProjectCard
        image="/issue-tracker.png"
        name="Issue tracker"
        link="https://github.com/lorenzoMrt/react-query-course"
      />
    </VStack>
  );
}
