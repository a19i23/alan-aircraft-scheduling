import { render, screen } from '@testing-library/react';
import FlightRotation from '../../components/FlightRotation';
import { GlobalWrapper } from '../testUtils';
import { FlightRotation as Rotation } from '../../mocks/data/FlightRotation';

test('renders FlightRotation component', async () => {
  const keys = Array.from(Rotation.keys());
  const values = Array.from(Rotation.values());

  render(<FlightRotation id={keys[0]} info={values[0]} />, {
    wrapper: GlobalWrapper,
  });

  const takeoffIcon = screen.getByAltText('airplane-takeoff');
  const flightHeader = screen.getByText(/Flight: id123/i);
  const origin = screen.getByText(/LFSB/);
  const destination = screen.getByText(/LFMN/);
  const readableDeparture = screen.getByText(/06:00/);
  const readableArrival = screen.getByText(/07:15/);

  expect(takeoffIcon).toBeInTheDocument();
  expect(flightHeader).toBeInTheDocument();
  expect(origin).toBeInTheDocument();
  expect(destination).toBeInTheDocument();
  expect(readableDeparture).toBeInTheDocument();
  expect(readableArrival).toBeInTheDocument();
});
