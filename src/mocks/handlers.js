import { rest } from 'msw';
import { Aircrafts } from './data/Aircrafts';
import { Flights } from './data/Flights';

export const handlers = [
  rest.get('*/aircrafts', (req, res, ctx) => {
    return res(ctx.json(Aircrafts));
  }),

  rest.get(
    'https://infinite-dawn-93085.herokuapp.com/flights',
    (req, res, ctx) => {
      return res(ctx.json(Flights));
    },
  ),
];
