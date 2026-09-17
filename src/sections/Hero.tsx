import { MapPin } from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws, FaDocker, FaGithub, FaJava, FaLinkedin } from "react-icons/fa";
import { SiPostgresql, SiSpringboot } from "react-icons/si";

type Technology = {
    name: string;
    icon: IconType;
};

const technologies: Technology[] = [
    {
        name: "Java",
        icon: FaJava,
    },
    {
        name: "Spring Boot",
        icon: SiSpringboot,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
    {
        name: "Docker",
        icon: FaDocker,
    },
    {
        name: "AWS",
        icon: FaAws,
    },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%)]" />

            <div className="absolute left-1/2 top-0 -z-10 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-4xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                        Software Engineer
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Nikolay Vaklev
                    </h1>

                    <h2 className="mt-5 text-2xl font-medium text-slate-300 md:text-3xl">
                        Java Backend Developer
                    </h2>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} />
                        <span>Sofia, Bulgaria</span>
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                        Building reliable backend applications, APIs, and scalable software
                        systems with a focus on clean architecture, maintainability, and
                        modern engineering practices.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => {
                            const TechnologyIcon = technology.icon;

                            return (
                                <span
                                    key={technology.name}
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-900"
                                >
                  <TechnologyIcon
                      size={17}
                      className="text-sky-400"
                      aria-hidden="true"
                  />

                                    {technology.name}
                </span>
                            );
                        })}
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="rounded-lg bg-sky-500 px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-sky-400"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-slate-700 px-6 py-3 text-center font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="https://github.com/nikolaychv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nikolay-vaklev-59095623b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}