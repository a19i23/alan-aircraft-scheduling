import useSWR from 'swr';

export const useFlights = () => {
  return useSWR('https://infinite-dawn-93085.herokuapp.com/flights');
};
