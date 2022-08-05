import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #41d3be;
  padding: 10px 16px;
`;

export const SearchForm = styled.form`
  width: 100%;

  input {
    outline: 0;
    border-radius: 6px;
    padding: 6px 12px;
    width: 80%;
  }
`;
