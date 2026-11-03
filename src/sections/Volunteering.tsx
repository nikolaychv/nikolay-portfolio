import Image from "next/image";

const volunteering = [
    {
        organization: "AI Stack Conf",
        role: "Volunteer",
        category: "Science and Technology",
        logo: "/images/volunteering/aistackconf.png",
        description:
            "Volunteered at AI Stack Conf, a conference exploring artificial intelligence and its impact across different professional fields. Assisted the organizing team with on-site activities, attendee guidance, and general event support, contributing to the successful execution of the conference.",
    },
    {
        organization: "Full Stack Conf",
        role: "Volunteer",
        category: "Science and Technology",
        logo: "/images/volunteering/fullstackconf.png",
        description:
            "Contributed as an on-site volunteer at Full Stack Conf, a technology conference focused on full-stack development and modern software engineering. Supported the event organizers with attendee assistance and on-site logistics, helping ensure a smooth and welcoming conference experience.",
    },
    {
        organization: "Data Stack Conf",
        role: "Volunteer",
        category: "Science and Technology",
        logo: "/images/volunteering/datastackconf.jpg",
        description:
            "Provided on-site volunteer support during Data Stack Conf, a technology conference focused on modern data infrastructure, assisting the organizing team with attendee coordination and event logistics to ensure smooth operations throughout the conference.",
    },
    {
        organization: "js.talks();",
        role: "Volunteer",
        category: "Science and Technology",
        logo: "/images/volunteering/jstalks.jpg",
        description:
            "Provided on-site support during js.talks(), one of the major JavaScript events in Bulgaria, contributing to event logistics and helping ensure smooth operations throughout the day.",
    },
];

export default function Volunteering() {
    return (
        <section
            id="volunteering"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Volunteering
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Community Involvement
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    Supporting technology conferences and communities beyond my
                    professional and academic work.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {volunteering.map((experience) => (
                    <article
                        key={experience.organization}
                        className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-950/70 md:p-7"
                    >
                        <div className="flex items-start gap-5">
                            <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-2">
                                <Image
                                    src={experience.logo}
                                    alt={`${experience.organization} logo`}
                                    width={80}
                                    height={52}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-white">
                                    {experience.role}
                                </h3>

                                <p className="mt-1 text-base font-medium text-sky-400">
                                    {experience.organization}
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    {experience.category}
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 leading-7 text-slate-400">
                            {experience.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}