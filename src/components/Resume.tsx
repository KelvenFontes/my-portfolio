import { FaArrowUp } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"

export default function Resume() {

  const education = [
    {
      title: "MBA in Technology for Business",
      focus: "Artificial Intelligence, Data Science & Big Data",
      period: "2025 - 2026",
      place: "PUCRS – Pontifícia Universidade Católica do Rio Grande do Sul",
      description:
        "Postgraduate program focused on Artificial Intelligence, Data Science and Big Data applied to business. Emphasis on machine learning, predictive modeling and data-driven decision making.",
      status: "In Progress"
    },
    {
      title: "Technologist Degree in Multiplatform Software Development",
      focus: "Software Engineering & Data Foundations",
      period: "2022 - 2024",
      place: "FATEC Osasco – Prefeito Hirant Sanazar",
      description:
        "Degree focused on software engineering, algorithms, databases and statistics, building a strong technical foundation for data analysis and modern software development.",
      status: "Completed"
    }
  ]

  return (
    <section
      id="resume"
      className="bg-[#081225] text-white py-28 px-6"
    >

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <h2 className="absolute inset-0 flex justify-center text-7xl font-bold text-white/[0.04] tracking-widest">
            RESUME
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            RESUME
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>


        {/* TITLE */}
        <h3 className="text-3xl font-bold mb-16 flex items-center gap-3">
          🎓 Education Journey
        </h3>


        {/* TIMELINE */}
        <div className="relative pl-12">

          {/* Linha vertical */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400/100 via-white/10 to-white/5"></div>

          {/* Seta de crescimento */}
          <div className="absolute left-[4px] -top-3 text-yellow-400 text-lg">
            <FaArrowUp />
          </div>

          <div className="space-y-16">

            {education.map((item, index) => (

              <div key={index} className="relative group">

                {/* DOT */}
                <span className="absolute -left-[8px] top-1 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/40 group-hover:scale-110 transition"></span>


                {/* DATE + STATUS */}
                <div className="flex items-center gap-3 mb-3">

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {item.period}
                  </span>

                  {item.status == "In Progress" && (
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400">
                      {item.status}
                    </span>
                  )}

                  {item.status == "Completed" && (
                    <span className="text-xs px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-400">
                      {item.status}
                    </span>
                  )}

                </div>


                {/* TITLE */}
                <h4 className="text-xl font-semibold text-yellow-400 leading-snug">
                  {item.title}
                </h4>


                {/* FOCUS */}
                <p className="text-gray-300 text-sm mb-2">
                  {item.focus}
                </p>


                {/* UNIVERSITY */}
                <p className="text-gray-200 font-medium">
                  {item.place}
                </p>


                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}
