import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["dark-blue-400"]};
  padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transform: translateX(-50%);
  }
`;
