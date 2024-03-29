import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, SearchForm } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.trim());
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
