import { APIV1 } from '@constant/api';

async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  return data;
}

export async function requestPost() {
  const url = `${APIV1}/post`;
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await fetch(url, headers);
  return handleResponse(response);
}
