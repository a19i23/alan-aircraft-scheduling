import { render, screen } from '@testing-library/react';
import Aircraft from '../../components/Aircraft';
import { GlobalWrapper } from '../testUtils';
import { Aircrafts } from '../../mocks/data/Aircrafts';
import { FlightRotation } from '../../mocks/data/FlightRotation';

test('renders Aircraft component', async () => {
  render(
    <Aircraft info={Aircrafts.data[0]} flightRotation={FlightRotation} />,
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
