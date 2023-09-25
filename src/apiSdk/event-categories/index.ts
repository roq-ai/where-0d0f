import axios from 'axios';
import queryString from 'query-string';
import { EventCategoryInterface, EventCategoryGetQueryInterface } from 'interfaces/event-category';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEventCategories = async (
  query?: EventCategoryGetQueryInterface,
): Promise<PaginatedInterface<EventCategoryInterface>> => {
  const response = await axios.get('/api/event-categories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEventCategory = async (eventCategory: EventCategoryInterface) => {
  const response = await axios.post('/api/event-categories', eventCategory);
  return response.data;
};

export const updateEventCategoryById = async (id: string, eventCategory: EventCategoryInterface) => {
  const response = await axios.put(`/api/event-categories/${id}`, eventCategory);
  return response.data;
};

export const getEventCategoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/event-categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEventCategoryById = async (id: string) => {
  const response = await axios.delete(`/api/event-categories/${id}`);
  return response.data;
};
