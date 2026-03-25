"use client";

import PowerBICard from "./PowerBICard";

export default function PowerBISection({ dict }: { dict: any }) {
  const dashboards = [
    {
      title: dict.Dashboard.titleShort1,
      description: dict.Dashboard.descriptionShort1,
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMjkwYzUyYjAtOTdkMy00NTgwLTlhMWUtN2M2MWZkOGM2Njk0IiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9",
    },
    {
      title: dict.Dashboard.titleShort2,
      description: dict.Dashboard.descriptionShort2,
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMDJmYzYyYzEtNDUwZC00N2M4LWExMDEtOTQ2MGQwMmI5Y2UzIiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9&pageName=45232016c2c532501285",
    }
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-28 px-6 overflow-hidden bg-gradient-to-br from-[#081225] via-[#0d1a35] to-[#020617]"
    >
      {/* glow sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-yellow-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Dashboard */}
          <div className="text-center mb-20 relative">

            <h2 className="absolute inset-0 flex justify-center text-7xl font-bold text-white/[0.04] tracking-widest">
              {dict.Dashboard.title}
            </h2>

            <p className="text-yellow-400 font-semibold tracking-widest relative">
              {dict.Dashboard.subtitle}
            </p>

            <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>
          </div>

          <p className="text-gray-200 mt-6 max-w-2xl mx-auto">
            {dict.Dashboard.description}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
          <div className="grid md:grid-cols-2 gap-8">
            {dashboards.map((dashboard, index) => (
              <div
                key={index}
                className={dashboards.length % 2 !== 0 && index === dashboards.length - 1
                  ? "md:col-span-2 md:flex md:justify-center"
                  : ""}
              >
                <div className={dashboards.length % 2 !== 0 && index === dashboards.length - 1 ? "md:w-[48%]" : ""}>
                  <PowerBICard
                    title={dashboard.title}
                    description={dashboard.description}
                    embedUrl={dashboard.embedUrl}
                    buttonText={dict.Dashboard.button}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
