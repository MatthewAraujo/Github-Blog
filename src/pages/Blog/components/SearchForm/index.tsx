import { SearchFormContainer, SearchFormHeader } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h1>Publicações</h1>
        <p>6 publicações</p>
      </SearchFormHeader>
      <input type="text" placeholder="Buscar conteudo" />
    </SearchFormContainer>
  );
}
