import {
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import getLocalMdx from "@components/utils/getLocalMdx";
import Link from "next/link";

export default function BlogPage({ posts }: { posts: any }) {
  return (
    <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
      {posts.map((post: any) => (
        <LinkBox
          mt={6}
          p={8}
          border="1px solid black"
          borderRadius="8px"
          as="article"
          key={post.slug}
        >
          <VStack>
            <Link href={`/posts/${post.slug}`} passHref>
              <LinkOverlay>
                <Heading>{post.title}</Heading>
              </LinkOverlay>
            </Link>
            <Text>{post.description}</Text>
          </VStack>
        </LinkBox>
      ))}
    </Stack>
  );
}

export async function getStaticProps() {
  const posts = await getLocalMdx("./posts");
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      posts: allMdx,
    },
  };
}
