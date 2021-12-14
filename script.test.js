const stringLength = require('./script');

describe('myString', () => {
    test('letras', () => {
        expect(stringLength('hola')).toBe(4);
      });
      
      test('dimensionMin', () => {
        expect(stringLength('')).toBe('menor a 1');
      });
      
      test('dimensionMax', () => {
        expect(stringLength('holaholahola')).toBe('mayor a 10');
      });
});
