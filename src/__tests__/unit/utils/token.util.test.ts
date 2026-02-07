import { generateToken, generateTokenOfLength } from '../../../utils/token.util';

describe('token.util', () => {
  describe('generateToken', () => {
    it('should generate a token of default length (32)', () => {
      const token = generateToken();
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.length).toBe(32);
    });

    it('should generate unique tokens', () => {
      const token1 = generateToken();
      const token2 = generateToken();
      expect(token1).not.toBe(token2);
    });

    it('should generate tokens with alphanumeric characters and underscores', () => {
      const token = generateToken();
      // uid2 génère des tokens avec des caractères alphanumériques, underscores et tirets
      expect(token).toMatch(/^[\w-]+$/);
    });
  });

  describe('generateTokenOfLength', () => {
    it('should generate a token of specified length', () => {
      const token = generateTokenOfLength(16);
      expect(token).toBeDefined();
      expect(token.length).toBe(16);
    });

    it('should generate tokens of different lengths', () => {
      const token16 = generateTokenOfLength(16);
      const token64 = generateTokenOfLength(64);
      expect(token16.length).toBe(16);
      expect(token64.length).toBe(64);
    });

    it('should generate unique tokens even with same length', () => {
      const token1 = generateTokenOfLength(32);
      const token2 = generateTokenOfLength(32);
      expect(token1).not.toBe(token2);
    });
  });
});
