import axios from 'axios';
import queryString from 'query-string';
import { UserLikesInterface, UserLikesGetQueryInterface } from 'interfaces/user-likes';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserLikes = async (
  query?: UserLikesGetQueryInterface,
): Promise<PaginatedInterface<UserLikesInterface>> => {
  const response = await axios.get('/api/user-likes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserLikes = async (userLikes: UserLikesInterface) => {
  const response = await axios.post('/api/user-likes', userLikes);
  return response.data;
};

export const updateUserLikesById = async (id: string, userLikes: UserLikesInterface) => {
  const response = await axios.put(`/api/user-likes/${id}`, userLikes);
  return response.data;
};

export const getUserLikesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-likes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserLikesById = async (id: string) => {
  const response = await axios.delete(`/api/user-likes/${id}`);
  return response.data;
};
