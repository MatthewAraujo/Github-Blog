import styled from "styled-components";

export const IssuesContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;

  text-align: justify;
`;

export const IssuesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme["blue-100"]};
    gap: 0.5rem;
  }
`;
