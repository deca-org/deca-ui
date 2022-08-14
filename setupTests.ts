jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));
