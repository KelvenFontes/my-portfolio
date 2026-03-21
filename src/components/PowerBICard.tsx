"use client";

import Link from "next/link";

interface PowerBICardProps {
  title: string;
  description: string;
  embedUrl: string;
}

export default function PowerBICard({
  title,
  description,
  embedUrl,
}: PowerBICardProps) {
  return (
    <div className="group relative w-full rounded-2xl p-[1px] overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      <div className="relative rounded-2xl border border-yellow-400/20 bg-[#1b2942] p-5 shadow-md backdrop-blur-sm transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>

        <p className="text-zinc-300 mb-6">{description}</p>

        <div className="relative w-full pb-[56.25%] mb-4 overflow-hidden rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={embedUrl}
            allowFullScreen
          />
        </div>

        <Link
          href={embedUrl}
          target="_blank"
          className="w-full flex items-center justify-center bg-yellow-400 text-black px-4 py-3 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors"
        >
          Ver no Power BI
        </Link>
      </div>
    </div>
  );
}
