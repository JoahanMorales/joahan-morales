"use client";

import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";
import { Card } from "@/components/projectsCard";
import { Snippet } from "@nextui-org/snippet";
import GithubContributions from "@/components/githubcontri";
import Link from "next/link";
import en from "../components/locales/en.json";
import es from "../components/locales/es.json";
import { COVERS } from "@/components/covers";
import { useLanguage } from "@/components/LanguageContext";

const slugs = [
  "java",
  "springboot",
  "python",
  "pytorch",
  "tensorflow",
  "opencv",
  "javascript",
  "typescript",
  "react",
  "nodedotjs",
  "postgresql",
  "mysql",
  "mongodb",
  "redis",
  "oracle",
  "docker",
  "git",
  "github",
  "linux",
  "postman",
  "rust",
  "html5",
  "css3",
  "tailwindcss",
  "jupyter",
];

const translations = { en, es };

const EXPERIENCE = [
  {
    role: "Full Stack Junior Software Engineer · Full-time",
    org: "Instituto Politécnico Nacional – CSII",
    period: "Mar 2026 – Present · Mexico City",
    points: ["Java, ColdFusion & Oracle Database for institutional platforms."],
  },
  {
    role: "Software Developer & Process Automation Analyst · Part-time",
    org: "Prestigio en Traslado Automotriz",
    period: "Apr 2025 – Feb 2026 · State of Mexico",
    points: [
      "Browser extension automating SAT forms (-50% time).",
      "Java mobile app for inventory (-80% data loss).",
      "Excel macros & dynamic reports (-40% update time).",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "SEDECO SecretarIA — 1st Place",
    date: "Jun 2026",
    desc: "Led team + Voronoi geospatial model weighting economic indicators.",
  },
  {
    title: "IBM Talent Land — 1st Place",
    date: "Apr 2026",
    desc: "Led backend of Lumivia (Java 17 + Spring Boot 3.3) on IBM Cloud.",
  },
  {
    title: "ElevenLabs Hackathon Mexico — 3rd + Best with Bolt",
    date: "Dec 2025",
    desc: "Voice mental-health assistant with CBT, ElevenLabs, n8n, Redis.",
  },
  {
    title: "Your Future Made in Austria — Open Source Winner",
    date: "Nov 2025",
    desc: "Python + OpenCV subway digitizer with citizen-report heatmaps.",
  },
];

export default function Home() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex justify-center font-sans bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <button
        onClick={toggleLang}
        className="fixed top-4 right-4 w-12 h-8 border border-neutral-300 dark:border-neutral-700 rounded overflow-hidden bg-white dark:bg-neutral-900 z-50"
      >
        <div
          className={`flex flex-col items-center transition-transform duration-500 ease-out ${
            lang === "en" ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <span className="h-8 flex items-center justify-center text-sm font-bold w-full">
            EN
          </span>
          <span className="h-8 flex items-center justify-center text-sm font-bold w-full">
            ES
          </span>
        </div>
      </button>

      <div className="w-[370px] sm:w-[900px] min-h-screen pb-24">
        {/* HERO */}
        <div className="sm:pt-16 sm:pl-[84px] items-center flex pt-16">
          <div className="sm:pr-7 pl-3 sm:pl-0 pr-5 flex-shrink-0">
            <Image
              className="mb-10 sm:mb-0 rounded-full object-cover"
              src={"/profile.jpg"}
              alt="Joahan Morales"
              width={100}
              height={100}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="flex-1 pr-14 sm:pr-0">
            <div className="flex justify-between">
              <p className="font-bold text-4xl break-words flex flex-wrap items-center gap-x-3 gap-y-2">
                {t.greeting}
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full shrink-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  {t.openToWork}
                </span>
              </p>
            </div>

            <div className="pt-2 flex">
              <p className="break-words">{t.tagline}</p>
            </div>

            <Snippet
              className="collapse sm:visible mt-1"
              tooltipProps={{
                content: "Copy and run this on your terminal",
                placement: "right",
              }}
              size="md"
            >
              npx joahan-morales
            </Snippet>
          </div>
        </div>

        {/* ABOUT */}
        <p className="pl-3 sm:pt-10 sm:ml-[70px] text-xl font-bold">
          {t.aboutTitle}
        </p>
        <p className="pl-3 pr-3 sm:ml-[70px] sm:pr-0 sm:w-[780px] text-justify text-neutral-500 dark:text-neutral-400">
          {t.aboutText}
        </p>

        {/* SKILLS */}
        <p className="text-xl pl-3 font-bold mt-10 flex pb-2 sm:ml-[70px]">
          {t.skills}
        </p>
        <div className="flex h-72 sm:ml-8 justify-center">
          <div className="rounded-md flex justify-between sm:ml-0 sm:mr-0 ml-3 mr-3 pr-6 w-[770px] border dark:border-zinc-800">
            <div className="hidden sm:grid pl-5 grid-cols-3 pb-3 gap-3 mt-5 content-start">
              <TechStackBtn name="Java" icon="bg-orange-500" />
              <TechStackBtn name="Spring Boot" icon="bg-green-600" />
              <TechStackBtn name="Python" icon="bg-green-400" />
              <TechStackBtn name="SQL" icon="bg-blue-500" />
              <TechStackBtn name="JavaScript" icon="bg-yellow-300" />
              <TechStackBtn name="TypeScript" icon="bg-[#3498db]" />
              <TechStackBtn name="React" icon="bg-cyan-300" />
              <TechStackBtn name="PostgreSQL" icon="bg-blue-500" />
              <TechStackBtn name="Oracle" icon="bg-red-500" />
              <TechStackBtn name="MongoDB" icon="bg-green-600" />
              <TechStackBtn name="Redis" icon="bg-red-600" />
              <TechStackBtn name="Docker" icon="bg-blue-400" />
              <TechStackBtn name="Git" icon="bg-orange-700" />
              <TechStackBtn name="ColdFusion" icon="bg-cyan-600" />
              <TechStackBtn name="HuggingFace" icon="bg-yellow-400" />
              <TechStackBtn name="OpenCV" icon="bg-teal-500" />
              <TechStackBtn name="PyTorch" icon="bg-orange-600" />
              <TechStackBtn name="Rust" icon="bg-orange-700" />
            </div>
            <div className="sm:ml-0 ml-16">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>

        {/* GITHUB */}
        <div className="w-full mt-8 flex justify-center">
          <div className="max-w-7xl overflow-hidden">
            <GithubContributions />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="sm:ml-[70px] pl-3 pr-3 mt-10">
          <p className="text-2xl font-bold">{t.experience}</p>
          <p className="text-neutral-400 font-bold">{t.experienceSubtitle}</p>
          <div className="mt-4 space-y-4">
            {EXPERIENCE.map((e) => (
              <div
                key={e.org}
                className="border dark:border-zinc-800 rounded-lg p-4"
              >
                <p className="font-bold">{e.role}</p>
                <p className="text-sm text-neutral-500">
                  {e.org} · {e.period}
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="sm:ml-[70px] pl-3 pr-3 mt-10">
          <p className="text-2xl font-bold">{t.achievements}</p>
          <p className="text-neutral-400 font-bold">
            {t.achievementsSubtitle}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.title}
                className="border dark:border-zinc-800 rounded-lg p-4"
              >
                <p className="font-bold text-sm">🏆 {a.title}</p>
                <p className="text-xs text-neutral-500">{a.date}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS PREVIEW */}
        <div>
          <p className="text-2xl mt-10 flex font-bold justify-center">
            {t.project}
          </p>
          <p className="tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex">
            {t.checkwork}
          </p>
          <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex text-center">
            {t.workedOn}
          </p>
          <div className="sm:pl-7 pt-7 flex justify-center">
            <div className="pb-5 dark:border-neutral-700 border-b-1 grid gap-3 grid-cols-1 sm:grid-cols-2">
              <Card
                projectTitle="Lumivia"
                description={t.lumiviaDesc}
                toolsUsed={["Java 17", "Spring Boot", "GraphHopper", "IBM Cloud"]}
                projLink="https://github.com/JoahanMorales/LumivIA-F"
                src={COVERS["Lumivia"]}
                linkLabel="repo"
                gradient="from-emerald-600 via-green-600 to-teal-500"
                emoji="🌱"
              />
              <Card
                projectTitle="MercurIA"
                description={t.secretariaDesc}
                toolsUsed={["Python", "Voronoi", "GeoPandas"]}
                projLink="https://github.com/JoahanMorales"
                src={COVERS["MercurIA"]}
                linkLabel="repo"
                gradient="from-blue-600 via-indigo-600 to-violet-600"
                emoji="🗺️"
              />
              <Card
                projectTitle="ipnprofes"
                description={t.ipnprofesDesc}
                toolsUsed={["React", "JavaScript", "Scraping"]}
                projLink="https://ipnprofes.com"
                src={COVERS["ipnprofes"]}
                gradient="from-rose-500 via-pink-500 to-fuchsia-500"
                emoji="🎓"
              />
              <Card
                projectTitle="Multimodal Emotion AI"
                description={t.emotionDesc}
                toolsUsed={["Python", "Whisper", "RoBERTuito", "Wav2Vec2"]}
                projLink="https://github.com/JoahanMorales/Multimodal-Emotion-Analysis-with-Transformers-Speech-Text"
                src={COVERS["Multimodal Emotion AI"]}
                linkLabel="repo"
                gradient="from-violet-600 via-purple-600 to-fuchsia-500"
                emoji="🧠"
              />
              <Card
                projectTitle="HandTrack RehabGame"
                description={t.handtrackDesc}
                toolsUsed={["Python", "OpenCV", "MediaPipe"]}
                projLink="https://github.com/JoahanMorales/HandTrack-RehabGame"
                src={COVERS["HandTrack RehabGame"]}
                linkLabel="repo"
                gradient="from-orange-500 via-amber-500 to-yellow-400"
                emoji="✋"
              />
              <Card
                projectTitle="Time-tabling"
                description={t.timetablingDesc}
                toolsUsed={["Java", "JSP", "Servlets"]}
                projLink="https://github.com/JoahanMorales/Time-tabling-web"
                src={COVERS["Time-tabling"]}
                linkLabel="repo"
                gradient="from-slate-600 via-gray-700 to-zinc-800"
                emoji="📅"
              />
              <div className="text-neutral-500 dark:text-neutral-400">
                <p className="text-sm sm:text-medium">
                  {t.viewAll}{" "}
                  <Link href="/projects">
                    <span className="cursor-pointer underline text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                      {t.here}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="sm:ml-[70px] pl-3 pr-3 mt-10 text-center sm:text-left">
          <p className="text-2xl font-bold">{t.contact}</p>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            {t.contactText}
          </p>
          <div className="flex gap-3 mt-4 justify-center sm:justify-start flex-wrap">
            <Link
              href="mailto:joahanmorales07@gmail.com"
              className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-sm font-bold"
            >
              joahanmorales07@gmail.com
            </Link>
            <Link
              href="https://github.com/JoahanMorales"
              target="_blank"
              className="px-4 py-2 rounded-full border dark:border-zinc-700 text-sm"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/joahan-morales/"
              target="_blank"
              className="px-4 py-2 rounded-full border dark:border-zinc-700 text-sm"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <p className="flex dark:border-neutral-700 pt-8 justify-center">
          {t.footer}
        </p>
      </div>
    </div>
  );
}
