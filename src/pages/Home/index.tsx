import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TApiRepo, TApiUser } from "../../@types";
import { Api } from "../../services/api";

import * as s from "./styles";
import RepoData from "../../components/RepoData";
import UserData from "../../components/UserData";

const Home: React.FC = () => {
  const { username = "alanrcosta" } = useParams();
  const [user, setUser] = useState<TApiUser>();
  const [repos, setRepos] = useState<TApiRepo[]>();

  useEffect(() => {
    Api.get(`/users/${username}`).then((response) => {
      setUser(response.data);
    });

    Api.get(`/users/${username}/repos`)

      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => {
        console.log("Erro: ", err);
      });
  }, [username]);

  return (
    <s.Container>
      <s.Main>
        <s.UserInformation>
          <UserData
            username={user?.login}
            name={user?.name}
            avatarUrl={user?.avatar_url}
            followers={user?.followers}
            following={user?.following}
            location={user?.location}
          />
        </s.UserInformation>

        <s.RepoInformation>
          <s.Repos>
            <h2>Repositories</h2>
            <s.Repo>
              {repos?.map((item) => (
                <RepoData
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                />
              ))}
            </s.Repo>
          </s.Repos>
        </s.RepoInformation>
      </s.Main>
    </s.Container>
  );
};

export default Home;
