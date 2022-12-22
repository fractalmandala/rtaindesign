import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

const soaDirectory = path.join(process.cwd(), 'soa')

export function getSortedSoaData() {
  const fileNames = fs.readdirSync(soaDirectory)
  const allSoaData = fileNames.map(fileName => {
  const id = fileName.replace(/\.md$/, '')
  const fullPath = path.join(soaDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  
  return {
    id,
    ...matterResult.data
  }
  })
  return allSoaData
}

export function getAllSoaIds() {
  const fileNames = fs.readdirSync(soaDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getSoaData(id) {
  const fullPath = path.join(soaDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}