import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 md:p-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                    Contact
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Let&apos;s get in touch
                </h2>

                <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                    If you would like to discuss a project, an opportunity, or simply
                    connect, feel free to reach out.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="mailto:nwaklev@gmail.com"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
                    >
                        <Mail size={18} />
                        Send Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nikolay-vaklev-59095623b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                    >
                        <FaLinkedin size={18} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}