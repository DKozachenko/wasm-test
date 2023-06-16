

import { Variant } from 'as-variant/assembly';

// http://stackoverflow.com/questions/962802#962890
function shuffle(array: i32[]): i32[] {
  let tmp: i32, current: i32, top: i32 = array.length;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }
  return array;
}

/**
 * Получение случайного числа (включая границы диапазона)
 * @param {i32} min нижняя граница
 * @param {i32} max верхняя граница
 * @return {i32} случайное число
 */
function getRandomInt(min: i32, max: i32): i32 {
  return <i32>(Math.floor(Math.random() * <f64>(max - min + 1)) + <f64>min);
}

/**
 * Получение массива со случайными числами
 * @export
 * @param {i32} length длина массива
 * @return {i32[]} массив
 */
export function getRandomArray(length: i32): i32[] {
  const arr: i32[] = [];
  for (let i = 0; i < length; ++i) {
    arr.push(getRandomInt(1, length + 1)); 
  }
  return arr;
}