import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const textsDirectory = path.join(process.cwd(), 'repository');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(textsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(textsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}