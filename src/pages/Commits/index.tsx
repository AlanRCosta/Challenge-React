import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { TApiCommit } from "../../@types";
import { CommitApi } from "../../services/api";

import CommitData from "../../components/CommitData";
import * as s from "./styles";

const Commits: React.FC = () => {
  const { username, reponame } = useParams();
  const [commit, setCommit] = useState<TApiCommit[]>();
  const [commitFilter, setCommitFilter] = useState("");

  const commitFiltered = useMemo(() => {
    const lowerCommitFilter = commitFilter.toLowerCase();

    return commit?.filter((item) =>
      item.commit.message.toLowerCase().includes(lowerCommitFilter)
    );
  }, [commit, commitFilter]);

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
      <s.FilterInput
        type="text"
        placeholder="Commit filter..."
        value={commitFilter}
        onChange={(e) => setCommitFilter(e.target.value)}
      />
      {commitFiltered
        ?.map((item) => (
          <CommitData key={item.sha} message={item.commit.message} />
        ))
        .slice(0, 10)}
    </s.Container>
  );
};

export default Commits;
