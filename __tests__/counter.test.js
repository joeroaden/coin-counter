// import test from 'node:test';
import {coinCounter} from '../src/counter.js';

describe("coinCounter", () => {
  
  test('should verify user input is numbers only', () => {
    const counter = 4.99;
    expect(typeof (counter)).toEqual("number");
  });

  test('should return counter if input is not a number', () => {
    const counter = parseInt("");
    expect(counter).toEqual(NaN);
  });

  test('should stop counter once counter equals zero', () => {
    const counter = 0;
    expect(counter).toEqual(0);
  });

  test('should remove all quarters from counter', () => {
    const newCounter = .25;
    expect(coinCounter(newCounter)).toEqual(expect.stringContaining("Quarters: 1, 0"));
  });

  test('should remove all dimes from counter', () => {
    const newCounter = .10;
    expect(coinCounter(newCounter)).toEqual(expect.stringContaining("Dimes: 1, 0"));
  });





});