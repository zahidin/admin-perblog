import { Cookies } from 'react-cookie';

export const checkingToken = (token?: string) => {
  const cookies = new Cookies();
  const tkn = cookies.get('_tkn');
  if (tkn) return true;
  return false;
};
