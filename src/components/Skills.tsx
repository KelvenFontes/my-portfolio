export default function Skills() {

  const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 92 },
    { name: "Power BI", level: 88 },
    { name: "Pandas / Data Analysis", level: 85 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Visualization", level: 87 },
  ]

  return (
    <section
      id="habilidades"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* TÍTULO */}
        <p className="text-yellow-400 font-semibold mb-2">
          MY SKILLS
        </p>

        <h2 className="text-3xl font-bold mb-14">
          Habilidades em Análise de Dados
        </h2>

        {/* SKILLS */}
        <div className="space-y-8">

          {skills.map((skill, index) => (

            <div key={index}>

              {/* TITULO + PORCENTAGEM */}
              <div className="flex justify-between mb-2 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* BARRA */}
              <div className="w-full h-[3px] bg-gray-700">

                <div
                  className="h-[3px] bg-yellow-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}