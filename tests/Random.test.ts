import { rnn } from '../lib/index';
test('Random number', () => {
  expect(rnn(-10, 10)).toBeGreaterThan(-11);
  expect(rnn(-10, 10)).toBeLessThan(11);
});
