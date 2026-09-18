import { ExternalLink, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
    {
        title: "Email",
        value: "nikolayvaklev28@gmail.com",
        href: "mailto:nikolayvaklev28@gmail.com",
        icon: Mail,
    },
    {
        title: "GitHub",
        value: "nikolaychv",
        href: "https://github.com/nikolaychv",
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        value: "Nikolay Vaklev",
        href: "https://www.linkedin.com/in/nikolay-vaklev-59095623b/",
        icon: FaLinkedin,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Contact
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Let&apos;s Connect
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                    If you would like to discuss a project, a software engineering
                    opportunity, or simply connect, feel free to reach out.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    <span>Sofia, Bulgaria</span>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {contactLinks.map((contact) => {
                    const ContactIcon = contact.icon;

                    return (
                        <a
                            key={contact.title}
                            href={contact.href}
                            target={contact.title === "Email" ? undefined : "_blank"}
                            rel={
                                contact.title === "Email"
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-950/70"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-sky-400">
                                    <ContactIcon size={21} />
                                </div>

                                <ExternalLink
                                    size={16}
                                    className="text-slate-600 transition group-hover:text-sky-400"
                                />
                            </div>

                            <p className="mt-6 text-sm text-slate-500">
                                {contact.title}
                            </p>

                            <p className="mt-1 font-medium text-slate-200 transition group-hover:text-white">
                                {contact.value}
                            </p>
                        </a>
                    );
                })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:flex md:items-center md:justify-between md:p-8">
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Have something in mind?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                        The easiest way to reach me directly is by email.
                    </p>
                </div>

                <a
                    href="mailto:nikolayvaklev28@gmail.com"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400 md:mt-0"
                >
                    <Mail size={18} />
                    Send Email
                </a>
            </div>
        </section>
    );
}