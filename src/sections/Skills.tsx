import type { IconType } from "react-icons";
import { FaAws, FaDocker, FaJava } from "react-icons/fa";
import {
    SiJenkins,
    SiKubernetes,
    SiPostgresql,
    SiPostman,
    SiSpring,
    SiSpringboot,
} from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
    Java: FaJava,
    "Spring Framework": SiSpring,
    "Spring Boot": SiSpringboot,
    PostgreSQL: SiPostgresql,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    AWS: FaAws,
    Jenkins: SiJenkins,
    Postman: SiPostman,
};

const skillGroups = [
    {
        number: "01",
        title: "Backend",
        description: "Backend development and enterprise application architecture.",
        skills: [
            "Java",
            "Spring Framework",
            "Spring Boot",
            "Quarkus",
            "Hibernate",
            "REST APIs",
        ],
    },
    {
        number: "02",
        title: "Databases",
        description: "Relational databases, persistence, and schema management.",
        skills: [
            "PostgreSQL",
            "Oracle Database",
            "SQL",
            "Liquibase",
        ],
    },
    {
        number: "03",
        title: "Cloud & DevOps",
        description: "Containerization, deployment, CI/CD, and cloud environments.",
        skills: [
            "Docker",
            "Kubernetes",
            "Helm",
            "AWS",
            "Jenkins",
        ],
    },
    {
        number: "04",
        title: "Testing",
        description: "Automated testing and API verification.",
        skills: [
            "Unit Testing",
            "JUnit",
            "Mockito",
            "API Testing",
            "Postman",
            "SoapUI",
        ],
    },
    {
        number: "05",
        title: "Security",
        description: "Authentication and authorization technologies and concepts.",
        skills: [
            "JWT",
            "OAuth2",
            "Keycloak",
        ],
    },
    {
        number: "06",
        title: "Integration",
        description: "Backend services and enterprise system integrations.",
        skills: [
            "RESTful Web Services",
            "SOAP",
            "Microservices",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Skills
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Technologies I Work With
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Technologies and tools I use across backend development, databases,
                    cloud environments, testing, security, and system integration.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <article
                        key={group.title}
                        className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 hover:bg-slate-950/70"
                    >
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-100">
                                    {group.title}
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    {group.description}
                                </p>
                            </div>

                            <span className="font-mono text-xs text-slate-600 transition group-hover:text-sky-400">
                {group.number}
              </span>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {group.skills.map((skill) => {
                                const TechnologyIcon = technologyIcons[skill];

                                return (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-900"
                                    >
                    {TechnologyIcon && (
                        <TechnologyIcon
                            size={17}
                            className="text-sky-400"
                            aria-hidden="true"
                        />
                    )}

                                        {skill}
                  </span>
                                );
                            })}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}