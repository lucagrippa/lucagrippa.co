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

export function ProjectCard({ project }) {

    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="space-y-1">
                <div className="flex items-center justify-between text-muted-foreground font-mono">
                    {/* convert created_at date to year format */}
                    <span className="">
                        {new Date(project.created_at).getFullYear()}
                    </span>
                    <a className="flex items-center" href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${project.name}/stargazers`}>
                        {project.stargazers}
                        <Star className="ml-1 text-success" size={18} strokeWidth={2} />
                    </a>
                </div>
                <CardTitle className="text-lg whitespace-nowrap"><Link href={project.html_url}>{project.name}</Link></CardTitle>
                {(project.language) ? <Badge className="max-w-max text-xs rounded-full" variant="success" >{project.language}</Badge> : null}            </CardHeader>
            <CardContent className="text-base">
                {/* return the first 130 characters of the project.description, if the desription is longer add "..." */}
                {project.description.length > 75
                    ? project.description.substring(0, 75) + "..."
                    : project.description}
            </CardContent>
            <CardFooter className="space-x-4">
                {project.post !== "" && (
                    <Link href={project.post}>
                        <Button className="text-sm rounded-full bg-success hover:bg-success/90 text-success-foreground" > Blog Post </Button>
                    </Link>
                )}

                {project.demo !== "" && (
                    <Link href={project.demo}>
                        <Button className="text-sm rounded-full bg-success hover:bg-success/90 text-success-foreground"> Demo </Button>
                    </Link>

                )}

                <Link href={project.html_url}>
                    <Button className="text-sm rounded-full bg-success hover:bg-success/90 text-success-foreground" >
                        <Github className="mr-1" size={18} strokeWidth={1} />
                        Source
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}