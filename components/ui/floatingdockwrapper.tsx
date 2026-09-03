"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconFolder,
  IconHome,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

const FloatingDockWrapper = () => {
  const { theme, toggleTheme } = useTheme();

  const items = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Mail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:joahanmorales07@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/JoahanMorales",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/joahan-morales/",
    },
    {
      title: "Theme",
      icon:
        theme === "light" ? (
          <IconMoon className="hidden sm:block h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconSun className="hidden sm:block h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),

      onClick: toggleTheme,
    },
  ];

  return (
    <div className="flex items-center bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white justify-end sm:h-24 w-full">
      <FloatingDock
        mobileClassName="-translate-x-4 -translate-y-8"
        items={items}
      />
    </div>
  );
};
export default FloatingDockWrapper;
