import Link from 'next/link'

export async function BlogPost({ post }) {

    return (
        <div  className="flex justify-between items-center border-b-2 my-1 text-base font-medium">
            <Link className="no-underline hover:underline" href={`/blog/${post.id}`}>{post.title}</Link>
            {/* <p className="font-mono font-thin text-sm text-blue-500 ">{post.date}</p> */}
            <p className="font-mono  text-sm text-destructive ">{new Date(post.created).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        </div>
    )
}