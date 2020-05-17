import { APIV1 } from '@constant/api';

async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  return data;
}

export async function requestLogin(data) {
  const url = `${APIV1}/authentication/login`;
  const headers: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, headers);
  return handleResponse(response);
}
