import { projects } from "@/data/projects";
import {
    Check,
    ExternalLink,
    ShieldCheck,
    Wrench,
} from "lucide-react";
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
    const featuredProject = projects.find((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Projects
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Selected Work
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Projects where I apply backend development, databases, software
                    architecture, security, testing, and modern engineering practices.
                </p>
            </div>

            {featuredProject && (() => {
                const ProjectIcon = getProjectIcon(featuredProject.icon);

                return (
                    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 p-6 transition hover:border-slate-700 md:p-10">
                        <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl transition group-hover:bg-sky-500/10" />

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-start gap-5">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-400">
                                        <ProjectIcon size={30} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                                                {featuredProject.title}
                                            </h3>

                                            <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                        Featured Project
                      </span>
                                        </div>

                                        <p className="mt-2 text-sm text-slate-500">
                                            {featuredProject.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={featuredProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-900 hover:text-white"
                                >
                                    <FaGithub size={17} />
                                    GitHub
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            <p className="max-w-4xl text-base leading-8 text-slate-400">
                                {featuredProject.description}
                            </p>

                            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                                        Core Functionality
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {featuredProject.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                            >
                                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                                                    <Check size={12} />
                                                </div>

                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                                        Technologies
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {featuredProject.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2 text-sm text-slate-300"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })()}

            {otherProjects.length > 0 && (
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {otherProjects.map((project) => {
                        const ProjectIcon = getProjectIcon(project.icon);

                        return (
                            <article
                                key={project.title}
                                className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-950/70 md:p-8"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-sky-400">
                                        <ProjectIcon size={26} strokeWidth={1.7} />
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} on GitHub`}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                </div>

                                <p className="mt-6 text-sm text-slate-500">
                                    {project.subtitle}
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="mt-6 space-y-3">
                                    {project.highlights.map((highlight) => (
                                        <div
                                            key={highlight}
                                            className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                                        >
                                            <Check
                                                size={15}
                                                className="mt-1 shrink-0 text-sky-400"
                                            />

                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-300"
                                        >
                      {technology}
                    </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300"
                                >
                                    View Repository
                                    <ExternalLink size={14} />
                                </a>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}