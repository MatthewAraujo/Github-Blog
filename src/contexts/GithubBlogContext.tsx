import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubBlog {
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
}

interface GithubBlogType {
  githubBlog: GithubBlog;
  githubIssues: Issues[];
}

interface GithubBlogProviderProps {
  children: React.ReactNode;
}

export const GithubBlogContext = createContext({} as GithubBlogType);

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [githubBlog, setGithubBlog] = useState<GithubBlog>({} as GithubBlog);
  const [githubIssues, setGithubIssues] = useState<Issues[]>([]);

  async function fetchGithubBlog(query?: string) {
    const response = await api.get("/users/MatthewAraujo", {
      params: {
        q: query,
      },
    });
    setGithubBlog(response.data);
  }

  useEffect(() => {
    fetchGithubBlog();
  }, []);

  async function fetchGithubIssues(query?: string) {
    const response = await api.get(
      "search/issues?q=repo:MatthewAraujo/Github-Blog",
      {
        params: {
          q: query,
        },
      }
    );
    setGithubIssues(response.data.items);
  }

  useEffect(() => {
    fetchGithubIssues();
  }, []);
  return (
    <GithubBlogContext.Provider value={{ githubBlog, githubIssues }}>
      {children}
    </GithubBlogContext.Provider>
  );
}
