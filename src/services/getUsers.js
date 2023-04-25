import axios from 'axios';

const BASE_URL = 'https://644598130431e885f000cfc6.mockapi.io';

export async function getUsers(page, tweetsPerPage) {
  const response = await axios.get(
    `${BASE_URL}/users?page=${page}&limit=${tweetsPerPage}`
  );
  return response.data;
}

export function updateUser(id, followersNumber) {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ followers: followersNumber }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.log('error');
    throw new Error(response.statusText);
  });
}
