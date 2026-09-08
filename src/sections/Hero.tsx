export default function Hero() {
    const technologies = [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "AWS",
    ];

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%)]" />

            <div className="absolute left-1/2 top-0 -z-10 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-4xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                        Software Engineer
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Nikolay
                    </h1>

                    <h2 className="mt-5 text-2xl font-medium text-slate-300 md:text-3xl">
                        Java Backend Developer
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                        Building reliable backend applications, APIs, and scalable software
                        systems with a focus on clean architecture, maintainability, and
                        modern engineering practices.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-slate-800 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-400"
                            >
                {technology}
              </span>
                        ))}
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
                </div>
            </div>
        </section>
    );
}