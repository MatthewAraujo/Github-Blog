import styled from "styled-components";

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
`;

export const BlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const BlogCard = styled.div`
  background: ${(props) => props.theme["dark-blue-300"]};
  padding: 1.5rem 1.5rem;
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme["dark-blue-200"]};
  }
`;

export const BlogCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    width: 80%;
    color: ${(props) => props.theme["gray-100"]};
    font-weight: 700;
  }
`;

export const BlogCardInfo = styled.div`
  padding-top: 1rem;

  p {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
