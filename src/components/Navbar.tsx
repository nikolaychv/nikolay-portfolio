"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    {
        label: "Certificates",
        href: "#certificates",
        id: "certificates",
    },
    {
        label: "Volunteering",
        href: "#volunteering",
        id: "volunteering",
    },
    { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = navigation
            .map((item) => document.getElementById(item.id))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top),
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
            <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-5 py-3">
                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="shrink-0 text-base font-semibold tracking-tight text-white transition hover:text-sky-400"
                    >
                        NV
                    </a>

                    <div className="hidden items-center gap-1 xl:flex">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-lg px-3 py-2 text-sm transition ${
                                        isActive
                                            ? "bg-sky-500/10 text-sky-400"
                                            : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((current) => !current)}
                        aria-label={
                            isOpen ? "Close navigation menu" : "Open navigation menu"
                        }
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white xl:hidden"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {isOpen && (
                    <div
                        id="mobile-navigation"
                        className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-slate-800 px-3 pb-3 pt-2 xl:hidden"
                    >
                        <div className="flex flex-col">
                            {navigation.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`rounded-lg px-3 py-3 text-sm transition ${
                                            isActive
                                                ? "bg-sky-500/10 text-sky-400"
                                                : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}