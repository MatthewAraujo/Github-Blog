import { format, formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";
import { SearchForm } from "./components/SearchForm";
import ptBR from "date-fns/locale/pt-BR";
import {
  BlogCard,
  BlogCardHeader,
  BlogCardInfo,
  BlogCards,
  BlogContainer,
  SearchFormHeader,
} from "./style";

export default function Blog() {
  const { githubIssues } = useContext(GithubBlogContext);
  const allIssues = githubIssues.length;

  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchFormHeader>
          <h1>Publicações</h1>
          <p>
            <span>{allIssues}</span> publicações
          </p>
        </SearchFormHeader>
        <SearchForm />
        <BlogCards>
          {githubIssues.map((issues) => {
            const publishedAt = formatDistanceToNow(
              new Date(issues.created_at),
              {
                locale: ptBR,
                addSuffix: true,
              }
            );
            return (
              <BlogCard key={issues.id}>
                <BlogCardHeader>
                  <h1>{issues.title}</h1>
                  <time>{publishedAt}</time>
                </BlogCardHeader>
                <BlogCardInfo>
                  <p>{issues.body}</p>
                </BlogCardInfo>
              </BlogCard>
            );
          })}
        </BlogCards>
      </BlogContainer>
    </div>
  );
}
