import { ProjectCard } from '@/components/project-card'

export default function ProjectsGrid({ projects }) {

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* for each project display a ProjectCard */}
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </>
    )
}