// test/index.test.js
const fs = require('fs');
const generateLogo = require('../src/generateLogo');

describe('generateLogo', () => {
  afterEach(() => {
    // Clean up the generated logo.svg file after each test
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  it('should generate a square logo with 3 characters and a color', () => {
    generateLogo('ABC', 'square', 'blue');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a circle logo with 2 characters and a color', () => {
    generateLogo('12', 'circle', 'green');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a triangle logo with 1 character and a color', () => {
    generateLogo('X', 'triangle', '#FF5733');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a square logo with no characters and a color', () => {
    generateLogo('', 'square', 'red');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a circle logo with 3 characters and no color', () => {
    generateLogo('123', 'circle', '');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a triangle logo with 4 characters and an invalid color', () => {
    generateLogo('TEST', 'triangle', 'invalidColor');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });

  it('should generate a logo with default values when invalid shape is provided', () => {
    generateLogo('ABC', 'invalidShape', 'purple');
    expect(fs.existsSync('logo.svg')).toBe(true);
  });
});
