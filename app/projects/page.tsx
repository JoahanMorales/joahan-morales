"use client"
import { useLanguage } from "@/components/LanguageContext";
import { Card } from "@/components/projectsCard";
import { useState } from "react";
import en from "../../components/locales/en.json"
import es from "../../components/locales/es.json"
import { COVERS } from "@/components/covers";

const translations = { en, es }

const Projects = () => {
  const [category, setCategory] = useState<string>('all')
  const { lang, toggleLang } = useLanguage()
  const t = translations[lang];

  const projects = [
    {
      id: 1,
      category: "backend",
      title: "Lumivia",
      description: t.lumiviaDesc,
      tools: ["Java 17", "Spring Boot", "GraphHopper", "IBM Cloud"],
      link: "https://github.com/JoahanMorales/LumivIA-F",
      gradient: "from-emerald-600 via-green-600 to-teal-500",
      emoji: "🌱",
    },
    {
      id: 2,
      category: "ai",
      title: "MercurIA",
      description: t.secretariaDesc,
      tools: ["Python", "Voronoi", "GeoPandas"],
      link: "https://github.com/JoahanMorales",
      gradient: "from-blue-600 via-indigo-600 to-violet-600",
      emoji: "🗺️",
    },
    {
      id: 7,
      category: "web",
      title: "ipnprofes",
      description: t.ipnprofesDesc,
      tools: ["React", "JavaScript", "Scraping"],
      link: "https://ipnprofes.com",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      emoji: "🎓",
    },
    {
      id: 3,
      category: "ai",
      title: "Multimodal Emotion AI",
      description: t.emotionDesc,
      tools: ["Python", "Whisper", "RoBERTuito", "Wav2Vec2"],
      link: "https://github.com/JoahanMorales/Multimodal-Emotion-Analysis-with-Transformers-Speech-Text",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
      emoji: "🧠",
    },
    {
      id: 4,
      category: "ai",
      title: "HandTrack RehabGame",
      description: t.handtrackDesc,
      tools: ["Python", "OpenCV", "MediaPipe"],
      link: "https://github.com/JoahanMorales/HandTrack-RehabGame",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
      emoji: "✋",
    },
    {
      id: 8,
      category: "backend",
      title: "Time-tabling",
      description: t.timetablingDesc,
      tools: ["Java", "JSP", "Servlets"],
      link: "https://github.com/JoahanMorales/Time-tabling-web",
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
      emoji: "📅",
    },
  ];

  const categories = [
    { id: 'all', label: 'all' },
    { id: 'backend', label: 'backend' },
    { id: 'ai', label: 'ai' },
    { id: 'web', label: 'web' }
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  return (
    <div className="min-h-screen flex justify-center font-sans bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white pb-24">
      <div>
        <span className="text-2xl mt-8 flex font-bold justify-center">
          {t.project}<button
            onClick={toggleLang}
            className="fixed top-4 right-4 w-12 h-8 border border-neutral-300 dark:border-neutral-700 rounded overflow-hidden bg-white dark:bg-neutral-900 z-50"
          >
            <div className={`flex flex-col items-center transition-transform duration-500 ease-out ${lang === "en" ? "translate-y-0" : "-translate-y-8"}`}>
              <span className="h-8 flex items-center justify-center text-sm font-bold w-full">EN</span>
              <span className="h-8 flex items-center justify-center text-sm font-bold w-full">ES</span>
            </div>
          </button>

        </span>
        <p className="tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex">
          {t.checkwork}
        </p>
        <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex text-center">
          {t.workedOn}
        </p>

        <div className="flex justify-center">
          <div className="mt-8 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 shadow-lg">
            <div className="flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`
                    px-5 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ease-out focus:outline-none
                    ${category === cat.id
                      ? 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 shadow-md shadow-neutral-200/50 dark:shadow-neutral-900/50 scale-105 border border-neutral-200/50 dark:border-neutral-600/50'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:pl-7 pt-7 flex justify-center">
          <div className="pb-5 dark:border-neutral-700 border-b-1 grid gap-3 grid-cols-1 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                projectTitle={project.title}
                description={project.description}
                toolsUsed={project.tools}
                projLink={project.link}
                src={COVERS[project.title]}
                linkLabel={project.link.startsWith("https://github.com") ? "repo" : "site"}
                gradient={project.gradient}
                emoji={project.emoji}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
