import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 22, label: "Projetos Concluídos", suffix: "+" },
  { number: 3, label: "Anos de Experiência", suffix: "+" },
  { number: 1000, label: "Linhas de Código", suffix: "K+" },
];

export default function Stats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) =>
        prev.map((val, index) =>
          val < stats[index].number ? val + Math.ceil(stats[index].number / 50) : stats[index].number
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-4xl mx-auto text-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-white mb-6"
      >
        Minhas Estatísticas
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
            className="p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {animatedStats[index]}
              {stat.suffix}
            </h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
