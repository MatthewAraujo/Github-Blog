import { useContext } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";
import { SearchForm } from "./components/SearchForm";
import {
  BlogCard,
  BlogCardHeader,
  BlogCardInfo,
  BlogCards,
  BlogContainer,
  SearchFormHeader,
} from "./style";
import { formatter } from "../../utils/formatter";

export default function Blog() {
  const { filteredIssues } = useContext(GithubBlogContext);
  const allIssues = filteredIssues.length;

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
          {filteredIssues.map((issues) => {
            return (
              <BlogCard to={`/issues/${issues.number}`} key={issues.id}>
                <BlogCardHeader>
                  <h1>{issues.title}</h1>
                  <time>{formatter(issues.created_at)}</time>
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
