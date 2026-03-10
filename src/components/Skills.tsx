"use client"

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
      id="skills"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <h2 className="absolute inset-0 flex justify-center text-7xl font-bold text-white/[0.04] tracking-widest">
            SKILLS
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            MY SKILLS
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>

        {/* SKILLS */}
        <div className="space-y-12">

          {skills.map((skill, index) => (

            <div key={index}>

              {/* NOME */}
              <p className="text-gray-200 mb-4">
                {skill.name}
              </p>

              {/* BARRA */}
              <div className="relative w-full h-[4px] bg-white/10 rounded-full">

                {/* PROGRESSO */}
                <div
                  className="absolute h-[4px] bg-yellow-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />

                {/* INDICADOR */}
                <div
                  className="absolute top-1/2 w-3 h-3 bg-yellow-400 rounded-full -translate-y-1/2"
                  style={{ left: `${skill.level}%`, transform: "translate(-50%, -50%)" }}
                />

                {/* PORCENTAGEM */}
                <span
                  className="absolute -top-7 text-sm text-yellow-400 font-medium"
                  style={{ left: `${skill.level}%`, transform: "translateX(-50%)" }}
                >
                  {skill.level}%
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}
