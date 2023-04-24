import axios from 'axios';

const BASE_URL = 'https://644598130431e885f000cfc6.mockapi.io';

export async function getUsers(page, tweetsPerPage) {
  const response = await axios.get(
    `${BASE_URL}/users?page=${page}&limit=${tweetsPerPage}`
  );
  console.log(response);
  console.log(response.data);
  return response.data;
}
