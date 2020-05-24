import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const checkingToken = (token?: string): boolean => {
  const tkn = cookies.get('_tkn');
  if (tkn) return true;
  return false;
};

export const getToken = (): string => {
  return cookies.get('_tkn');
};

export const saveToken = ({
  token = '',
  refreshToken = '',
}: {
  token?: string;
  refreshToken?: string;
}): boolean => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  cookies.set('_tkn', token, { expires: tomorrow });
  cookies.set('_rfshTkn', refreshToken, {
    expires: tomorrow,
  });
  return true;
};
