import {
  Container,
  Main,
  UserInformation,
  RepoInformation,
  Repos,
  Item,
} from "./styles";

import RepoData from "../../components/RepoData";
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

        <RepoInformation>
          <Repos>
            <h2>Repositories</h2>
            <Item>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoData
                  key={n}
                  username={"alanrcosta"}
                  reponame={"Calculadora"}
                  description={"Trainee Challenge"}
                />
              ))}
            </Item>
          </Repos>
        </RepoInformation>
      </Main>
    </Container>
  );
};

export default Home;
