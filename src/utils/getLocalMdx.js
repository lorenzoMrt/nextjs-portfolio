import glob from "fast-glob";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export default async function getLocalMdx(source) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);
  if (!files.length) return [];
  // What is Promise.all doing here? Why do we need it when interacting with the filesystem
  const content = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "");

      const mdxSource = await fs.readFile(filepath);

      // What is next-mdx-remote and gray-matter doing to the data from above?
      const { content, data } = matter(mdxSource);
      const mdx = await serialize(content, { scope: data });

      return {
        filepath,
        slug,
        content,
        data,
        mdx,
      };
    })
  );
  return content;
}
