import ProjectsGrid from '@/components/projects-grid'
import { getProjects } from '@/lib/projects'

export default async function Projects() {
    const projects = await getProjects()

    return (
        <>
            <h1 className="my-4 sm:my-8 text-3xl sm:text-4xl font-bold">Projects</h1>
            <ProjectsGrid projects={projects} />
        </>
    )
}
