export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-6xl px-6 py-24"
        >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 md:p-12">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
                    Contact
                </p>

                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Let&apos;s get in touch
                </h2>

                <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                    If you would like to discuss a project, an opportunity, or simply
                    connect, feel free to reach out.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="mailto:your-email@example.com"
                        className="rounded-lg bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-slate-200"
                    >
                        Send Email
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-700 px-6 py-3 text-center font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}