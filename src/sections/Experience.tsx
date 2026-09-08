const responsibilities = [
    "Backend development with Java and related enterprise technologies",
    "Development and integration of APIs and backend services",
    "Working with databases and enterprise system integrations",
    "Participation in software delivery, testing, and deployment processes",
];

const technologies = [
    "Java",
    "Spring Boot",
    "Quarkus",
    "Docker",
    "AWS",
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Experience
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Professional Experience
                </h2>
            </div>

            <div className="relative border-l border-slate-800 pl-8">
                <div className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2 border-sky-400 bg-[#0a0f1c]" />

                <article className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-white md:text-2xl">
                                Software Engineer
                            </h3>

                            <p className="mt-1 text-base text-sky-400">
                                Experian
                            </p>
                        </div>

                        <p className="text-sm text-slate-500">
                            2023 — Present
                        </p>
                    </div>

                    <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                        Working on backend software development and enterprise systems,
                        contributing to reliable applications, integrations, and software
                        delivery processes.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {responsibilities.map((responsibility) => (
                            <li
                                key={responsibility}
                                className="flex gap-3 text-sm leading-6 text-slate-400 md:text-base"
                            >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />

                                <span>{responsibility}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-400"
                            >
                {technology}
              </span>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}