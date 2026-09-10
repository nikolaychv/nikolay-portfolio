import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 md:p-8"
                    >
                        {project.featured && (
                            <div className="absolute right-6 top-6">
                <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                  Featured
                </span>
                            </div>
                        )}

                        <div className="max-w-4xl">
                            <p className="text-sm text-slate-500">
                                {project.subtitle}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                                {project.title}
                            </h3>

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
                    </article>
                ))}
            </div>
        </section>
    );
}