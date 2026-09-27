import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <p className="label flex justify-between border-b-2 border-ink p-4 md:px-8">
        <span>Error</span>
        <span className="text-mute">Page not found</span>
      </p>
      <div className="flex flex-col justify-end p-4 md:p-8">
        <h1 className="font-narrow text-[clamp(8rem,40vw,34rem)] font-black leading-[0.8] tracking-[-0.03em]">
          404<span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-prose text-xl">This page doesn&apos;t exist, or it moved.</p>
      </div>
      <Link
        href="/"
        className="flex items-center justify-between border-t-2 border-ink bg-ink p-4 text-lg font-bold text-paper hover:bg-signal hover:text-ink md:p-8"
      >
        Back to the homepage
        <span aria-hidden="true">←</span>
      </Link>
    </main>
  );
}
