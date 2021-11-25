import { render, screen } from '@testing-library/react';
import ColumnContent from '../../../components/AircraftScheduler/ColumnContent';
import { GlobalWrapper } from '../../testUtils';

test('renders column content view', async () => {
  render(<ColumnContent />, { wrapper: GlobalWrapper });

  const aircraftHeader = screen.getByText(/Aircrafts/i);
  const flightHeader = screen.getAllByText(/Flights/i);
  const rotationHeader = await screen.findByText(/Rotation XYZ123/i);

  expect(aircraftHeader).toBeInTheDocument();
  expect(flightHeader).toHaveLength(2);
  expect(rotationHeader).toBeInTheDocument();
});
