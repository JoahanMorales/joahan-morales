"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "./ui/theme-provider";

const GithubContributions = () => {
  const { theme } = useTheme();

  return (
    <div className="ml-3 mr-3 sm:mr-0 sm:ml-8">
      <GitHubCalendar
        username="JoahanMorales"
        colorScheme={theme === "light" ? "light" : "dark"}
        fontSize={12}
        blockSize={10.7}
        theme={{
          light: ["#ebedf0", "#d8b4fe", "#c084fc", "#a855f7", "#7e22ce"],
          dark: ["#262626", "#581c87", "#7e22ce", "#a855f7", "#d8b4fe"],
        }}
      />
    </div>
  );
};

export default GithubContributions;
