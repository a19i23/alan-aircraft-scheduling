import { SWRConfig } from 'swr';
import './App.css';
import AircraftScheduler from './components/AircraftScheduler';
import { SWRFetcher } from './SwrFetcher';

function App() {
  return (
    <SWRConfig
      value={{ fetcher: SWRFetcher, suspense: false, revalidateOnFocus: false }}
    >
      <AircraftScheduler />
    </SWRConfig>
  );
}

export default App;
