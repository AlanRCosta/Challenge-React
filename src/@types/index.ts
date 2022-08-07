export type TApiUser = {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  location?: string;
};

export type TApiRepo = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  description?: string;
};

export type TApiCommit = {
  sha: string;
  commit: {
    message: string;
  };
};
