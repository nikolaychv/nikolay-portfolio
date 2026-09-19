import Image from "next/image";

const certificates = [
    {
        title: "Kanban Essentials with AI Certified",
        issuer: "VMEdu",
        date: "Nov 2025",
        logo: "/images/certificates/vmedu.png",
    },
    {
        title: "Scrum Fundamentals Certified (SFC)",
        issuer: "VMEdu",
        date: "Nov 2025",
        logo: "/images/certificates/vmedu.png",
    },
    {
        title: "AI Integrations for Developers",
        issuer: "SoftUni AI",
        date: "Sep 2025",
        logo: "/images/certificates/softuni-ai.jfif",
    },
    {
        title: "AI Tools for Developers",
        issuer: "SoftUni AI",
        date: "Jul 2025",
        logo: "/images/certificates/softuni-ai.jfif",
    },
    {
        title: "Databricks Fundamentals",
        issuer: "Databricks",
        date: "May 2025",
        logo: "/images/certificates/databricks.jfif",
    },
    {
        title: "AI Basics",
        issuer: "SoftUni AI",
        date: "Oct 2024",
        logo: "/images/certificates/softuni-ai.jfif",
    },
    {
        title: "IT Business Analysis Advanced",
        issuer: "Software University (SoftUni)",
        date: "Sep 2024",
        logo: "/images/certificates/softuni.png",
    },
    {
        title: "IT Business Analysis Fundamentals",
        issuer: "Software University (SoftUni)",
        date: "Jun 2024",
        logo: "/images/certificates/softuni.png",
    },
    {
        title: "Programming Basics with Python",
        issuer: "Software University (SoftUni)",
        date: "May 2024",
        logo: "/images/certificates/softuni.png",
    },
    {
        title: "Agile Advanced with Scrum",
        issuer: "Software University (SoftUni)",
        date: "Apr 2024",
        logo: "/images/certificates/softuni.png",
    },
    {
        title: "Marketing Basics",
        issuer: "SoftUni Digital",
        date: "Mar 2024",
        logo: "/images/certificates/softuni-digital.jfif",
    },
    {
        title: "QA Basics",
        issuer: "Software University (SoftUni)",
        date: "Mar 2024",
        logo: "/images/certificates/softuni.png",
    },
    {
        title: "Introduction to Cyber Security",
        issuer: "Software University (SoftUni)",
        date: "Feb 2024",
        logo: "/images/certificates/softuni.png",
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Certifications
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Certifications & Professional Development
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Certifications and professional training across software development,
                    artificial intelligence, cybersecurity, business analysis, Agile
                    methodologies, quality assurance, data, and digital technologies.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {certificates.map((certificate) => (
                    <article
                        key={`${certificate.title}-${certificate.date}`}
                        className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-950/70"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-white p-2">
                                <Image
                                    src={certificate.logo}
                                    alt={`${certificate.issuer} logo`}
                                    width={44}
                                    height={44}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-semibold leading-6 text-slate-100">
                                    {certificate.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-400">
                                    {certificate.issuer}
                                </p>

                                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-600">
                                    Issued {certificate.date}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}