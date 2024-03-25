import Image from 'next/image'
import Link from 'next/link'

import { CreateAccount } from '@/components/create-account'
import { Github, Linkedin } from 'lucide-react'

import { BlogPost } from '@/components/blog-post'
import { getSortedPostsData, getPosts } from '@/lib/posts'
import ProjectsGrid from '@/components/projects-grid'
import { getProjects } from '@/lib/projects'


export default async function Home() {
  const projects = await getProjects()
  // const posts = getSortedPostsData();
  const posts = await getPosts();

  return (
    <>
      <section>
        <h1 className="my-6 sm:my-8 text-3xl sm:text-4xl font-bold">Software Engineer and Researcher</h1>
        <p className="my-3 sm:my-4 text-base">Hi I'm Luca, a software engineer and researcher based in New York City, specializing in cybersecurity research and leveraging large language models to drive innovation. </p>
        <div className="flex space-x-4">
            <Link href={process.env.NEXT_PUBLIC_GITHUB}>
              <Github className="" size={22} strokeWidth={1} />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_LINKEDIN}>
              <Linkedin className="" size={22} strokeWidth={1} />
            </Link>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 space-y-2">
        <h1 className="my-6 sm:my-8 text-2xl sm:text-3xl font-bold">Latest Posts</h1>
        {/* display the first 3 projects in a projects grid */}
        {posts.map((post) => (
            <BlogPost className="" key={post.id} post={post} />
        ))}
      </section>

      <section className="mt-12 sm:mt-16">
        <h1 className="my-6 sm:my-8 text-2xl sm:text-3xl font-bold">Projects</h1>
        {/* display the first 3 projects in a projects grid */}
        <ProjectsGrid projects={projects.slice(0, 3)} />
      </section>
    </>
  )
}
