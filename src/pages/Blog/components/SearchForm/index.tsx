import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchRepository(data: SearchFormInputs) {}

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchRepository)}>
      <input type="text" placeholder="Buscar conteudo" {...register("query")} />
    </SearchFormContainer>
  );
}
