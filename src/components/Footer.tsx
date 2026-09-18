import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-300">
                        Nikolay Vaklev
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Software Engineer · Java Backend Developer
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/nikolaychv"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nikolay-vaklev-59095623b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>

            <div className="border-t border-slate-900">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Nikolay Vaklev. All rights reserved.
                    </p>

                    <p>
                        Built with Next.js, TypeScript and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}