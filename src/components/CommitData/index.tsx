import { TCommitProps } from "./types";
import { Container } from "./styles";

const CommitData: React.FC<TCommitProps> = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default CommitData;
