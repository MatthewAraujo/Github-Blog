import styled from "styled-components";

export const ProfileContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
  }

  &:last-child {
    div:last-child {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const ProfileContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
