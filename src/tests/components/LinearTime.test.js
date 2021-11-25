import { render, screen } from '@testing-library/react';
import LinearTime from '../../components/LinearTime';
import { GlobalWrapper } from '../testUtils';

test('renders LinearTime component', async () => {
  render(<LinearTime />, {
    wrapper: GlobalWrapper,
  });

  const zero = screen.getByText(/00:00/);
  const six = screen.getByText(/06:00/);
  const twelve = screen.getByText(/12:00/);
  const eighteen = screen.getByText(/18:00/);
  const twentyfour = screen.getByText(/24:00/);

  expect(zero).toBeInTheDocument();
  expect(six).toBeInTheDocument();
  expect(twelve).toBeInTheDocument();
  expect(eighteen).toBeInTheDocument();
  expect(twentyfour).toBeInTheDocument();
});
