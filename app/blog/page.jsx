import Link from 'next/link'

import { BlogPost } from '@/components/blog-post'
import { BlogPostCard } from '@/components/blog-post-card'
import { getSortedPostsData, getPosts } from '@/lib/posts'

import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function BlogPosts() {
    // const posts = getSortedPostsData();
    const posts = await getPosts();
    // console.log(posts);

    return (
        <>
            <h1 className="my-4 sm:my-8 text-3xl sm:text-4xl font-bold">Posts</h1>
            <section className="flex flex-col">
                {/* display each post a group them by the year and have a header that says each year that the group is */}
                {posts.map((post) => (
                    <BlogPost key={post.id} className=""  post={post} />
                ))}
            </section>
        </>
    )
}

