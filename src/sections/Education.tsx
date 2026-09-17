import Image from "next/image";

const education = [
    {
        institution: "Technical University of Sofia",
        degree: "Master of Engineering (MEng)",
        field: "Information Technology for Business Management",
        logo: "/images/education/tu-sofia.jpg",
    },
    {
        institution: "New Bulgarian University",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        logo: "/images/education/nbu.png",
    },
    {
        institution: "Software University (SoftUni)",
        degree: "Upskill Program",
        field: "Cyber Security, IT Business Analysis & AI",
        logo: "/images/education/softuni.png",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Education
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Academic Background
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    My academic background combines software engineering, computer
                    science, business-oriented information technology, and professional
                    upskilling.
                </p>
            </div>

            <div className="grid gap-5">
                {education.map((item) => (
                    <article
                        key={`${item.institution}-${item.field}`}
                        className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 hover:bg-slate-950/70"
                    >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-white p-2">
                                <Image
                                    src={item.logo}
                                    alt={`${item.institution} logo`}
                                    width={48}
                                    height={48}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white md:text-xl">
                                    {item.institution}
                                </h3>

                                <p className="mt-2 text-slate-300">
                                    {item.degree}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    {item.field}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}