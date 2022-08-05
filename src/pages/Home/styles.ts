import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 24px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const UserInformation = styled.div`
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RepoInformation = styled.div`
  @media (min-width: 768px) {
    width: 75%;
  }
`;
