const projects = [
    {
      title: "E-commerce Moderno",
      description: "Loja virtual com Next.js, integração com Stripe e design responsivo.",
      image: "/project1.jpg",
      techs: ["Next.js", "Tailwind", "Stripe"],
      link: "https://github.com/seuusuario/ecommerce",
    },
    {
      title: "Dashboard Interativo",
      description: "Painel administrativo dinâmico com gráficos e autenticação JWT.",
      image: "/project2.jpg",
      techs: ["React", "Tailwind", "Node.js"],
      link: "https://github.com/seuusuario/dashboard",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="max-w-3xl text-center sm:text-left mt-16">
        <h2 className="text-4xl font-bold text-white mb-6">Projetos</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 border border-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform bg-gray-800"
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                {project.techs.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  