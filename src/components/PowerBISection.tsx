"use client";

import PowerBICard from "./PowerBICard";

const dashboards = [
  {
    title: "Dashboard Uber – Análise de Corridas",
    description: "Dashboard em Power BI com análise de corridas, receita e avaliações.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMjkwYzUyYjAtOTdkMy00NTgwLTlhMWUtN2M2MWZkOGM2Njk0IiwidCI6IjVlYjdlNmFiLWY5MzAtNDFiMC1hZTNjLTQ4Yzg2MjYxZGNhNCJ9",
  }
  // {
  //   title: "Dashboard Financeiro",
  //   description: "Controle de receita, despesas e lucro.",
  //   embedUrl: "LINK_POWERBI_2",
  // },
  // {
  //   title: "Dashboard Logístico",
  //   description: "Análise de entregas e performance logística.",
  //   embedUrl: "LINK_POWERBI_3",
  // },
];

export default function PowerBISection() {
  return (
    <section id="powerbi" className="w-full py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Dashboards Power BI
        </h2>

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
    </section>
  );
}
