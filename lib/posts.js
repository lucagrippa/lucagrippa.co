import fs from 'fs';
import path from 'path';
import { Octokit } from "octokit";
// import { matter } from 'gray-matter'
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');

export async function estimateReadingTime(content, wordsPerMinute = 225) {
  // Calculate the number of words in the content
  const words = content.split(/\s+/).length;

  // Calculate the estimated reading time in minutes
  const readingTime = Math.ceil(words / wordsPerMinute);

  return readingTime;
}

export async function getPosts() {
  let posts = [];

  // Octokit.js
  const octokit = new Octokit()

  // get everything in the blog github repository
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'lucagrippa',
    repo: 'blog',
    path: ''
  })
  const repo = response.data;

  // for each item check if type is file and if it is a markdown file
  for (let i = 0; i < repo.length; i++) {
    const item = repo[i];
    if (item.type === 'file' && item.name.endsWith('.md')) {
      const post = await getPost(item.path);
      posts.push(post);
    }
  }

  // reverse the order of the posts
  posts = posts.reverse();
  
  return posts
}

export async function getPost(filename) {
  const octokit = new Octokit()
  // get the file content with media type application/vnd.github.raw+json
  const fileContent = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'lucagrippa',
    repo: 'blog',
    path: filename,
    mediaType: {
      format: 'raw'
    },
    headers: {
      'cache-control': 'no-cache'
    }
  });
  const fileContentString = fileContent.data;

  // parse the file content with gray-matter
  const fileContentMatter = matter(fileContentString);
  // parse date from created field
  const date = new Date(fileContent.created);

  const post = {
    id: filename.replace(/\.md$/, '').replace(/ /g, '-'),
    title: filename.replace(/\.md$/, ''),
    filename: filename,
    content: fileContentMatter.content,
    readingTime: await estimateReadingTime(fileContentMatter.content),
    // date: date,
    ...fileContentMatter.data
    // data: fileContentMatter.data
  };

  return post;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      content: fileContents,
      // content: matterResult.content,
      // ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}