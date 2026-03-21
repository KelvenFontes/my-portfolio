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
    <div className="w-full bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      <p className="text-zinc-400 mb-6">{description}</p>

      <div className="relative w-full pb-[56.25%] mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={embedUrl}
          allowFullScreen
        />
      </div>

      <Link
        href={embedUrl}
        target="_blank"
        className="w-full flex items-center justify-center bg-yellow-400 text-black px-4 py-3 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors"
      >
        Ver no Power BI
      </Link>

    </div>
  );
}
