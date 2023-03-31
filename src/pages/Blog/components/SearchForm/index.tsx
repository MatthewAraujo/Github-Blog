import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GithubBlogContext } from "../../../../contexts/GithubBlogContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { filterIssues } = useContext(GithubBlogContext);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchRepository(data: SearchFormInputs) {
    filterIssues(data.query.toLowerCase());
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchRepository)}>
      <input type="text" placeholder="Buscar conteudo" {...register("query")} />
    </SearchFormContainer>
  );
}
