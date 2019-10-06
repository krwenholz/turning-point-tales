import post from "src/routes/api/payments/charge";
// TODO(kyle): https://jestjs.io/docs/en/mock-functions#mocking-modules

jest.mock('src/lib/server/database');
jest.mock('src/lib/server/users');

test('handles new subscriber success', () => {
  expect('TODO').toBe('TODO');
});

test('handles new subscriber failure', () => {
  expect('TODO').toBe('TODO');
});

test('handles new subscription failure', () => {
  expect('TODO').toBe('TODO');
});

test('handles database failure', () => {
  expect('TODO').toBe('TODO');
});
