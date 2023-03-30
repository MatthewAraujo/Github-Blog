import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -6rem;
  background: ${(props) => props.theme["dark-blue-400"]};
  border-radius: 8px;
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 6px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["gray-100"]};
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme["blue-100"]};
      display: inline-flex;
      gap: 0.5rem;
      align-items: center;
      padding-block: 3px;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme["blue-100"]};
      }
    }
  }
`;
