export default function Resume() {
  const education = [
    {
      title: "Bacharelado em Ciência da Computação",
      period: "2018 - 2022",
      place: "Universidade XYZ",
      description:
        "Formação com foco em análise de dados, algoritmos, estatística e desenvolvimento de sistemas."
    },
    {
      title: "Especialização em Data Science",
      period: "2022 - 2023",
      place: "Instituição ABC",
      description:
        "Estudos avançados em Machine Learning, análise de dados e modelagem preditiva."
    },
    {
      title: "Cursos em Análise de Dados",
      period: "2023 - Atual",
      place: "Plataformas Online",
      description:
        "Aprofundamento em Python, SQL, Power BI, ETL e visualização de dados."
    }
  ]

  return (
    <section
      id="resume"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* TÍTULO */}
        <p className="text-yellow-400 font-semibold mb-2">
          RESUME
        </p>

        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          🎓 Educação
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-700 pl-8 space-y-12">

          {education.map((item, index) => (
            <div key={index} className="relative">

              {/* DOT */}
              <span className="absolute -left-[10px] top-1 w-4 h-4 bg-yellow-400 rounded-full"></span>

              <h3 className="text-yellow-400 font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mb-1">
                {item.period}
              </p>

              <p className="font-medium">
                {item.place}
              </p>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}