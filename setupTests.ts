expect.extend({
  toHaveStyle(received) {
    return {
      pass: false,
      message: received,
    };
  },
});
