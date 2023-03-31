import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { number } from "zod";

interface GithubBlog {
  id: number;
  name: string;
  html_url: string;
  bio: string;
  avatar_url: string;
  company: string;
  followers: number;
}

interface Issues {
  title: string;
  id: number;
  body: string;
  created_at: number;
  number: number;
}

interface GithubBlogType {
  githubBlog: GithubBlog;
  githubIssues: Issues[];
  fetchGithubIssues: (query?: string) => Promise<void>;
  filteredIssues: Issues[];
  filterIssues: (filter: string) => void;
}

interface GithubBlogProviderProps {
  children: React.ReactNode;
}

export const GithubBlogContext = createContext({} as GithubBlogType);

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [githubBlog, setGithubBlog] = useState<GithubBlog>({} as GithubBlog);
  const [githubIssues, setGithubIssues] = useState<Issues[]>([]);
  const [filter, setFilter] = useState("");

  const filteredIssues = githubIssues.filter((issue) =>
    issue.title.toLowerCase().includes(filter)
  );

  function filterIssues(filter: string) {
    setFilter(filter);
  }

  async function fetchGithubBlog(query?: string) {
    const response = await api.get("/users/MatthewAraujo", {
      params: {
        q: query,
      },
    });
    setGithubBlog(response.data);
  }

  async function fetchGithubIssues() {
    const response = await api.get(
      "search/issues?q=repo:MatthewAraujo/Github-Blog/issues"
    );
    setGithubIssues(response.data.items);
  }

  useEffect(() => {
    fetchGithubBlog();
    fetchGithubIssues();
  }, []);

  return (
    <GithubBlogContext.Provider
      value={{
        githubBlog,
        githubIssues,
        fetchGithubIssues,
        filteredIssues,
        filterIssues,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  );
}
