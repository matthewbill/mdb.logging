describe('exports', () => {
  test('exports work correctly', () => {

      const { LogLevels } = require('../index');
      expect(LogLevels).toBeDefined();

      const { LoggerFactory } = require('../index');
      expect(LoggerFactory).toBeDefined();
      
  });
});
