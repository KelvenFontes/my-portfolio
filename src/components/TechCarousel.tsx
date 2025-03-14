"use client";
import Slider from "react-slick";
import { FaReact, FaNodeJs, FaStripe, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function TechCarousel() {
    const settings = {
        dots: false,
        infinite: true, // 🔥 Faz o carrossel rodar sem parar
        speed: 3000, // 🔥 Suaviza a transição
        slidesToShow: 6, // 🔥 Ajusta a quantidade de ícones visíveis
        slidesToScroll: 1, // 🔥 Rola um por vez
        autoplay: true,
        autoplaySpeed: 0, // 🔥 Garante movimento contínuo
        cssEase: "linear", // 🔥 Deixa o movimento mais suave
        pauseOnHover: false, // 🔥 Não para quando passa o mouse
        draggable: false, // 🔥 Impede que pare ao clicar
        swipe: false, // 🔥 Evita que o usuário arraste manualmente
        arrows: false, // 🔥 Remove setas para um design mais clean
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 3 } },
        ],
    };

    const techs = [
        { icon: <FaReact size={50} className="text-blue-500" />, name: "React" },
        { icon: <SiNextdotjs size={50} className="text-white" />, name: "Next.js" },
        { icon: <SiTailwindcss size={50} className="text-blue-400" />, name: "Tailwind CSS" },
        { icon: <SiTypescript size={50} className="text-blue-600" />, name: "TypeScript" },
        { icon: <FaNodeJs size={50} className="text-green-500" />, name: "Node.js" },
        { icon: <FaStripe size={50} className="text-purple-500" />, name: "Stripe" },
        { icon: <FaHtml5 size={50} className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt size={50} className="text-blue-500" />, name: "CSS3" },
        { icon: <FaJs size={50} className="text-yellow-500" />, name: "JavaScript" },
        { icon: <FaGitAlt size={50} className="text-red-500" />, name: "Git" },
        { icon: <FaDatabase size={50} className="text-gray-500" />, name: "Banco de Dados" },
    ];

    return (
        <div className="max-w-5xl mx-auto py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">💻 Minhas Tecnologias</h2>
            <Slider {...settings} className="text-white">
                {techs.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-center h-40">
                        <div className="flex flex-col items-center justify-center">
                            {tech.icon}
                        </div>
                        <p className="text-gray-300 text-lg mt-2">{tech.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
