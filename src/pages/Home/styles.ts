import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 24px;
  overflow: hidden;
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
  padding: 0 16px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RepoInformation = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: 16px;

  h2 {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Repo = styled.div`
  margin-top: 8px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
