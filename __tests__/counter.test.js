import  coinCounter  from '../src/counter.js';

describe("coinCounter", () => {
  
  test('should verify user input is numbers only', () => {
    const input = "4.99";
    expect(typeof (input)).toEqual("number");
  });





});