import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 5px 5px 5px 0px var(--componentShaddow);
  background-color: var(--componentColor);
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 20px;

    @media (min-width: 768px) {
      margin-top: 16px;
      margin-left: 0;
    }
  }

  h1 {
    font-size: 26px;
    line-height: 1.5;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
    color: grey;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ListFollows = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px 0;

  li {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: grey;
    font-weight: 500;
  }

  * {
    margin-right: 5px;
  }
`;

export const Location = styled.div`
  span {
    display: flex;
    font-size: 14px;
    padding-bottom: 10px;
  }
`;
