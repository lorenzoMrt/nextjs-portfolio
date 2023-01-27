import { VStack } from "@chakra-ui/react";
import CertificateCard from "@components/CertificateCard";

export default function Certificates() {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <CertificateCard
        image="/certificates/react-hooks-certificate.png"
        name="React Hooks"
      />
      <CertificateCard
        image="/certificates/react-query-certificate.png"
        name="React Query"
      />
    </VStack>
  );
}
