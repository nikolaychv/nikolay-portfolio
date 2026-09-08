const projects = [
    {
        title: "Mechano",
        description:
            "Automotive service platform for connecting vehicle owners with repair shops and managing bookings, reviews, and service-related data.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "PostgreSQL",
            "Liquibase",
            "Docker",
        ],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
                    Projects
                </p>

                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Featured Projects
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="rounded-xl border border-slate-800 bg-slate-950/40 p-6"
                    >
                        <h3 className="text-xl font-semibold text-slate-100">
                            {project.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-400">
                            {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-slate-800 px-3 py-1.5 text-sm text-slate-400"
                                >
                  {technology}
                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}