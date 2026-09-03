"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

interface CardProps {
  projectTitle: string;
  description: string;
  toolsUsed: string[];
  projLink: string;
  /** Ruta de la foto en /public, ej: "/projects/lumivia.png". Si el archivo no existe, se muestra el gradiente. */
  src?: string;
  gradient?: string;
  emoji?: string;
}

export const Card = ({
  projectTitle,
  description,
  toolsUsed,
  projLink,
  src,
  gradient = "from-violet-600 via-purple-600 to-fuchsia-500",
  emoji = "⚡",
}: CardProps) => {
  const { lang } = useLanguage();
  const [imgOk, setImgOk] = useState(true);
  const showImg = src && imgOk;
  return (
    <div className="border rounded-lg dark:border-zinc-800 h-[365px] w-80 sm:w-96 flex flex-col overflow-hidden bg-white dark:bg-neutral-900">
      <Link href={projLink} target="_blank" rel="noopener noreferrer">
        <div
          className={`relative h-[160px] w-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        >
          <span className="text-6xl drop-shadow-lg">{emoji}</span>
          {showImg && (
            <Image
              src={src}
              alt={projectTitle}
              fill
              className="object-cover"
              onError={() => setImgOk(false)}
            />
          )}
        </div>
      </Link>
      <p className="font-bold text-lg pt-3 pl-3">{projectTitle}</p>
      <p className="sm:text-sm text-[15px] text-neutral-500 dark:text-neutral-400 pt-1 pl-3 pr-3 line-clamp-3">
        {description}
      </p>
      <div className="mt-2 flex flex-wrap gap-1 px-2">
        {toolsUsed.map((tool, index) => (
          <span
            key={index}
            className="border bg-neutral-200 dark:bg-neutral-800 px-2 text-xs border-neutral-400 dark:border-zinc-700 rounded-full py-1"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-auto pb-3">
        <Link href={projLink} target="_blank" rel="noopener noreferrer">
          <button className="dark:hover:bg-zinc-300 hover:bg-zinc-300 active:scale-105 transition-all duration-150 rounded-md py-1 ml-2 mt-3 flex border-neutral-300 border items-center dark:bg-white dark:text-black text-sm px-2">
            <span className="text-xs">↗</span>
            <p className="pl-2">{lang === "en" ? "Website" : "Sitio"}</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
