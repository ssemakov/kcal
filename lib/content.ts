import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir: string = path.join(process.cwd(), "content");

export interface ContentData {
  contentHtml: string;
  title: string;
}

export async function getContent(name: string): Promise<ContentData> {
  const fullPath = path.join(contentDir, `${name}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    ...(matterResult.data as { title: string }),
    contentHtml,
  };
}
