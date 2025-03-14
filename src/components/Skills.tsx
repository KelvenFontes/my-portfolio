const skills = [
    { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
    { name: "React", icon: "/tech-icons/react.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/tailwind.svg" },
    { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
    { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
    { name: "UI/UX Design", icon: "/tech-icons/figma.svg" },
  ];
  
  const Skills = () => {
    return (
      <section className="max-w-4xl text-center mt-16">
        <h2 className="text-4xl font-bold text-white mb-6">Minhas Habilidades</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <p className="text-gray-400 text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  