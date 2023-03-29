import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "./components/SearchForm";
import {
  BlogCard,
  BlogCardHeader,
  BlogCardInfo,
  BlogCards,
  BlogContainer,
} from "./style";

export default function Blog() {
  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchForm />
        <BlogCards>
          <BlogCard>
            <BlogCardHeader>
              <h1>JavaScript data types and data structures</h1>
              <p>Há 1 dia</p>
            </BlogCardHeader>
            <BlogCardInfo>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </BlogCardInfo>
          </BlogCard>
          <BlogCard>
            <BlogCardHeader>
              <h1>JavaScript data types and data structures</h1>
              <p>Há 1 dia</p>
            </BlogCardHeader>
            <BlogCardInfo>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </BlogCardInfo>
          </BlogCard>
        </BlogCards>
      </BlogContainer>
    </div>
  );
}
