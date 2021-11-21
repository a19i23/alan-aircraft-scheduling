import useSWR from 'swr';

export const useFlights = (limit, page) => {
  const offset = limit * page;
  return useSWR(
    `https://infinite-dawn-93085.herokuapp.com/flights?limit=${limit}&offset=${offset}`,
  );
};
