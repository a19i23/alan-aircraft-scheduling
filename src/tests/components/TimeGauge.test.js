import { render, screen } from '@testing-library/react';
import TimeGauge from '../../components/TimeGauge';
import { GlobalWrapper } from '../testUtils';
import { FlightRotation } from '../../mocks/data/FlightRotation';

test('renders TimeGauge component', async () => {
  render(<TimeGauge flightRotation={FlightRotation} />, {
    wrapper: GlobalWrapper,
  });
  const firstIdle = screen.getByTestId('zero-idle');
  const firstService = screen.getByTestId('first-service');

  expect(firstIdle).toBeInTheDocument();
  expect(firstService).toBeInTheDocument();
});
