import Link from 'next/link'

import { Star, Github } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function BlogPostCard({ post }) {

    return (<>
        <Link href={`/blog/${post.id}`}>
            <Card className="flex flex-col bg-background border-background shadow-none hover:bg-card hover:border-border hover:shadow justify-between">
                <CardHeader className="space-y-1">
                    <div className="flex flex-row justify-between items-center">
                        <CardTitle className="text-lg whitespace-nowrap"><Link href={`/blog/${post.id}`}>{post.title}</Link></CardTitle>
                        {/* <Badge className="max-w-max text-xs rounded-full" variant="success" >{project.language}</Badge> */}
                        <p className="">Feb 9, 2022</p>
                    </div>
                    <p className="text-sm">{post.readingTime} min read</p>
                    {/* <p className="">{post.created} · {post.readingTime} min read</p> */}
                </CardHeader>
            </Card>
        </Link>
    </>
    )
}