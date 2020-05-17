type result = {
  token?: string;
  refreshToken?: string;
};

export type Auth = {
  success?: boolean;
  message?: string;
  result: result;
};
