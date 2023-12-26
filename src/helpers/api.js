import { API_URL } from '../data/data.js';

export const getDataFromRandomUserApi = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw Error('Failed to fetch data');
  }

  const result = await response.json();

  return result.results;
}
