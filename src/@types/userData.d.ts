export type TypeUserData = {
  id: number;
  userName: string;
  token?: string;
};

export type TypeUserDataDB = {
  _id: number;
  userName: string;
  password: string;
  role: number;
};
