"use client";

import PowerBICard from "./PowerBICard";

const dashboards = [
  {
    title: "Dashboard Uber – Análise de Corridas",
    description:
      "Dashboard em Power BI com análise de corridas, receita e avaliações.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwYzUyYjAtOTdkMy00NTgwLTlhMWUtN2M2MWZkOGM2Njk0IiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9",
  },
  {
    title: "Dashboard Uber – Análise de Corridas",
    description:
      "Dashboard em Power BI com análise de corridas, receita e avaliações.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwYzUyYjAtOTdkMy00NTgwLTlhMWUtN2M2MWZkOGM2Njk0IiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9",
  },
  {
    title: "Dashboard Uber – Análise de Corridas",
    description:
      "Dashboard em Power BI com análise de corridas, receita e avaliações.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwYzUyYjAtOTdkMy00NTgwLTlhMWUtN2M2MWZkOGM2Njk0IiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9",
  }
];

export default function PowerBISection() {
  return (
    <section
      id="powerbi"
      className="w-full py-28 bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER IGUAL AO SOBRE */}
        <div className="text-center mb-20">
          <p className="text-yellow-400 font-semibold tracking-widest mb-2">
            PORTFÓLIO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Dashboards Power BI
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Projetos desenvolvidos com foco em análise de dados, visualização
            estratégica e geração de insights acionáveis.
          </p>
        </div>

        {/* CONTAINER ESTILO CARD (igual outras seções) */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-lg">

          <div className="grid md:grid-cols-2 gap-10">
            {dashboards.map((dashboard, index) => (
              <PowerBICard
                key={index}
                title={dashboard.title}
                description={dashboard.description}
                embedUrl={dashboard.embedUrl}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
