export default function Footer() {
    return (
        <footer className="border-t border-slate-800">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © 2026 Nikolay. All rights reserved.
                </p>

                <p>
                    Built with Next.js, TypeScript and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}