import { Container, Main, UserInformation, RepoInformation } from "./styles";
import UserData from "../../components/UserData";

const Home: React.FC = () => {
  return (
    <Container>
      <Main>
        <UserInformation>
          <UserData
            username={"alanrcosta"}
            name={"Alan Costa"}
            avatarUrl={"https://avatars.githubusercontent.com/u/65302810?v=4"}
            followers={10}
            following={9}
            location={"Rio de Janeiro, Brazil"}
          />
        </UserInformation>

        <RepoInformation></RepoInformation>
      </Main>
    </Container>
  );
};

export default Home;
