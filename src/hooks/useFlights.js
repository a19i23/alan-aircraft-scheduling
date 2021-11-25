import useSWR from 'swr';

export const useFlights = (limit, page) => {
  const offset = limit * page - limit;
  return useSWR(`/flights?limit=${limit}&offset=${offset}`);
};
