import axios from 'axios';
import queryString from 'query-string';
import { UserFollowersInterface, UserFollowersGetQueryInterface } from 'interfaces/user-followers';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserFollowers = async (
  query?: UserFollowersGetQueryInterface,
): Promise<PaginatedInterface<UserFollowersInterface>> => {
  const response = await axios.get('/api/user-followers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserFollowers = async (userFollowers: UserFollowersInterface) => {
  const response = await axios.post('/api/user-followers', userFollowers);
  return response.data;
};

export const updateUserFollowersById = async (id: string, userFollowers: UserFollowersInterface) => {
  const response = await axios.put(`/api/user-followers/${id}`, userFollowers);
  return response.data;
};

export const getUserFollowersById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-followers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserFollowersById = async (id: string) => {
  const response = await axios.delete(`/api/user-followers/${id}`);
  return response.data;
};
