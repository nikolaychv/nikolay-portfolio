import { projects } from "@/data/projects";
import { ExternalLink, ShieldCheck, Wrench } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function getProjectIcon(icon: "automotive" | "security") {
    switch (icon) {
        case "automotive":
            return Wrench;

        case "security":
            return ShieldCheck;
    }
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Projects
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Selected Work
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Selected projects where I apply backend development, software
                    architecture, databases, security, testing, and other engineering
                    practices.
                </p>
            </div>

            <div className="grid gap-6">
                {projects.map((project) => {
                    const ProjectIcon = getProjectIcon(project.icon);

                    return (
                        <article
                            key={project.title}
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 hover:bg-slate-950/70 md:p-8"
                        >
                            <div className="absolute right-0 top-0 -z-10 h-40 w-40 rounded-full bg-sky-500/5 blur-3xl transition group-hover:bg-sky-500/10" />

                            <div className="flex flex-col gap-8 md:flex-row md:items-start">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 text-sky-400 transition group-hover:border-sky-500/30">
                                    <ProjectIcon size={30} strokeWidth={1.7} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                {project.subtitle}
                                            </p>

                                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {project.featured && (
                                            <span className="w-fit rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                        Featured
                      </span>
                                        )}
                                    </div>

                                    <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-300"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300"
                                        >
                                            <FaGithub size={18} />

                                            <span>View on GitHub</span>

                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}