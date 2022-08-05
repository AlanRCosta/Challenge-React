import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid whitesmoke;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;

    a {
      font-size: 16px;
      color: blue;
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 8px 0 16px;
    font-size: 14px;
    color: grey;
    letter-spacing: 0.2px;
  }
`;
