import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["dark-blue-400"]};
    color: ${(props) => props.theme["gray-200"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }

    &:active {
      box-shadow: 0 0 0 2px ${(props) => props.theme["blue-100"]};
    }
  }
`;
