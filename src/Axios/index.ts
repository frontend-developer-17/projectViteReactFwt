import axios, { type AxiosResponse } from 'axios';
import {
  BaseUrl,
  type TPaitings,
  type TAuthors,
  type TLocations,
} from '../types';

const api = axios.create({
  baseURL: BaseUrl[0],
});

export const getPaitings = (
  page: number,
  q: string,
): Promise<AxiosResponse<TPaitings[]>> => {
  const QueryParametrs = q ? `q=${q}` : `_page=${page}`;
  return api.get(`/paintings?${QueryParametrs}`);
};

export const getAuthors = (): Promise<AxiosResponse<TAuthors[]>> => {
  return api.get('/authors');
};
export const getLocations = (): Promise<AxiosResponse<TLocations[]>> => {
  return api.get('/locations');
};
