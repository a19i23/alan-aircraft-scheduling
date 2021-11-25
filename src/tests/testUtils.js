import React from 'react';
import { SWRConfig } from 'swr';
import { SWRFetcher } from '../SwrFetcher';

export const GlobalWrapper: React.FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        fetcher: SWRFetcher,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
