import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TApiCommit } from "../../@types";
import { CommitApi } from "../../services/api";

import CommitData from "../../components/CommitData";
import * as s from "./styles";

const Commits: React.FC = () => {
  const { username, reponame } = useParams();
  const [commit, setCommit] = useState<TApiCommit[]>();

  useEffect(() => {
    CommitApi.get(`/${username}/${reponame}/commits`)
      .then((response) => {
        setCommit(response.data);
      })
      .catch((err) => {
        console.log("Erro: ", err);
      });
  });

  return (
    <s.Container>
      <s.RepoName>{reponame}</s.RepoName>
      {commit
        ?.map((item) => <CommitData message={item.commit.message} />)
        .slice(0, 10)}
    </s.Container>
  );
};

export default Commits;
