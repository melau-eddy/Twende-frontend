export type UserData = {
  _id: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  status: string;
  role: string;
  __v: number;
};

export type LoginAPI = {
  status: number;
  data: {
    user: UserData;
    token: string;
  };
};
