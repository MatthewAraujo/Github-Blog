import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;

  margin-top: -5rem;
  background: ${(props) => props.theme["dark-blue-400"]};
  border-radius: 8px;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-100"]};
    display: inline-flex;
    gap: 0.5rem;
    padding-top: 1rem;
    text-transform: uppercase;
  }
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  gap: 1rem;
`;
