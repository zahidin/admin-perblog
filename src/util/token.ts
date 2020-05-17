import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const checkingToken = (token?: string): boolean => {
  const tkn = cookies.get('_tkn');
  if (tkn) return true;
  return false;
};

export const saveToken = ({
  token = '',
  refreshToken = '',
}: {
  token?: string;
  refreshToken?: string;
}): boolean => {
  cookies.set('_tkn', token);
  cookies.set('_rfshTkn', refreshToken);
  return true;
};
