const myFizzBuzz = require('./myFizzBuzz');

describe('Test função FizzBuzz', () => {
  test('verifica fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('verifica fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  test('verifica buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  test('verifica um', () => {
    expect(myFizzBuzz(1)).toBe(1)
  });
  test('verifica num', () => {
    expect(myFizzBuzz('8')).toBe(false)
  })
})