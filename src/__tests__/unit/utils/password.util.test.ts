import { generateSalt, hashPassword, verifyPassword } from '../../../utils/password.util';

describe('password.util', () => {
  describe('generateSalt', () => {
    it('should generate a salt string', () => {
      const salt = generateSalt();
      expect(salt).toBeDefined();
      expect(typeof salt).toBe('string');
      expect(salt.length).toBeGreaterThan(0);
    });

    it('should generate unique salts', () => {
      const salt1 = generateSalt();
      const salt2 = generateSalt();
      expect(salt1).not.toBe(salt2);
    });
  });

  describe('hashPassword', () => {
    it('should hash a password with a salt', () => {
      const password = 'testpassword123';
      const salt = generateSalt();
      const hash = hashPassword(password, salt);

      expect(hash).toBeDefined();
      expect(typeof hash).toBe('string');
      expect(hash.length).toBeGreaterThan(0);
    });

    it('should produce different hashes for different salts', () => {
      const password = 'testpassword123';
      const salt1 = generateSalt();
      const salt2 = generateSalt();
      const hash1 = hashPassword(password, salt1);
      const hash2 = hashPassword(password, salt2);

      expect(hash1).not.toBe(hash2);
    });

    it('should produce same hash for same password and salt', () => {
      const password = 'testpassword123';
      const salt = generateSalt();
      const hash1 = hashPassword(password, salt);
      const hash2 = hashPassword(password, salt);

      expect(hash1).toBe(hash2);
    });
  });

  describe('verifyPassword', () => {
    it('should verify correct password', () => {
      const password = 'testpassword123';
      const salt = generateSalt();
      const hash = hashPassword(password, salt);

      const isValid = verifyPassword(password, salt, hash);
      expect(isValid).toBe(true);
    });

    it('should reject incorrect password', () => {
      const password = 'testpassword123';
      const wrongPassword = 'wrongpassword';
      const salt = generateSalt();
      const hash = hashPassword(password, salt);

      const isValid = verifyPassword(wrongPassword, salt, hash);
      expect(isValid).toBe(false);
    });

    it('should reject password with wrong salt', () => {
      const password = 'testpassword123';
      const salt1 = generateSalt();
      const salt2 = generateSalt();
      const hash = hashPassword(password, salt1);

      const isValid = verifyPassword(password, salt2, hash);
      expect(isValid).toBe(false);
    });
  });
});
