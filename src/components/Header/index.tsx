import { Container, SearchForm } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <SearchForm>
        <input placeholder="Enter Username..." />
      </SearchForm>
    </Container>
  );
};

export default Header;
