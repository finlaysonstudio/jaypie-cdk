global.expect.extend({
  isJaypieError(received) {
    const pass = received instanceof Error && received.isProjectError === true;

    if (pass) {
      return {
        message: () => `expected ${received} not to be a Jaypie Error`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a Jaypie Error`,
        pass: false,
      };
    }
  },
});
