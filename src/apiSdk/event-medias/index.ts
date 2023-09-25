import axios from 'axios';
import queryString from 'query-string';
import { EventMediaInterface, EventMediaGetQueryInterface } from 'interfaces/event-media';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEventMedias = async (
  query?: EventMediaGetQueryInterface,
): Promise<PaginatedInterface<EventMediaInterface>> => {
  const response = await axios.get('/api/event-medias', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEventMedia = async (eventMedia: EventMediaInterface) => {
  const response = await axios.post('/api/event-medias', eventMedia);
  return response.data;
};

export const updateEventMediaById = async (id: string, eventMedia: EventMediaInterface) => {
  const response = await axios.put(`/api/event-medias/${id}`, eventMedia);
  return response.data;
};

export const getEventMediaById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/event-medias/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEventMediaById = async (id: string) => {
  const response = await axios.delete(`/api/event-medias/${id}`);
  return response.data;
};
