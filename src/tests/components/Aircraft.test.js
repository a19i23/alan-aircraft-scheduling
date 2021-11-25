import { render, screen } from '@testing-library/react';
import Aircraft from '../../components/Aircraft';
import { GlobalWrapper } from '../testUtils';
import { Aircrafts } from '../../mocks/data/Aircrafts';

const flightRotation = new Map();
flightRotation.set('id123', {
  arrivalTime: 26100,
  departureTime: 21600,
  destination: 'LFMN',
  origin: 'LFSB',
  readableArrival: '07:15',
  readableDeparture: '06:00',
});

test('renders aircraft component', async () => {
  render(
    <Aircraft info={Aircrafts.data[0]} flightRotation={flightRotation} />,
    {
      wrapper: GlobalWrapper,
    },
  );

  const aircraftIcon = screen.getByAltText('airplane-icon');
  const aircraftHeader = screen.getByText(/XYZ123/i);
  const utilization = screen.getByText(/5%/);

  expect(aircraftIcon).toBeInTheDocument();
  expect(aircraftHeader).toBeInTheDocument();
  expect(utilization).toBeInTheDocument();
});
