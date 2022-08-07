export type TApiUser = {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  location?: string;
};

export type TApiRepo = {
  name: string;
  owner: {
    login: string;
  };
  description?: string;
};

export type TApiCommit = {
  commit: {
    message: string;
  };
};
