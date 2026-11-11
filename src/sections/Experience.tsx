import Image from "next/image";

const experiences = [
    {
        role: "Software Engineer",
        company: "Experian",
        location: "Sofia, Bulgaria",
        period: "Apr 2023 — Present",
        logo: "/images/experience/experian.png",
        description:
            "Developing and maintaining enterprise software, backend services, and distributed system integrations in an international software engineering environment.",
        responsibilities: [
            "Develop and maintain enterprise backend applications and microservices using Java, Spring Boot, and Quarkus.",
            "Design, implement, and integrate RESTful and SOAP APIs for communication between distributed systems.",
            "Build and maintain persistence layers using Hibernate and JPA, working with Oracle Database.",
            "Contribute to microservices architecture and system design using SOLID principles, design patterns, and clean code practices.",
            "Work with AWS, Docker, Kubernetes, Terraform, and Jenkins to support deployment, infrastructure, and CI/CD processes.",
            "Develop automated unit and integration tests using JUnit and Mockito, and participate in code reviews, technical discussions, and Agile development processes.",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "Quarkus",
            "REST",
            "SOAP",
            "Microservices",
            "Hibernate",
            "JPA",
            "Oracle Database",
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Jenkins",
            "JUnit",
            "Mockito",
        ],
        primary: true,
    },
    {
        role: "Shop Assistant",
        company: "Jumbo SA",
        location: "Sofia, Bulgaria",
        period: "Jun 2021 — Apr 2022",
        logo: "/images/experience/jumbo.png",
        description:
            "Worked across customer service, cashier operations, merchandising, and warehouse activities in a high-volume retail environment.",
        responsibilities: [
            "Managed and organized products across multiple store departments.",
            "Operated the cashier system and handled customer payments.",
            "Assisted customers and supported day-to-day store operations.",
            "Organized product displays and maintained visual presentation standards.",
            "Supported warehouse activities, including organizing and handling goods.",
        ],
        technologies: [
            "Customer Service",
            "Cash Register Operations",
            "Merchandising",
            "Retail Operations",
            "Warehouse Operations",
        ],
        primary: false,
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Experience
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Professional Experience
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Professional experience spanning software engineering, enterprise
                    backend development, system integration, and customer-facing
                    environments.
                </p>
            </div>

            <div className="relative border-l border-slate-800 pl-8">
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.role}`}
                            className={`group relative rounded-2xl border p-6 transition md:p-8 ${
                                experience.primary
                                    ? "border-slate-700 bg-slate-950/60 hover:border-slate-600"
                                    : "border-slate-800 bg-slate-950/40 hover:border-slate-700"
                            }`}
                        >
                            <div
                                className={`absolute -left-[38px] top-8 h-3 w-3 rounded-full border-2 ${
                                    experience.primary
                                        ? "border-sky-400 bg-[#0a0f1c]"
                                        : "border-slate-600 bg-[#0a0f1c]"
                                }`}
                            />

                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-white p-2">
                                        <Image
                                            src={experience.logo}
                                            alt={`${experience.company} logo`}
                                            width={44}
                                            height={44}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-xl font-semibold text-white md:text-2xl">
                                                {experience.role}
                                            </h3>

                                            {experience.primary && (
                                                <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                          Current
                        </span>
                                            )}
                                        </div>

                                        <p className="mt-1 text-base text-sky-400">
                                            {experience.company}
                                        </p>

                                        <p className="mt-2 text-sm text-slate-500">
                                            {experience.location}
                                        </p>
                                    </div>
                                </div>

                                <p className="shrink-0 text-sm text-slate-500">
                                    {experience.period}
                                </p>
                            </div>

                            <p className="mt-6 max-w-4xl leading-7 text-slate-400">
                                {experience.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {experience.responsibilities.map((responsibility) => (
                                    <li
                                        key={responsibility}
                                        className="flex gap-3 text-sm leading-6 text-slate-400 md:text-base"
                                    >
                    <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            experience.primary ? "bg-sky-400" : "bg-slate-600"
                        }`}
                    />

                                        <span>{responsibility}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {experience.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-400"
                                    >
                    {technology}
                  </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}