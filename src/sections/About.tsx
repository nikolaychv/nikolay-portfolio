const focusAreas = [
    "Backend Development",
    "REST APIs",
    "Cloud & DevOps",
    "Application Security",
];

export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
                <div>
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                        About
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Building reliable backend systems
                    </h2>

                    <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-400 md:text-lg">
                        <p>
                            I am a Java Backend Developer focused on building reliable,
                            maintainable, and scalable software applications.
                        </p>

                        <p>
                            My work and interests are centered around backend development,
                            APIs, databases, distributed systems, cloud technologies, DevOps,
                            and application security.
                        </p>

                        <p>
                            I enjoy understanding how systems work behind the scenes,
                            designing clean solutions, and continuously improving both my
                            technical knowledge and software engineering practices.
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                        Main Focus
                    </p>

                    <div className="mt-5 flex flex-col gap-3">
                        {focusAreas.map((area) => (
                            <div
                                key={area}
                                className="rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-300"
                            >
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}