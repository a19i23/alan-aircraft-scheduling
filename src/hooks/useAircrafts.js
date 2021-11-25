import useSWR from 'swr';

export const useAircrafts = () => {
  return useSWR('/aircrafts');
};
