export default function Navbar() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
            <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
                <a
                    href="#"
                    className="text-base font-semibold tracking-tight text-white transition hover:text-slate-300"
                >
                    NV
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    <a
                        href="#about"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="#experience"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        Experience
                    </a>

                    <a
                        href="#skills"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        Projects
                    </a>

                    <a
                        href="#education"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}