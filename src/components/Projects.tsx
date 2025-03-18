import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "TripsWise",
    description:
      "Plataforma completa para explorar destinos turísticos, personalizar viagens e fazer reservas seguras. Oferece autenticação via Google e pagamentos integrados com Stripe.",
    image: "/project/tripswise.jpg",
    techs: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Supabase",
      "TailwindCSS",
      "Prisma",
      "Stripe",
      "NextAuth",
      "Vercel",
    ],
    link: "https://github.com/KelvenFontes/TravelSystem",
  },
  {
    title: "EverGlow",
    description:
      "Aplicação que utiliza a API do Spotify para oferecer uma experiência única de descoberta e reprodução de música.",
    image: "/project/everglow.jpg",
    techs: ["TypeScript"],
    link: "https://github.com/KelvenFontes/EverGlow",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-4xl font-bold mb-8"
      >
        Projetos
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Ver detalhes do projeto ${project.title}`}
            className="block bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: index * 0.1 }}
          >
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={`Imagem ilustrativa do projeto ${project.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                {project.techs.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
