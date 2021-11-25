import { render, screen } from '@testing-library/react';
import AircraftScheduler from '../../../components/AircraftScheduler';

test('renders Aircraft Scheduler', () => {
  render(<AircraftScheduler />);
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const dateTommorrow = screen.getByText(date.toDateString());
  expect(dateTommorrow).toBeInTheDocument();
});
