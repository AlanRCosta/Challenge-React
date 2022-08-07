import { Link } from "react-router-dom";

import { Container } from "./styles";
import { TRepoProps } from "./types";

const RepoData: React.FC<TRepoProps> = ({
  username,
  reponame,
  description,
}) => {
  return (
    <Container>
      <header>
        <Link to={`/repos/${username}/${reponame}/commits`}>{reponame}</Link>
      </header>
      <p>{description}</p>
    </Container>
  );
};

export default RepoData;
