import useSWR from 'swr';

export const useAircrafts = () => {
  return useSWR('https://infinite-dawn-93085.herokuapp.com/aircrafts');
};
