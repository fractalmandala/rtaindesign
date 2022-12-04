import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useState } from 'react'
import supabase from '../lib/supaclient'
import Gretil from '../components/gretil'
import styles from './modules/gretil.module.css'

const filesDirectory = path.join(process.cwd(), 'files')

export function getSortedFilesData() {
  const fileNames = fs.readdirSync(filesDirectory)
  const allFilesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(filesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allFilesData
}

export function getAllFileIds() {
  const fileNames = fs.readdirSync(filesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getFileData(id) {
  const fullPath = path.join(filesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}