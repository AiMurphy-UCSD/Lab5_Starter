// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
// isPhoneNumber tests true
test('valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
// isPhoneNumber tests false
test('invalid phone number with letters', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});
test('invalid phone number empty', () => {
  expect(isPhoneNumber('')).toBe(false);
});


// isEmail
// isEmail tests true
test('valid email', () => {
  expect(isEmail('adogmurphy@gmail.com')).toBe(true);
} );
test('valid email with numbers', () => {
  expect(isEmail('aimurphy1234@ucsd.edu')).toBe(true);
} );
// isEmail tests false
test('invalid email with no domain', () => {
  expect(isEmail('adog.murphy@')).toBe(false);
} );
test('invalid email with no username', () => {
  expect(isEmail('@gmail.com')).toBe(false);
} );

// isStrongPassword
// isStrongPassword tests true
test('valid strong password', () => {
  expect(isStrongPassword('a1b2c3d4')).toBe(true);
} );
test('valid strong password with underscore', () => {
  expect(isStrongPassword('a1b2_c3d4')).toBe(true);
} );
// isStrongPassword tests false
test('invalid strong password with special characters', () => {
  expect(isStrongPassword('a1b2c3d4!')).toBe(false);
} );
test('invalid strong password with spaces', () => {
  expect(isStrongPassword('a1b2 c3d4')).toBe(false);
} );

// isDate
// isDate tests true
test('valid date', () => {
  expect(isDate('12/31/2023')).toBe(true);
} );
test('valid date with 1 digit month and day', () => {
  expect(isDate('1/1/2023')).toBe(true);
} );
// isDate tests false
test('invalid date with letters', () => {
  expect(isDate('12/31/2023a')).toBe(false);
} );
test('invalid date with special characters', () => {
  expect(isDate('12/31/2023!')).toBe(false);
} );

// isHexColor
// isHexColor tests true
test('valid hex color', () => {
  expect(isHexColor('#123456')).toBe(true);
} );
test('valid hex color with 3 digits', () => {
  expect(isHexColor('#123')).toBe(true);
} );
// isHexColor tests false
test('invalid hex color with invalid letters', () => {
  expect(isHexColor('#123zvx')).toBe(false);
} );
test('invalid hex color with special characters', () => {
  expect(isHexColor('#123!')).toBe(false);
} );

