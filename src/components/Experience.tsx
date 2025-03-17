import { motion } from "framer-motion";

const experiences = [
  {
    company: "Empresa X",
    role: "Desenvolvedor Frontend",
    duration: "2022 - Presente",
    techs: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    company: "Empresa Y",
    role: "Desenvolvedor Full Stack",
    duration: "2020 - 2022",
    techs: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Web",
    duration: "2019 - 2020",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto text-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-white mb-6"
      >
        Minha Experiência Profissional
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {exp.techs.map((tech) => (
                <span key={tech} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
