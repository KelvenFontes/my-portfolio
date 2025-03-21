"use client";
import Slider from "react-slick";
import { FaReact, FaNodeJs, FaStripe, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql, SiMongodb, SiExpress, SiVercel, SiSocketdotio, SiSupabase } from "react-icons/si";

export default function TechCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        draggable: false,
        swipe: false,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 640, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    const techs = [
      { icon: <FaHtml5 size={35} className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3Alt size={35} className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJs size={35} className="text-yellow-500" />, name: "JavaScript" },
      { icon: <SiTypescript size={35} className="text-blue-600" />, name: "TypeScript" },
        { icon: <FaReact size={35} className="text-blue-500" />, name: "React" },
        { icon: <SiNextdotjs size={35} className="text-white" />, name: "Next.js" },
        { icon: <SiTailwindcss size={35} className="text-blue-400" />, name: "Tailwind CSS" },
        { icon: <FaNodeJs size={35} className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress size={35} className="text-green-500" />, name: "Express.js" },
        { icon: <FaStripe size={35} className="text-purple-500" />, name: "Stripe" },
        { icon: <FaGitAlt size={35} className="text-red-500" />, name: "Git" },
        { icon: <FaGithub size={35} className="text-gray-800" />, name: "GitHub" },
        { icon: <SiVercel size={35} className="text-black" />, name: "Vercel" },
        { icon: <FaAws size={35} className="text-orange-500" />, name: "AWS" },
        { icon: <SiMysql size={35} className="text-gray-200" />, name: "MySQL" },
        { icon: <SiMongodb size={35} className="text-green-800" />, name: "MongoDB" },
        { icon: <SiSupabase size={35} className="text-green-500" />, name: "Supabase" },
        { icon: <SiSocketdotio size={35} className="text-gray-500" />, name: "Socket.io" },
    ];

    return (
        <div className="max-w-sm md:max-w-xl lg:max-w-5xl mx-auto py-10 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">💻 Minhas Tecnologias</h2>
            <Slider {...settings} className="w-full">
                {techs.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-center h-24 md:h-32">
                        <div className="flex flex-col items-center justify-center">
                            {tech.icon}
                        </div>
                        <p className="text-xs md:text-sm mt-2">{tech.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
