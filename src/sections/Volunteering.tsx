import Image from "next/image";

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
                    Contributing to technology communities and events beyond my
                    professional and academic work.
                </p>
            </div>

            <article className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 transition hover:border-slate-700 hover:bg-slate-950/70 md:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-white p-2">
                        <Image
                            src="/images/volunteering/jstalks.jpg"
                            alt="js.talks() logo"
                            width={48}
                            height={48}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="max-w-3xl">
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                            Volunteer
                        </h3>

                        <p className="mt-1 text-base text-sky-400">
                            js.talks();
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Science and Technology
                        </p>

                        <p className="mt-6 leading-7 text-slate-400">
                            Provided on-site support during js.talks(), one of the major
                            JavaScript events in Bulgaria, contributing to event logistics
                            and helping ensure smooth operations throughout the day.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}