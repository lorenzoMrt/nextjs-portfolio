import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";

export default function CertificateCard({ image, name }) {
  return (
    <Card>
      <CardHeader>
        <Image
          borderRadius="8px"
          boxShadow="lg"
          width="full"
          src={image}
          alt="A screenshot of the certificate"
        />
      </CardHeader>
      <CardBody>
        <Text>{name}</Text>
      </CardBody>
    </Card>
  );
}
