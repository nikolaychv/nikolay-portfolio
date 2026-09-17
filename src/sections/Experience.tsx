import Image from "next/image";

const responsibilities = [
    "Backend software development with Java and enterprise technologies",
    "Development and maintenance of REST and SOAP-based services",
    "Working with microservices and enterprise system integrations",
    "Unit testing and API testing as part of the software development lifecycle",
];

const technologies = [
    "Java",
    "Spring Framework",
    "Quarkus",
    "REST",
    "SOAP",
    "Microservices",
    "Oracle Database",
    "Unit Testing",
    "API Testing",
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

                <article className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 hover:bg-slate-950/70 md:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-white p-2">
                                <Image
                                    src="/images/experience/experian.png"
                                    alt="Experian logo"
                                    width={44}
                                    height={44}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white md:text-2xl">
                                    Software Engineer
                                </h3>

                                <p className="mt-1 text-base text-sky-400">
                                    Experian
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    Sofia, Bulgaria
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500">
                            Apr 2023 — Present
                        </p>
                    </div>

                    <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                        Working on Java-based enterprise software, backend services, and
                        system integrations as part of an international software
                        engineering environment.
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