import { APIV1 } from '@constant/api';
import { getToken } from '@util/token';

async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  return data;
}

export async function requestPost() {
  const url = `${APIV1}/post`;
  const headers: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const response = await fetch(url, headers);
  return handleResponse(response);
}

export async function requestAddPost(data) {
  const url = `${APIV1}/post`;
  const headers: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, headers);
  return handleResponse(response);
}
