import { SWRConfig } from 'swr';
import './App.css';
import AircraftScheduler from './components/AircraftScheduler';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <AircraftScheduler />
    </SWRConfig>
  );
}

export default App;
