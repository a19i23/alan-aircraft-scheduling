import { render, screen } from '@testing-library/react';
import Flight from '../../components/Flight';
import { GlobalWrapper } from '../testUtils';
import { Flights } from '../../mocks/data/Flights';

test('renders aircraft component', async () => {
  render(<Flight info={Flights.data[1]} />, {
    wrapper: GlobalWrapper,
  });

  const forwardIcon = screen.getByTestId('arrow-forward-icon');
  const addIcon = screen.getByTestId('add-icon');
  const flightHeader = screen.getByText(/Flight: plane2/i);
  const origin = screen.getByText(/LFSB/);
  const destination = screen.getByText(/LFMN/);
  const readableDeparture = screen.getByText(/07:45/);
  const readableArrival = screen.getByText(/08:55/);

  expect(forwardIcon).toBeInTheDocument();
  expect(addIcon).toBeInTheDocument();
  expect(flightHeader).toBeInTheDocument();
  expect(origin).toBeInTheDocument();
  expect(destination).toBeInTheDocument();
  expect(readableDeparture).toBeInTheDocument();
  expect(readableArrival).toBeInTheDocument();
});
