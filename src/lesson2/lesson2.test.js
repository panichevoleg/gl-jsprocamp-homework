import lesson2 from '../lesson2';

const {
  sum,
  sumAll,
  pow,
  random
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
    expect(sum(1, 5)).toBe(6);
    expect(sum(10, -2)).toBe(8);
    expect(sum(0, 7)).toBe(7);
  });
});


describe('sumAll function', () => {
  test('sumAll works good', () => {
    expect(sumAll()).toBe(0);
    expect(sumAll(5)).toBe(5);
    expect(sumAll(1, 6, 9)).toBe(16);
  });
});


describe('pow function', () => {
  test('pow works good', () => {
    expect(pow(4, 2)).toBe(16);
    expect(pow(2, 8)).toBe(256);
    expect(pow(9, 1)).toBe(9);
    expect(pow(6, 0)).toBe(1);
  });
});

describe('random function', () => {
  test('random works good', () => {
    const min = [0, 20, -10, 15],
          max = [10, 25, 10, 15],
          rnd = [
            [random(min[0], max[0]), random(min[0], max[0])],
            [random(min[1], max[1]), random(min[1], max[1])],
            [random(min[2], max[2]), random(min[2], max[2])],
            [random(min[3], max[3]), random(min[3], max[3])],
          ];

    for (let i = 0; i < 4; i++ ) {
      for (let j = 0; j < 2; j++ ) {
        expect(rnd[i][j]).toBeGreaterThanOrEqual(min[i]);
        expect(rnd[i][j]).toBeLessThanOrEqual(max[i]);
      }
    }
  });
});
