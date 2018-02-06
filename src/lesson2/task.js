/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
  return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll() {
  let sum = 0;
  for (let i of arguments) {
  	if (typeof i === 'number') {
      sum += i;
    }
  }
  return sum;
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
  	res *= x;
  }
  return res;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
  return Math.floor(Math.random()*(to-from+1)+from);
}

export default {
  sum,
  sumAll,
  pow,
  random,
};
